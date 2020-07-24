export interface ListRoomsResponse {
    items: [
        {
            /**
             * A unique identifier for the room.
             */
            id: string;
            
            /**
             * A user-friendly name for the room.
             */
            title: string;

            /**
             * The room type.
             */
            type: "direct" | "group";

            /**
             * Whether the room is moderated (locked) or not.
             */
            isLocked: boolean;
            
            /**
             * The ID for the team with which this room is associated.
             */
            teamId: string;

            /**
             * The date and time of the room's last activity.
             */
            lastActivity: string;
            
            /**
             * The ID of the person who created this room.
             */
            creatorId: string;

            /**
             * The date and time the room was created.
             */
            created: string;

            /**
             * The ID of the organization which owns this room. See Webex Teams Data in the Compliance Guide for more information.
             */
            ownerId: string;
        }
    ]
}