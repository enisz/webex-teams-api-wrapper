export interface GetRoomMeetingDetailsResponse {
    /**
     * A unique identifier for the room.
     */
    roomId: string;

    /**
     * The Webex meeting URL for the room.
     */
    meetingLink: string;

    /**
     * The SIP address for the room.
     */
    sipAddress: string;

    /**
     * The Webex meeting number for the room.
     */
    meetingNumber: string;

    /**
     * The toll-free PSTN number for the room.
     */
    callInTollFreeNumber: string;

    /**
     * The toll (local) PSTN number for the room.
     */
    callInTollNumber: string;
}