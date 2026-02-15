# Secure Chat App

A secure chat application built with React Native and Expo, featuring real-time messaging, voice/video calling, and push notifications powered by CometChat UIKit.

## Features

- 🔐 **Secure Messaging**: Real-time one-on-one and group messaging
- 📞 **Voice & Video Calls**: High-quality voice and video calling with WebRTC
- 🔔 **Push Notifications**: Firebase Cloud Messaging (FCM) for Android and Apple Push Notification Service (APNs) for iOS
- 📱 **Cross-Platform**: Works on both iOS and Android
- 🎨 **Modern UI**: Beautiful, responsive user interface with dark mode support
- 👥 **User Management**: Create conversations, manage groups, and view user profiles
- 🔍 **Search**: Search through messages and conversations
- 💬 **Thread Replies**: Reply to specific messages in conversations

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g expo-cli`)
- **Xcode** (for iOS development, macOS only)
- **CocoaPods** (`sudo gem install cocoapods`)
- **iOS Simulator** (via Xcode) or physical iOS device
- **CometChat Account**: Sign up at [CometChat](https://www.cometchat.com/) to get your App ID and Auth Key

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AKhalid-projects/secure-chat-app.git
cd secure-chat-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure CometChat Credentials

Update the CometChat credentials in `src/utils/AppConstants.tsx`:

```typescript
export const AppConstants = {
  fcmProviderId: 'YOUR_FCM_PROVIDER_ID',
  apnsProviderId: 'YOUR_APNS_PROVIDER_ID',
  authKey: 'YOUR_AUTH_KEY',
  appId: 'YOUR_APP_ID',
  region: 'YOUR_REGION', // e.g., 'US', 'EU', 'IN'
  // ... other constants
};
```

### 4. Configure Firebase (for Push Notifications)

#### iOS Setup:
1. Download your `GoogleService-Info.plist` from Firebase Console
2. Place it in `ios/SampleAppExpo.xcworkspace/` directory

#### Android Setup:
1. Download your `google-services.json` from Firebase Console
2. Place it in `android/app/` directory

### 5. Install iOS Dependencies

```bash
cd ios
pod install
cd ..
```

## Running the App

### Running on Two iOS Devices (Simulators)

This guide will help you run the app on two iOS simulators simultaneously for testing messaging and push notifications between devices.

#### Step 1: List Available Simulators

```bash
xcrun simctl list devices available | grep "iPhone"
```

#### Step 2: Boot Two iOS Simulators

```bash
# Boot first simulator (e.g., iPhone 17 Pro)
xcrun simctl boot "DEVICE_ID_1"

# Boot second simulator (e.g., iPhone 17 Pro Max)
xcrun simctl boot "DEVICE_ID_2"
```

#### Step 3: Start Expo Development Server

```bash
npx expo start --dev-client
```

#### Step 4: Build and Run on First Device

In a new terminal window:

```bash
npx expo run:ios --device "DEVICE_ID_1"
```

Wait for the first build to complete (typically 3-5 minutes).

#### Step 5: Build and Run on Second Device

After the first build completes, in another terminal window:

```bash
npx expo run:ios --device "DEVICE_ID_2"
```

**Note:** To avoid build database conflicts, run builds sequentially rather than simultaneously.

#### Alternative: Automated Sequential Builds

You can use this script to automatically start the second build after the first completes:

```bash
# Start first build
npx expo run:ios --device "DEVICE_ID_1" &

# Wait for first build to complete, then start second
sleep 240 && while pgrep -f "expo run:ios.*DEVICE_ID_1" > /dev/null; do 
  echo "Waiting for first build to complete..."; 
  sleep 30; 
done && npx expo run:ios --device "DEVICE_ID_2"
```

### Running on Physical iOS Devices

1. Connect your iOS devices via USB
2. Trust the computer on your devices
3. Run the app on each device:

```bash
# Device 1
npx expo run:ios --device

# Device 2 (after first build completes)
npx expo run:ios --device
```

### Running on Android

```bash
npx expo run:android
```

## Troubleshooting

### Build Database Locked Error

If you encounter a "database is locked" error:

```bash
# Kill all build processes
killall -9 xcodebuild

# Clean DerivedData
rm -rf ~/Library/Developer/Xcode/DerivedData/SampleAppExpo-*

# Restart the build
npx expo run:ios --device "DEVICE_ID"
```

### Metro Bundler Issues

If the app shows "main has not been registered":

```bash
# Clear Metro cache and restart
npx expo start --dev-client --clear
```

### Pod Installation Issues

If you encounter CocoaPods errors:

```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Push Notifications Not Working

1. Ensure Firebase configuration files are in place
2. Verify CometChat credentials are correct
3. Check that push notification permissions are granted on the device
4. For iOS, ensure the app is built with a development or distribution certificate that supports push notifications

## Project Structure

```
secure-chat-app/
├── src/
│   ├── components/          # React components
│   │   ├── conversations/   # Chat and conversation screens
│   │   ├── calls/           # Call-related components
│   │   ├── groups/          # Group management
│   │   └── users/           # User management
│   ├── navigation/          # Navigation setup
│   ├── utils/               # Utility functions
│   │   ├── PushNotification.tsx      # Push token registration
│   │   ├── VoipNotificationHandler.ts # VoIP call handling
│   │   └── PendingCallManager.ts     # Pending call management
│   └── config/              # App configuration
├── ios/                      # iOS native code
├── android/                  # Android native code
├── assets/                   # Images, fonts, and other assets
└── App.tsx                   # Main app component
```

## Key Dependencies

- `@cometchat/chat-uikit-react-native` - CometChat UI components
- `@cometchat/chat-sdk-react-native` - CometChat SDK
- `@react-native-firebase/messaging` - Firebase Cloud Messaging
- `@notifee/react-native` - Local notifications (Android)
- `react-native-callkeep` - Native call UI
- `react-native-voip-push-notification` - VoIP push notifications (iOS)
- `@react-native-community/push-notification-ios` - iOS push notifications

## Push Notification Setup

### Android (FCM)
- Configure Firebase project
- Add `google-services.json` to `android/app/`
- Set `fcmProviderId` in `AppConstants.tsx`

### iOS (APNs)
- Configure Firebase project
- Add `GoogleService-Info.plist` to `ios/SampleAppExpo.xcworkspace/`
- Set `apnsProviderId` in `AppConstants.tsx`
- Enable Push Notifications and VoIP capabilities in Xcode

## Testing Push Notifications

1. Run the app on two devices/simulators
2. Log in with different users on each device
3. Send a message from one device
4. The other device should receive a push notification (if app is in background/killed state)
5. Tap the notification to open the conversation

## Testing Voice/Video Calls

1. Run the app on two devices
2. Log in with different users
3. Initiate a call from one device
4. The other device should receive a VoIP push notification
5. Answer the call to establish connection

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
- CometChat Documentation: https://www.cometchat.com/docs
- Expo Documentation: https://docs.expo.dev/
