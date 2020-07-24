export interface UpdateRoomQuery {
    /**
     * The unique identifier for the room.
     */
    roomId: string;

    /**
     * A user-friendly name for the room.
     */
    title: string;
}