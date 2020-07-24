import Request from '../../lib/Request';

import {
    CreateRoomQuery,
    CreateRoomResponse,
    DeleteRoomQuery,
    GetRoomDetailsQuery,
    GetRoomDetailsResponse,
    GetRoomMeetingDetailsQuery,
    GetRoomMeetingDetailsResponse,
    ListRoomsQuery,
    ListRoomsResponse,
    UpdateRoomQuery,
    UpdateRoomResponse
} from './interface';

export class Rooms {

    /**
     * Name of the endpoint
     */
    private endpoint: string = Rooms.name.toLowerCase();

    /**
     * The title of the room for 1:1 rooms will be the display name of the other person.
     * By default, lists rooms to which the authenticated user belongs.
     * Long result sets will be split into pages.
     */
    public listRooms(query: ListRoomsQuery): Promise<ListRoomsResponse> {
        return Request.get(this.endpoint, query);
    }

    /**
     * Creates a room. The authenticated user is automatically added as a member of the room. See the Memberships API to learn how to add more people to the room.
     * To create a 1:1 room, use the Create Messages endpoint to send a message directly to another person by using the toPersonId or toPersonEmail parameters.
     * 
     * @param query CreateRoomQuery
     */
    public createRoom(query: CreateRoomQuery): Promise<CreateRoomResponse> {
        return Request.post(this.endpoint, query);
    }

    /**
     * Shows details for a room, by ID.
     * The title of the room for 1:1 rooms will be the display name of the other person.
     * Specify the room ID in the roomId parameter in the URI.
     * 
     * @param query GetRoomDetailsQuery
     */
    public getRoomDetails(query: GetRoomDetailsQuery): Promise<GetRoomDetailsResponse> {
        return Request.get(this.endpoint + "/" + query.roomId);
    }

    /**
     * Shows Webex meeting details for a room such as the SIP address, meeting URL, toll-free and toll dial-in numbers.
     * Specify the room ID in the roomId parameter in the URI.
     * 
     * @param query GetRoomMeetingDetailsQuery
     */
    public getRoomMeetingDetails(query: GetRoomMeetingDetailsQuery): Promise<GetRoomMeetingDetailsResponse> {
        return Request.get(this.endpoint + "/" + query.roomId + "/meetingInfo");
    }

    /**
     * Updates details for a room, by ID.
     * Specify the room ID in the roomId parameter in the URI.
     * 
     * @param query UpdateRoomQuery
     */
    public updateRoom(query: UpdateRoomQuery): Promise<UpdateRoomResponse> {
        return Request.put(this.endpoint + "/" + query.roomId, query);
    }

    /**
     * Deletes a room, by ID. Deleted rooms cannot be recovered.
     * Deleting a room that is part of a team will archive the room instead.
     * Specify the room ID in the roomId parameter in the URI.
     * 
     * @param query DeleteRoomQuery
     */
    public deleteRoom(query: DeleteRoomQuery): Promise<boolean> {
        return Request.delete(this.endpoint + "/" + query.roomId);
    }
}