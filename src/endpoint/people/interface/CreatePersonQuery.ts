export interface CreatePersonQuery {
    emails?: string[];
    displayName?: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    orgId?: string;
    roles?: string[];
    licenses?: string[];
}