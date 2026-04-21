# Secure Chat App

A secure chat application built with React Native and Expo, featuring real-time messaging, voice/video calling, and push notifications powered by CometChat UIKit.

## Features

- 🔐 **Secure Messaging**: Real-time one-on-one and group messaging
- 🔑 **CometChat Auth Flow**: Bundled App ID / Auth Key / REST key, Sign In & Sign Up with device-local password (see `requirements/api/local-auth.md`)
- 📞 **Voice & Video Calls**: High-quality voice and video calling with WebRTC
- 🔔 **Push Notifications**: Firebase Cloud Messaging (FCM) for Android and Apple Push Notification Service (APNs) for iOS
- 📱 **Cross-Platform**: Works on both iOS and Android
- 🎨 **Modern UI**: Beautiful, responsive user interface with dark mode support
- 👥 **User Management**: Create conversations, manage groups, and view user profiles
- 🔍 **Search**: Search through messages and conversations
- 💬 **Thread Replies**: Reply to specific messages in conversations

If you have an older local `ios/` or `android/` tree from before this app was renamed to **SecureChatApp**, remove those folders and run `npx expo prebuild` so native project names match `app.json` (otherwise Xcode may still show `SampleAppExpo` until you regenerate).

## Repository layout

This **repository root is the Secure Chat app**: `package.json`, `App.tsx`, `src/`, and (after prebuild or local generation) `android/` and `ios/`. Reference source for the CometChat React Native UI Kit lives under `packages/ChatUiKit/` (the app depends on the published npm package). Engineering and thesis requirements are under `requirements/`. The previous CometChat monorepo–style readme is archived at [`docs/legacy-cometchat-ui-kit-readme.md`](docs/legacy-cometchat-ui-kit-readme.md).

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

### 3. CometChat credentials (bundled)

Defaults live in **`src/utils/AppConstants.tsx`** (`appId`, `authKey`, `region`, push provider IDs). The app **does not** prompt users to enter these on first launch.

For **Sign Up** (REST `POST /users`), set the full-access **REST API key** in one of two ways:

- Create a **`.env`** file in the project root with  
  `EXPO_PUBLIC_COMETCHAT_REST_API_KEY=your_full_access_rest_key`  
  (Expo inlines `EXPO_PUBLIC_*` at build time), or  
- Assign `restApiKey` directly in `AppConstants.tsx` for local dev (avoid committing real secrets to public repos).

**Sign In / Sign Up** also use an app **password** stored only on-device (`expo-secure-store`); see `requirements/api/local-auth.md`.

### 4. Configure Firebase (Push Notifications only)

- Add native Firebase config files:
  - iOS: `GoogleService-Info.plist`
  - Android: `google-services.json`
### 5. Configure Firebase (for Push Notifications)

#### iOS Setup:
1. Download your `GoogleService-Info.plist` from Firebase Console
2. Place it in `ios/SampleAppExpo.xcworkspace/` (or open `ios/SampleAppExpo.xcodeproj` in Xcode and add the file to the app target if you use a single-project workflow)

#### Android Setup:
1. Download your `google-services.json` from Firebase Console
2. Place it in `android/app/` directory

### 6. Install iOS Dependencies

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
npx expo run:ios -d 7BB6E5CA-F483-49EB-AA21-6F201D01BC8A
npx expo run:ios -d 9C4761E7-A4DB-452C-BB49-C2EA5BED8640 --no-bundler
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

Install the Android SDK (e.g. via Android Studio). Gradle must find it: set **`ANDROID_HOME`** to your SDK directory (on macOS, often `~/Library/Android/sdk`), **or** create **`android/local.properties`** with a single line `sdk.dir=/absolute/path/to/sdk`. That file is machine-specific and is not committed.

```bash
npx expo run:android
```

## Troubleshooting

### Android: “SDK location not found”

If the build fails with `SDK location not found` / `ANDROID_HOME`, set `ANDROID_HOME` or add `sdk.dir` in `android/local.properties` as described under [Running on Android](#running-on-android).

### Android: `Could not find app.notifee:core`

`@notifee/react-native` loads its native core from a **local Maven repo** under `node_modules/@notifee/react-native/android/libs`. Gradle must list that path under `allprojects.repositories` in `android/build.gradle`. This repo uses the Expo config plugin `plugins/withAndroidNotifeeMaven.js` (see `app.json`) so `npx expo prebuild` injects it automatically. If you still see the error, run `npm install` (so `node_modules/@notifee/.../libs` exists) and confirm the `maven { url("$rootDir/../node_modules/@notifee/react-native/android/libs") }` line is present.

### Build Database Locked Error

If you encounter a "database is locked" error:

```bash
# Kill all build processes
killall -9 xcodebuild

# Clean DerivedData
rm -rf ~/Library/Developer/Xcode/DerivedData/SecureChatApp-*

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

Follow CometChat’s guides: [iOS FCM](https://www.cometchat.com/docs/notifications/ios-fcm-push-notifications), [iOS APNs](https://www.cometchat.com/docs/notifications/ios-apns-push-notifications).

### Android (FCM)
- Configure Firebase project
- Add `google-services.json` to `android/app/`
- In CometChat Dashboard → Notifications, add **FCM (Android)** credentials and copy the **Provider ID** into `fcmProviderId` in `AppConstants.tsx`

### iOS (FCM — same provider family as Android)
This project registers the **FCM registration token** on iOS (not the raw APNs token) for **chat** notifications, using the **same `fcmProviderId`** as Android. Native code sets `Messaging.messaging().apnsToken` in `AppDelegate` so Firebase can issue the FCM token.

- Add `GoogleService-Info.plist` to the iOS target (see `app.json` `ios.googleServicesFile`).
- In **Firebase Console** → Project settings → **Cloud Messaging**, upload your **APNs authentication key** (or certificates) for the iOS app so FCM can deliver to APNs.
- In **CometChat Dashboard**, add an **FCM iOS** provider (Firebase service account JSON) and set **`fcmProviderId`** in `AppConstants.tsx` to that provider’s ID (must match the app you configured).
- Xcode: enable **Push Notifications** and **Background Modes** → **Remote notifications** (already reflected via Expo `UIBackgroundModes` where applicable).
- The iOS target must ship **`aps-environment`** in `SampleAppExpo.entitlements` (see `app.json` → `ios.entitlements`). An empty entitlements file causes `no valid "aps-environment"` when fetching the FCM token. Use **`development`** for local/dev builds and **`production`** for App Store release (match your provisioning profile).

### iOS (optional: APNs Device provider only)
If you use CometChat’s **APNs Device** provider instead of FCM for chat, set **`apnsProviderId`** in `AppConstants.tsx`. Leave it empty to use **FCM-only** registration for chat (recommended path in this repo).

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
