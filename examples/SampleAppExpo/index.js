import {registerRootComponent} from 'expo';
import {Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {voipHandler} from './src/utils/VoipNotificationHandler';
import {CometChat} from '@cometchat/chat-sdk-react-native';
import {navigationRef} from './src/navigation/NavigationService';
import {displayLocalNotification} from './src/utils/helper';
import notifee, {EventType, AndroidImportance} from '@notifee/react-native';
import {StackActions} from '@react-navigation/native';
import AppErrorBoundary from './AppErrorBoundary';
import {ActiveChatProvider} from './src/utils/ActiveChatContext';

if (global?.ErrorUtils) {
  const defaultHandler = global.ErrorUtils.getGlobalHandler();

  function globalErrorHandler(error, isFatal) {
    console.log(
      '[GlobalErrorHandler]:',
      isFatal ? 'Fatal:' : 'Non-Fatal:',
      error,
    );
    defaultHandler?.(error, isFatal);
  }

  global.ErrorUtils.setGlobalHandler(globalErrorHandler);
}

if (typeof process === 'object' && process.on) {
  process.on('unhandledRejection', (reason, promise) => {
    console.log('[Unhandled Promise Rejection]:', reason);
  });
}

const Root = () => (
  <AppErrorBoundary>
    <ActiveChatProvider>
      <App />
    </ActiveChatProvider>
  </AppErrorBoundary>
);

// Run Notifee background event handler only on Android
if (Platform.OS === 'android') {
  notifee.onBackgroundEvent(async ({type, detail}) => {
    try {
      if (type === EventType.PRESS) {
        const {notification} = detail;
        if (notification?.id) {
          await notifee.cancelNotification(notification.id);
        }
        const data = detail?.notification?.data || {};

        if (data.receiverType === 'group') {
          const extractedId =
            typeof data.conversationId === 'string'
              ? data.conversationId.split('_').slice(1).join('_')
              : '';
          CometChat.getGroup(extractedId).then(
            group => {
              navigationRef.current?.dispatch(
                StackActions.push('Messages', {
                  group,
                  parentMessageId: data.parentId,
                }),
              );
            },
            error => console.log('Error fetching group details:', error),
          );
        } else if (data.receiverType === 'user') {
          CometChat.getUser(data.sender).then(
            ccUser => {
              navigationRef.current?.dispatch(
                StackActions.push('Messages', {
                  user: ccUser,
                  parentMessageId: data.parentId,
                }),
              );
            },
            error => console.log('Error fetching user details:', error),
          );
        }
      }
    } catch (error) {
      console.log('Error handling notifee background event:', error);
    }
  });
}

// This runs for background/killed states on Android.
if (Platform.OS === 'android') {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    try {
      const data = remoteMessage.data || {};
      if (data.type === 'call') {
        await voipHandler.initialize();
        switch (data.callAction) {
          case 'initiated':
            voipHandler.msg = data;
            await voipHandler.displayCallAndroid();
            break;
          case 'ended':
            CometChat.clearActiveCall();
            await voipHandler.endCall({callUUID: voipHandler.callerId});
            break;
          case 'unanswered':
            CometChat.clearActiveCall();
            if (voipHandler?.callerId) {
              voipHandler.removeCallDialerWithUUID(voipHandler.callerId);
            } else {
              console.warn('Caller ID is missing. Cannot remove call dialer.');
            }
            break;
          case 'busy':
            CometChat.clearActiveCall();
            if (voipHandler?.callerId) {
              voipHandler.removeCallDialerWithUUID(voipHandler.callerId);
            } else {
              console.warn('Caller ID is missing. Cannot remove call dialer.');
            }
            break;
          case 'ongoing':
            // Display ongoing call notification using notifee
            try {
              const channelId = await notifee.createChannel({
                id: 'ongoing-call',
                name: 'Ongoing Call',
                importance: AndroidImportance.HIGH,
              });
              await notifee.displayNotification({
                title: data?.receiverName || 'Ongoing Call',
                body: 'Ongoing call',
                android: {
                  channelId,
                  importance: AndroidImportance.HIGH,
                },
              });
            } catch (error) {
              console.error('Error displaying ongoing call notification:', error);
            }
            break;
          case 'rejected':
            CometChat.clearActiveCall();
            if (voipHandler?.callerId) {
              voipHandler.removeCallDialerWithUUID(voipHandler.callerId);
            } else {
              console.warn('Caller ID is missing. Cannot remove call dialer.');
            }
            break;
          case 'cancelled':
            CometChat.clearActiveCall();
            if (voipHandler?.callerId) {
              voipHandler.removeCallDialerWithUUID(voipHandler.callerId);
            } else {
              console.warn('Caller ID is missing. Cannot remove call dialer.');
            }
            break;
          default:
            break;
        }
        return;
      } else {
        await displayLocalNotification(remoteMessage);
      }
    } catch (error) {
      console.error('Error in background message handler:', error);
    }
  });
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
