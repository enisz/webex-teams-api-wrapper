export interface ListPeopleQuery {
    /**
     * List people with this email address. For non-admin requests, either this or displayName are required.
     */
    email?: string;

    /**
     * List people whose name starts with this string. For non-admin requests, either this or email are required.
     */
    displayName?: string;

    /**
     * List people by ID. Accepts up to 85 person IDs separated by commas.
     * If this parameter is provided then presence information (such as the lastActivity or status properties) will not be included in the response.
     */
    id?: string;

    /**
     * List people in this organization. Only admin users of another organization (such as partners) may use this parameter.
     */
    orgId?: string;

    /**
     * Limit the maximum number of people in the response.
     * Default: 100
     */
    max?: number;
}