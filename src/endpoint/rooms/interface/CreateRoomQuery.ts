export interface CreateRoomQuery {
    /**
     * A user-friendly name for the room.
     */
    title: string;

    /**
     * The ID for the team with which this room is associated
     */
    teamId?: string;
}