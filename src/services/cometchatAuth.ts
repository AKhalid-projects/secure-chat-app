import AsyncStorage from '@react-native-async-storage/async-storage';
import {CometChatUIKit} from '@cometchat/chat-uikit-react-native';
import {AppConstants} from '../utils/AppConstants';
import {
  hasLocalPassword,
  savePasswordForUid,
  verifyPasswordForUid,
} from './localAuth';

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
  'Sign up needs your full-access REST API key. Set `restApiKey` in `AppConstants.tsx` or `EXPO_PUBLIC_COMETCHAT_REST_API_KEY` in `.env`. Dashboard → API & Auth Keys (full access). It is not the client Auth Key.';

export const signInWithUid = async (uid: string) => {
  return CometChatUIKit.login({uid: uid.trim()});
};

/**
 * Sign in to CometChat with UID, enforcing a device-local password.
 * First successful login on this device stores the password; later logins verify it.
 */
export const signInWithUidAndPassword = async (uid: string, password: string) => {
  const u = uid.trim();
  if (!u || !password.trim()) {
    const err = new Error('Enter UID and password.') as Error & {code?: string};
    err.code = 'local-auth/missing-credentials';
    throw err;
  }

  if (await hasLocalPassword(u)) {
    const ok = await verifyPasswordForUid(u, password);
    if (!ok) {
      const e = new Error('Wrong password.') as Error & {code?: string};
      e.code = 'local-auth/wrong-password';
      throw e;
    }
    return signInWithUid(u);
  }

  await signInWithUid(u);
  await savePasswordForUid(u, password);
};

/** After sign-up (create user + CometChat login), persist the chosen password locally. */
export const saveSignUpPassword = async (uid: string, password: string) => {
  await savePasswordForUid(uid.trim(), password);
};

export const createCometChatUser = async (input: CreateCometChatUserInput) => {
  const credentials = await getCredentials();
  if (!credentials.appId || !credentials.region) {
    throw new Error(
      'App ID or region is missing. Set `appId` and `region` in `AppConstants.tsx`.',
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
  const code = error?.code as string | undefined;
  const raw = String(error?.message || error || '');
  if (code === 'local-auth/wrong-password') return 'Wrong password.';
  if (code === 'local-auth/missing-credentials') return 'Enter UID and password.';
  if (raw.includes('ERR_UID_NOT_FOUND')) return 'This UID does not exist.';
  if (raw.includes('already exists')) return 'This UID already exists.';
  if (raw.includes('401')) return 'Invalid CometChat REST API key.';
  if (raw.includes('Sign up needs your full-access REST API key')) return raw;
  if (raw.includes('App ID or region is missing')) return raw;
  if (raw.includes('Set `appId` and `region`')) return raw;
  return raw || 'Authentication failed. Please try again.';
};
