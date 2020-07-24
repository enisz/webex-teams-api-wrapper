import {
    Messages,
    People,
    Rooms
} from "./endpoint"

export default class Webex {
    /**
     * Webex Access Token
     */
    private static accesToken: string;

    /**
     * Webex API URL
     */
    private static apiUrl: string = "https://api.ciscospark.com/v1";

    /**
     * Messages endpoint instance
     */
    public messages: Messages;

    /**
     * People endpoint instance
     */
    public people: People;

    /**
     * Rooms endpoint instance
     */
    public rooms: Rooms;

    public constructor(accesToken: string) {
        Webex.accesToken = accesToken;

        this.messages = new Messages();
        this.people = new People();
        this.rooms = new Rooms();
    }

    /**
     * Returning Webex Access Token
     */
    public static getAccesToken(): string {
        return Webex.accesToken;
    }

    /**
     * Returning the API URL
     */
    public static getApiUrl(): string {
        return Webex.apiUrl;
    }

}