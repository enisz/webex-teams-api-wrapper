export interface ListPeopleResponse {
    /**
     * An array of person objects.
     */
    items : [
        {
            id: string;
            emails: string[];
            phoneNumbers: string[];
            displayName: string;
            nickname: string;
            firstName: string;
            lastName: string;
            avatar: string;
            orgId: string;
            roles: string[];
            licenses: string[];
            created: string;
            lastModified: string;
            timezone: string;
            lastActivity: string;
            status:
                "active" |
                "call" |
                "DoNotDisturb" |
                "inactive" |
                "meeting" |
                "OutOfOffice" |
                "pending" |
                "presenting" |
                "unknown";
            invitePending: boolean;
            loginEnabled: boolean;
            type:
                "person" |
                "bot" |
                "appuser";
            notFoundIds: string[];
        }
    ],

    /**
     * An array of person IDs that could not be found.
     */
    notFoundIds: string[]
}