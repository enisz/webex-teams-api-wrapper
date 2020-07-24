import Request from "../../lib/Request";

import {
    CreatePersonQuery,
    CreatePersonResponse,
    GetMyOwnDetailsResponse,
    GetPersonDetailQuery,
    GetPersonDetailResponse,
    ListPeopleQuery,
    ListPeopleResponse,
    UpdatePersonQuery,
    UpdatePersonResponse
} from "./interface";

export class People {

    /**
     * Name of the endpoint
     */
    private endpoint: string = People.name.toLowerCase();

    /**
     * List people in your organization. For most users, either the email or displayName parameter is required. Admin users can omit these fields and list all users in their organization.
     * Response properties associated with a user's presence status, such as status or lastActivity, will only be displayed for people within your organization or an organization you manage. Presence information will not be shown if the authenticated user has disabled status sharing.
     * Long result sets will be split into pages.
     *
     * @param query ListPeopleQuery
     */
    public listPeople(query: ListPeopleQuery): Promise<ListPeopleResponse> {
        return Request.get(this.endpoint, query);
    }

    /**
     * Create a new user account for a given organization. Only an admin can create a new user account.
     * At least one of the following body parameters is required to create a new user: displayName, firstName, lastName.
     * Currently, users may have only one email address associated with their account. The emails parameter is an array, which accepts multiple values to allow for future expansion, but currently only one email address will be used for the new user.
     *
     * @param query CreatePersonQuery
     */
    public createPerson(query: CreatePersonQuery): Promise<CreatePersonResponse> {
        return Request.post(this.endpoint, query);
    }

    /**
     * Shows details for a person, by ID.
     * Response properties associated with a user's presence status, such as status or lastActivity, will only be displayed for people within your organization or an organization you manage. Presence information will not be shown if the authenticated user has disabled status sharing.
     * Specify the person ID in the personId parameter in the URI.
     *
     * @param query GetPersonDetailQuery
     */
    public getPersonDetails(query: GetPersonDetailQuery): Promise<GetPersonDetailResponse> {
        return Request.get(this.endpoint + "/" + query.personId);
    }

    /**
     * Update details for a person, by ID.
     * Specify the person ID in the personId parameter in the URI. Only an admin can update a person details.
     * Include all details for the person. This action expects all user details to be present in the request. A common approach is to first GET the person's details, make changes, then PUT both the changed and unchanged values.
     *
     * @param personId ID of the person
     * @param query UpdatePersonQuery
     */
    public updatePerson(personId: string, query: UpdatePersonQuery): Promise<UpdatePersonResponse> {
        return Request.put(this.endpoint + "/" + personId, query);
    }

    /**
     * Remove a person from the system. Only an admin can remove a person.
     * Specify the person ID in the personId parameter in the URI.
     *
     * @param personId ID of the person
     */
    public deletePerson(personId: string) {
        return Request.delete(this.endpoint + "/" + personId);
    }

    /**
     * Show the profile for the authenticated user. This is the same as GET /people/{personId} using the Person ID associated with your Auth token.
     */
    public getMyOwnDetails(): Promise<GetMyOwnDetailsResponse> {
        return Request.get(this.endpoint + "/me");
    }
}