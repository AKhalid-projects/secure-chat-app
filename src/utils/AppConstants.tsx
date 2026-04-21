/**
 * CometChat keys are bundled here (no in-app credentials screen required).
 * Optional: set `EXPO_PUBLIC_COMETCHAT_REST_API_KEY` in `.env` for the REST API key used at sign-up.
 */
const envRestApiKey =
  typeof process !== 'undefined' && process.env?.EXPO_PUBLIC_COMETCHAT_REST_API_KEY
    ? String(process.env.EXPO_PUBLIC_COMETCHAT_REST_API_KEY).trim()
    : '';

export const AppConstants = {
  /** CometChat Dashboard → Notifications → FCM provider ID (used for Android + iOS FCM chat push). */
  fcmProviderId: '435251613306',
  /** Only if you use CometChat’s APNs Device provider for chat (not FCM). Leave empty for FCM-only iOS. */
  apnsProviderId: '',
  authKey: 'df50d6a569e80537fde3a11cac710409676e9f09',
  /** Full-access REST API key (sign-up / create user). Prefer `.env` or paste here for dev builds. */
  restApiKey: envRestApiKey,
  appId: '1673397810d89b0a5',
  region: 'US',
  subscriptionType: 'ALL_USERS',
  versionNumber: 'V5.2.10',
  webClientId:
    '',
  iosClientId:
    '',
};

export const SCREEN_CONSTANTS = {
  LOGIN: 'Login',
  SIGN_IN: 'SignIn',
  SIGN_UP: 'SignUp',
  APP_CRED: 'AppCredentials',
  SAMPLE_USER: 'SampleUser',
  ONGOING_CALL_SCREEN: 'OngoingCallScreen',
  BOTTOM_TAB_NAVIGATOR: 'BottomTabNavigator',
  CHATS: 'Chats',
  CALLS: 'Calls',
  USERS: 'Users',
  GROUPS: 'Groups',
  CONVERSATION: 'Conversation',
  CREATE_CONVERSATION: 'CreateConversation',
  MESSAGES: 'Messages',
  SEARCH_MESSAGES: 'SearchMessages',
  THREAD_VIEW: 'ThreadView',
  USER_INFO: 'UserInfo',
  GROUP_INFO: 'GroupInfo',
  ADD_MEMBER: 'AddMember',
  TRANSFER_OWNERSHIP: 'TransferOwnershipSection',
  BANNED_MEMBER: 'BannedMember',
  VIEW_MEMBER: 'ViewMembers',
  CALL_LOGS: 'CallLogs',
  CALL_DETAILS: 'CallDetails',
  QR_SCREEN: 'QRScreen',
} as const;
