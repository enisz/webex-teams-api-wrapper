export interface ListMessagesQuery {
    /**
     * List messages in a room, by ID.
     */
    roomId: string;

    /**
     * List messages with a parent, by ID.
     */
    parentId?: string;

    /**
     * List messages with these people mentioned, by ID. Use me as a shorthand for the current API user.
     */
    mentionedPeople?: string[];

    /**
     * List messages sent before a date and time.
     */
    before?: string;

    /**
     * List messages sent before a message, by ID.
     */
    beforeMessage?: string;

    /**
     * Limit the maximum number of messages in the response. Default: 50
     */
    max?: number;
}