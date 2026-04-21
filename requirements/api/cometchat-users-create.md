# CometChat Create User API

## Endpoint

- **Method:** `POST`
- **Path:** `/users`
- **Base URL:** `https://{appId}.api-{region}.cometchat.io/v3`

## Purpose

Create a CometChat user from the app Sign Up flow.

## Required Request Fields

- `uid` (string)
- `name` (string)

## Optional Request Fields used by UI

- `avatar` (string URL)
- `link` (string URL)
- `role` (string)
- `statusMessage` (string)
- `tags` (string array)
- `metadata.@private.email` (string)
- `metadata.@private.contactNumber` (string)
- `withAuthToken` (boolean)

## Authentication

- Header: `apikey: <full-access REST API key>`
- The app stores this value in credentials as `restApiKey`.
- This key is **not** the same as the client **Auth Key** used for `CometChatUIKit.login`; get the REST key from CometChat Dashboard → API & Auth Keys.

## Source

- [CometChat REST API - Create User](https://www.cometchat.com/docs/rest-api/users/create)
