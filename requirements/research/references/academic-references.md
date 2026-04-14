# References (Chapter 10 — working bibliography)

## Introduction

This document is the **working reference list** for the final-year report. It **will** be finalised for the bound thesis: duplicate entries **will** be removed, ordering **will** follow the chosen style, and access dates for online sources **will** be added if required by the faculty.

**Citation style (to be confirmed):** Use the style mandated by your department (e.g. Harvard, IEEE, APA). The entries below are **not** yet formatted in a single house style; convert them when preparing the Word/LaTeX submission.

**Version alignment:** Dependency versions **will** match [`package.json`](../../../package.json) at submission time. Representative versions cited below reflect the repository **at the time this file was authored** (Expo SDK ~54, React Native 0.81.x, React 19.1.x, TypeScript ~5.9, CometChat UIKit 5.2.x, etc.). **Verify** before printing.

**Academic sources:** Peer-reviewed articles, books, and standards cited in **Chapter 2 (Literature Review)** are listed under **To be added (TBD)**—no placeholder DOIs or fabricated titles.

---

## Core framework and language

| Resource | Publisher / project | URL (verify before submission) |
|----------|----------------------|-------------------------------|
| Expo documentation | Expo | https://docs.expo.dev/ |
| React Native documentation | Meta / React Native | https://reactnative.dev/docs/getting-started |
| React documentation | Meta / React | https://react.dev/ |
| TypeScript documentation | Microsoft | https://www.typescriptlang.org/docs/ |

*Repository pins (verify):* `expo` ~54.0.12; `react-native` 0.81.4; `react` 19.1.0; `typescript` ~5.9.2 ([`package.json`](../../../package.json)).

---

## CometChat (messaging, UIKit, calls)

| Resource | Notes | URL |
|----------|-------|-----|
| CometChat documentation | UIKit, SDKs, platform guides | https://www.cometchat.com/docs |
| CometChat React Native UI Kit | Aligns with `@cometchat/chat-uikit-react-native` | See developer portal under official docs |

*Repository pins (verify):* `@cometchat/chat-uikit-react-native` ^5.2.10; `@cometchat/chat-sdk-react-native` ^4.0.19; `@cometchat/calls-sdk-react-native` ^4.4.0.

---

## Navigation and UI (React Native)

| Resource | URL |
|----------|-----|
| React Navigation | https://reactnavigation.org/docs/getting-started/ |

*Repository pins (verify):* `@react-navigation/native` ^7.1.18; `@react-navigation/stack` ^7.4.8; `@react-navigation/bottom-tabs` ^7.4.7.

| Resource | URL |
|----------|-----|
| React Native Gesture Handler | https://docs.swmansion.com/react-native-gesture-handler/docs/ |
| React Native Screens | https://github.com/software-mansion/react-native-screens |
| React Native Safe Area Context | https://github.com/th3rdwave/react-native-safe-area-context |
| React Native SVG | https://github.com/software-mansion/react-native-svg |

---

## Firebase and push notifications

| Resource | URL |
|----------|-----|
| React Native Firebase | https://rnfirebase.io/ |
| Firebase Cloud Messaging (Google) | https://firebase.google.com/docs/cloud-messaging |
| Notifee (local notifications) | https://notifee.app/react-native/docs/overview |

*Repository pins (verify):* `@react-native-firebase/app` ^23.4.0; `@react-native-firebase/messaging` ^23.4.0; `@notifee/react-native` ^9.1.8.

| Resource | URL |
|----------|-----|
| Push Notification iOS (community package) | https://github.com/react-native-push-notification/ios |

*Repository pin (verify):* `@react-native-community/push-notification-ios` ^1.11.0.

---

## Calls, WebRTC, and telephony-related

| Resource | Notes | URL |
|----------|-------|-----|
| react-native-webrtc | Project documentation / repository | https://github.com/react-native-webrtc/react-native-webrtc |
| CallKeep (CometChat fork) | Dependency resolves to `github:cometchat/react-native-callkeep` | https://github.com/cometchat/react-native-callkeep |
| VoIP push notification (iOS) | Package page | https://www.npmjs.com/package/react-native-voip-push-notification |

*Repository pins (verify):* `react-native-webrtc` ^124.0.7; `react-native-voip-push-notification` ^3.3.3.

---

## State, storage, and utilities

| Resource | URL |
|----------|-----|
| Zustand | https://github.com/pmndrs/zustand |
| React Native Async Storage | https://react-native-async-storage.github.io/async-storage/ |

*Repository pins (verify):* `zustand` ^5.0.8; `@react-native-async-storage/async-storage` ^2.2.0.

| Resource | URL |
|----------|-----|
| Day.js | https://day.js.org/ |
| React Native NetInfo | https://github.com/react-native-netinfo/react-native-netinfo |
| patch-package | https://github.com/ds300/patch-package |
| npm: patch-package | https://www.npmjs.com/package/patch-package |

*Repository pin (verify):* `patch-package` ^8.0.1 (devDependency).

---

## Expo modules (selected)

Cross-check module docs on https://docs.expo.dev/versions/latest/ for the SDK line used in the project.

*Examples from repository (verify):* `expo-dev-client` ^6.0.13; `expo-camera` ^17.0.8; `expo-font` ~14.0.9; `expo-audio` ^1.0.13; `expo-system-ui` ^6.0.7; `expo-status-bar` ~3.0.8; `expo-navigation-bar` ^5.0.8.

---

## Software engineering and requirements (optional citations)

Use your Literature Review and methodology chapter to add **books and papers** on requirements engineering, agile practice, or mobile app development. **To be added (TBD):**

- TBD: textbook or standard on **software requirements** (e.g. academic module reading list).
- TBD: survey or paper on **secure messaging** or **mobile real-time communication** (peer-reviewed).
- TBD: official or de-facto **security / privacy** guidance cited in Chapter 2 only if actually used.

**Do not** invent authors, titles, or DOIs.

---

## Closing note

Export this list to your thesis template, apply the required **bibliography format**, and reconcile **every in-text citation** in Chapters 1–9 with an entry here or in a **separate** thesis reference database (for example Zotero or EndNote), if your faculty uses one.
