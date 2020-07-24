export interface GetPersonDetailResponse {
    id: string;
    emails: string[];
    phoneNumbers: string[];
    displayName: string;
    nickName: string;
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
}