# Webex API Service Wrapper

## Table Of Contents

<!-- toc -->

- [Introduction](#introduction)
- [Getting started](#getting-started)
  * [Downloading the module](#downloading-the-module)
  * [Importing to your project](#importing-to-your-project)
- [Usage](#usage)
  * [Instantiating the Webex object](#instantiating-the-webex-object)
- [Endpoints](#endpoints)
  * [Messages](#messages)
    + [List Messages](#list-messages)
    + [List Direct Messages](#list-direct-messages)
    + [Create Message](#create-message)
    + [Get Message Details](#get-message-details)
    + [Delete Message](#delete-message)
  * [People](#people)
    + [List People](#list-people)
    + [Create a Person](#create-a-person)
    + [Get Person Details](#get-person-details)
    + [Update a Person](#update-a-person)
    + [Delete a Person](#delete-a-person)
    + [Get My Own Details](#get-my-own-details)
  * [Rooms](#rooms)
    + [List Rooms](#list-rooms)
    + [Create a Room](#create-a-room)
    + [Get Room Details](#get-room-details)
    + [Get Room Meeting Details](#get-room-meeting-details)
    + [Update a Room](#update-a-room)
    + [Delete a Room](#delete-a-room)
- [Return Values](#return-values)

<!-- tocstop -->

## Introduction

This wrapper supposed to provied a simple solution to interact with the [Webex API](https://developer.webex.com/docs/api/getting-started) in TypeScript projects.

> This project is work in progress state. The endpoint modules will be added with time.

## Getting started

### Downloading the module

The module can be downloaded to your project from the NPM repository by executing the following command:

```cmd
npm install webex-teams-api-wrapper --save
```

### Importing to your project

When downloaded, the module can be simply imported

In your typescript project:
```ts
import Webex from "webex-teams-api-wrapper";
```

In your javascript project:
```js
const webex = require("webex-teams-api-wrapper").default;
```

## Usage

The endpoint methods can be called from the Webex object after it is instantiated.

### Instantiating the Webex object

In your project, after importing the module, you can simply create a new instance with the `new` keyword.
```ts
const webex = new Webex("<YOUR PERSONAL ACCESS TOKEN>");
```

For this you will need to provide your [Personal Access Token](https://developer.webex.com/docs/api/getting-started#accounts-and-authentication).

## Endpoints

The currently implemented endpoints can be used from the `Webex` object. The list of these will grow with time.

Every endpoint method will return a promise with the respective responses.

### Messages

Messages are how we communicate in a room. In Webex Teams, each message is displayed on its own line along with a timestamp and sender information. Use this API to list, create, and delete messages.

Message can contain plain text, [rich text](https://developer.webex.com/docs/api/basics#formatting-messages), and a [file attachment](https://developer.webex.com/docs/api/basics#message-attachments).

Just like in the Webex Teams app, you must be a member of the room in order to target it with this API.

> [Webex Messages Endpoint Documentation](https://developer.webex.com/docs/api/v1/messages)

#### List Messages
```ts
listMessages(query: ListMessagesQuery): Promise<ListMessagesResponse>
```

Lists all messages in a room. Each message will include content attachments if present.

The list sorts the messages in descending order by creation date.

Long result sets will be split into [pages](https://developer.webex.com/docs/api/basics#pagination).

> [List Messages Documentation](https://developer.webex.com/docs/api/v1/messages/list-messages)

#### List Direct Messages
```ts
listDirectMessages(query: ListDirectMessagesQuery): Promise<ListDirectMessagesResponse>
```

Lists all messages in a 1:1 (direct) room. Use the personId or personEmail query parameter to specify the room. Each message will include content attachments if present.

The list sorts the messages in descending order by creation date.

> [List Direct Messages Documentation](https://developer.webex.com/docs/api/v1/messages/list-direct-messages)

#### Create Message
```ts
createMessage(query: CreateMessageQuery): Promise<CreateMessageResponse>
```

Post a plain text or [rich text](https://developer.webex.com/docs/api/basics#formatting-messages) message, and optionally, a [file attachment](https://developer.webex.com/docs/api/basics#message-attachments) attachment, to a room.

The `files` parameter is an array, which accepts multiple values to allow for future expansion, but currently only one file may be included with the message.

> [Create Message Documentation](https://developer.webex.com/docs/api/basics#message-attachments)

#### Get Message Details
```ts
getMessageDetails(messageId: string): Promise<GetMessageDetailsResponse>
```

Shows details for a message, by message ID.

Specify the message ID in the `messageId` parameter in the URI.

> [Get Message Documentation](https://developer.webex.com/docs/api/v1/messages/get-message-details)

#### Delete Message
```ts
deleteMessage(messageId: string): Promise<any>
```

Deletes a message, by message ID.

Specify the message ID in the `messageId` parameter in the URI.

> [Delete Message Documentation](https://developer.webex.com/docs/api/v1/messages/delete-a-message)

### People

People are registered users of Webex Teams. Searching and viewing People requires an auth token with a scope of `spark:people_read`. Viewing the list of all People in your Organization requires an administrator auth token with `spark-admin:people_read` scope. Adding, updating, and removing People requires an administrator auth token with the spark-admin:people_write scope.

To learn more about managing people in a room see the [Memberships API](https://developer.webex.com/docs/api/v1/memberships). For information about how to allocate Hybrid Services licenses to people, see the [Managing Hybrid Services](https://developer.webex.com/docs/api/guides/managing-hybrid-services-licenses) guide.

> [Webex People Endpoint Documentation](https://developer.webex.com/docs/api/v1/people)

#### List People
```ts
listPeople(query: ListPeopleQuery): Promise<ListPeopleResponse>
```

List people in your organization. For most users, either the `email` or `displayName` parameter is required. Admin users can omit these fields and list all users in their organization.

Response properties associated with a user's presence status, such as `status` or `lastActivity`, will only be displayed for people within your organization or an organization you manage. Presence information will not be shown if the authenticated user has [disabled status sharing](https://help.webex.com/en-us/nkzs6wl/Webex-Teams-Stop-Sharing-Your-Status).

Long result sets will be split into [pages](https://developer.webex.com/docs/api/basics#pagination).

> [List People Documentation](https://developer.webex.com/docs/api/v1/people/list-people)

#### Create a Person
```ts
createPerson(query: CreatePersonQuery): Promise<CreatePersonResponse>
```

Create a new user account for a given organization. Only an admin can create a new user account.

At least one of the following body parameters is required to create a new user: `displayName`, `firstName`, `lastName`.

Currently, users may have only one email address associated with their account. The `emails` parameter is an array, which accepts multiple values to allow for future expansion, but currently only one email address will be used for the new user.

> [Create Person Documentation](https://developer.webex.com/docs/api/v1/people/create-a-person)

#### Get Person Details
```ts
getPersonDetails(query: GetPersonDetailQuery): Promise<GetPersonDetailResponse>
```

Shows details for a person, by ID.

Response properties associated with a user's presence status, such as `status` or `lastActivity`, will only be displayed for people within your organization or an organization you manage. Presence information will not be shown if the authenticated user has [disabled status sharing](https://help.webex.com/en-us/nkzs6wl/Webex-Teams-Stop-Sharing-Your-Status).

Specify the person ID in the `personId` parameter in the URI.

> [Get Person Detail Documentation](https://developer.webex.com/docs/api/v1/people/get-person-details)

#### Update a Person
```ts
updatePerson(personId: string, query: UpdatePersonQuery): Promise<UpdatePersonResponse>
```

Update details for a person, by ID.

Specify the person ID in the `personId` parameter in the URI. Only an admin can update a person details.

Include all details for the person. This action expects all user details to be present in the request. A common approach is to first [GET the person's details](https://developer.webex.com/docs/api/v1/people/get-person-details), make changes, then PUT both the changed and unchanged values.

> [Update Person Documentation](https://developer.webex.com/docs/api/v1/people/update-a-person)

#### Delete a Person
```ts
deletePerson(personId: string)
```

Remove a person from the system. Only an admin can remove a person.

Specify the person ID in the `personId` parameter in the URI.

> [Delete Person Documentation](https://developer.webex.com/docs/api/v1/people/delete-a-person)

#### Get My Own Details
```ts
getMyOwnDetails(): Promise<GetMyOwnDetailsResponse>
```

Show the profile for the authenticated user. This is the same as GET `/people/{personId}` using the Person ID associated with your Auth token.

> [Get My Own Details Documentation](https://developer.webex.com/docs/api/v1/people/get-my-own-details)

### Rooms

Rooms are virtual meeting places where people post messages and collaborate to get work done. This API is used to manage the rooms themselves. Rooms are created and deleted with this API. You can also update a room to change its title, for example.

To create a team room, specify the a teamId in the POST payload. Note that once a room is added to a team, it cannot be moved. To learn more about managing teams, see the [Teams API](https://developer.webex.com/docs/api/v1/teams).

To manage people in a room see the [Memberships API](https://developer.webex.com/docs/api/v1/memberships).

To post content see the [Messages API](https://developer.webex.com/docs/api/v1/messages).

#### List Rooms
```ts
listRooms(query: ListRoomsQuery): Promise<ListRoomsResponse>
```

The title of the room for 1:1 rooms will be the display name of the other person.

By default, lists rooms to which the authenticated user belongs.

Long result sets will be split into [pages](https://developer.webex.com/docs/api/basics#pagination).

> [List Rooms Documentation](https://developer.webex.com/docs/api/v1/rooms/list-rooms)

#### Create a Room
```ts
createRoom(query: CreateRoomQuery): Promise<CreateRoomResponse>
```

Creates a room. The authenticated user is automatically added as a member of the room. See the [Memberships API](https://developer.webex.com/docs/api/v1/memberships) to learn how to add more people to the room.

To create a 1:1 room, use the [Create Messages](https://developer.webex.com/docs/api/v1/messages/create-a-message) endpoint to send a message directly to another person by using the `toPersonId` or `toPersonEmail` parameters.

[Create a Room Documentation](https://developer.webex.com/docs/api/v1/rooms/create-a-room)

#### Get Room Details
```ts
getRoomDetails(query: GetRoomDetailsQuery): Promise<GetRoomDetailsResponse>
```

Shows details for a room, by ID.

The `title` of the room for 1:1 rooms will be the display name of the other person.

Specify the room ID in the `roomId` parameter in the URI.

> [Get Room Details Documentation](https://developer.webex.com/docs/api/v1/rooms/get-room-details)

#### Get Room Meeting Details
```ts
getRoomMeetingDetails(query: GetRoomMeetingDetailsQuery): Promise<GetRoomMeetingDetailsResponse>
```

Shows Webex meeting details for a room such as the SIP address, meeting URL, toll-free and toll dial-in numbers.

Specify the room ID in the `roomId` parameter in the URI.

> [Get Room Meeting Details](https://developer.webex.com/docs/api/v1/rooms/get-room-meeting-details)

#### Update a Room
```ts
updateRoom(query: UpdateRoomQuery): Promise<UpdateRoomResponse>
```

Updates details for a room, by ID.

Specify the room ID in the `roomId` parameter in the URI.

> [Update a Room Documentation](https://developer.webex.com/docs/api/v1/rooms/update-a-room)

#### Delete a Room
```ts
deleteRoom(query: DeleteRoomQuery): Promise<boolean>
```

Deletes a room, by ID. Deleted rooms cannot be recovered.

Deleting a room that is part of a team will archive the room instead.

Specify the room ID in the `roomId` parameter in the URI.

> [Delete a Room Documentation](https://developer.webex.com/docs/api/v1/rooms/delete-a-room)

## Return Values

Every endpoint method will return a `Promise`. Examples will be available later.