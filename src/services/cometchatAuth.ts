import AsyncStorage from '@react-native-async-storage/async-storage';
import {CometChatUIKit} from '@cometchat/chat-uikit-react-native';
import {AppConstants} from '../utils/AppConstants';

type AppCredentials = {
  appId: string;
  region: string;
  authKey: string;
  restApiKey?: string;
};

export type CreateCometChatUserInput = {
  uid: string;
  name: string;
  avatar?: string;
  link?: string;
  role?: string;
  statusMessage?: string;
  tags?: string[];
  privateEmail?: string;
  privateContactNumber?: string;
  withAuthToken?: boolean;
};

const getCredentials = async (): Promise<AppCredentials> => {
  const raw = await AsyncStorage.getItem('appCredentials');
  const parsed = raw ? JSON.parse(raw) : {};
  const appId = String(parsed.appId || AppConstants.appId || '').trim();
  const region = String(parsed.region || AppConstants.region || '').trim();
  const authKey = String(parsed.authKey || AppConstants.authKey || '').trim();
  const restApiKey = String(
    parsed.restApiKey ?? AppConstants.restApiKey ?? '',
  ).trim();
  return {appId, region, authKey, restApiKey};
};

const missingRestApiKeyMessage =
  'Sign up needs your full-access REST API key. In the CometChat Dashboard go to API & Auth Keys and copy the REST API key (full access). Open App Credentials in this app and paste it in “REST API Key”. It is not the same as the Auth Key used for chat login.';

export const signInWithUid = async (uid: string) => {
  return CometChatUIKit.login({uid: uid.trim()});
};

export const createCometChatUser = async (input: CreateCometChatUserInput) => {
  const credentials = await getCredentials();
  if (!credentials.appId || !credentials.region) {
    throw new Error(
      'App ID or region is missing. Update App Credentials with your CometChat app details.',
    );
  }
  if (!credentials.restApiKey) {
    throw new Error(missingRestApiKeyMessage);
  }

  const region = credentials.region.toLowerCase();
  const metadataPrivate: Record<string, string> = {};
  if (input.privateEmail?.trim()) {
    metadataPrivate.email = input.privateEmail.trim();
  }
  if (input.privateContactNumber?.trim()) {
    metadataPrivate.contactNumber = input.privateContactNumber.trim();
  }

  const payload: Record<string, unknown> = {
    uid: input.uid.trim(),
    name: input.name.trim(),
    withAuthToken: input.withAuthToken ?? true,
  };
  if (input.avatar?.trim()) payload.avatar = input.avatar.trim();
  if (input.link?.trim()) payload.link = input.link.trim();
  if (input.role?.trim()) payload.role = input.role.trim();
  if (input.statusMessage?.trim()) payload.statusMessage = input.statusMessage.trim();
  if (input.tags?.length) payload.tags = input.tags;
  if (Object.keys(metadataPrivate).length > 0) {
    payload.metadata = {'@private': metadataPrivate};
  }

  const response = await fetch(
    `https://${credentials.appId}.api-${region}.cometchat.io/v3/users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: credentials.restApiKey,
      },
      body: JSON.stringify(payload),
    },
  );

  const rawBody = await response.text();
  if (!response.ok) {
    throw new Error(rawBody || `Failed to create user (${response.status})`);
  }

  return rawBody ? JSON.parse(rawBody) : {};
};

export const mapCometChatAuthError = (error: any): string => {
  const raw = String(error?.message || error || '');
  if (raw.includes('ERR_UID_NOT_FOUND')) return 'This UID does not exist.';
  if (raw.includes('already exists')) return 'This UID already exists.';
  if (raw.includes('401')) return 'Invalid CometChat REST API key.';
  if (raw.includes('Sign up needs your full-access REST API key')) return raw;
  if (raw.includes('App ID or region is missing')) return raw;
  return raw || 'Authentication failed. Please try again.';
};
