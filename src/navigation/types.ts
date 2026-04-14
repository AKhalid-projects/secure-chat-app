import { NavigatorScreenParams } from '@react-navigation/native';
import { CometChat } from '@cometchat/chat-sdk-react-native';

export type CallType = 'audio' | 'video';

export type RootStackParamList = {
  Login: undefined;
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  OngoingCallScreen: { sessionId: string; callType?: CallType } | { call: any };
  AppCredentials: undefined;
  SampleUser: undefined;
  Conversation: undefined;
  CreateConversation: undefined;
  Messages: {
    user?: CometChat.User;
    group?: CometChat.Group;
    /** Serializable: use when navigating so state is safe. Resolved to User/Group in Messages. */
    userUid?: string;
    /** Serializable: use when navigating so state is safe. Resolved to Group in Messages. */
    groupGuid?: string;
    fromMention?: boolean;
    fromMessagePrivately?: boolean;
    parentMessageId?: string;
    messageId?: string;
    searchKeyword?: string;
    navigatedFromSearch?: boolean;
  };
  SearchMessages: {
    user?: CometChat.User;
    group?: CometChat.Group;
  };
  BannedMembers: undefined;
  UserInfo: {
    user: CometChat.User;
  };
  GroupInfo: {
    group: CometChat.Group;
  };
  ThreadView: {
    message: CometChat.BaseMessage;
    user?: CometChat.User;
    group?: CometChat.Group;
    userUid?: string;
    groupGuid?: string;
    highlightMessageId?: string;
  };
  AddMember: {
    group: CometChat.Group;
  };
  TransferOwnershipSection: {
    group: CometChat.Group;
  };
  BannedMember: {
    group: CometChat.Group;
  };
  ViewMembers: {
    group: CometChat.Group;
  };
  CallLogs: undefined;
  CallDetails: {
    call: any;
  };
  Users: undefined;
  Groups: undefined;
  QRScreen: undefined;
};

export type BottomTabParamList = {
  Chats: undefined;
  Calls: undefined;
  Users: undefined;
  Groups: undefined;
};
