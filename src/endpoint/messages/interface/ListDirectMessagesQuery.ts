export interface ListDirectMessagesQuery {
    /**
     * List messages with a parent, by ID.
     */
    parentId?: string;

    /**
     * List messages in a 1:1 room, by person ID.
     */
    personId?: string;

    /**
     * List messages in a 1:1 room, by person email.
     */
    personEmail?: string;
}