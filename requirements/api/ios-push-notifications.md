# iOS push notifications (CometChat)

This app supports **FCM-based chat push on iOS** using the same **`fcmProviderId`** as Android, per [iOS FCM push notifications](https://www.cometchat.com/docs/notifications/ios-fcm-push-notifications).

## Apple entitlements (`aps-environment`)

The iOS target **must** include the **`aps-environment`** entitlement (Push Notifications capability). If `ios/SampleAppExpo/SampleAppExpo.entitlements` is empty or missing this key, `messaging().getToken()` fails with:

`[messaging/unknown] no valid "aps-environment" entitlement string found for application`

Development builds use `development`; App Store / TestFlight release builds should use `production` (match your provisioning profile). `app.json` mirrors this under `expo.ios.entitlements` for `expo prebuild`.

## Client behavior

1. **Native:** `AppDelegate` forwards the APNs device token to `FirebaseMessaging` (`Messaging.messaging().apnsToken`) so FCM can produce an iOS registration token.
2. **JS:** After CometChat login, the app calls `messaging().getToken()` and `CometChatNotifications.registerPushToken` with platform `FCM_REACT_NATIVE_IOS` and `AppConstants.fcmProviderId`.

## Dashboard prerequisites

- CometChat: Notifications enabled; **FCM iOS** (or unified FCM) provider created with Firebase **service account** JSON; copy **Provider ID** into `fcmProviderId`.
- Firebase: **Cloud Messaging** → iOS app has **APNs auth key** (or certificates) uploaded so FCM can deliver to APNs.

## Optional: pure APNs (no FCM for chat)

If you use only an **APNs Device** provider in CometChat (see [iOS APNs push notifications](https://www.cometchat.com/docs/notifications/ios-apns-push-notifications)), set **`apnsProviderId`** in `AppConstants.tsx`. The app registers the raw device token only when this value is non-empty; otherwise chat push uses FCM only.

## VoIP calls

VoIP tokens still register through the APNs VoIP path in code. You may need a separate **APNs VoIP** provider ID in CometChat if your dashboard uses a different provider than the device token path—align with CometChat’s call setup docs if call pushes fail.
