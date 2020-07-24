export interface ListRoomsQuery {
    /**
     * List rooms associated with a team, by ID.
     */
    teamId?: string;

    /**
     * List rooms by type.
     */
    type?: "direct" | "group";

    /**
     * Sort results.
     */
    sortBy?: "id" | "lastactivity" | "created";

    /**
     * Limit the maximum number of rooms in the response.
     * Default: 100
     */
    max?: number;
}