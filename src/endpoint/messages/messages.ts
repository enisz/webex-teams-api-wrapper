import Request from "../../lib/Request";

import {
    CreateMessageQuery,
    CreateMessageResponse,
    GetMessageDetailsResponse,
    ListDirectMessagesQuery,
    ListDirectMessagesResponse,
    ListMessagesQuery,
    ListMessagesResponse,

} from "./interface";

export class Messages {

    /**
     * Name of the endpoint
     */
    private endpoint: string = Messages.name.toLowerCase();

    /**
     * Lists all messages in a room. Each message will include content attachments if present.
     * The list sorts the messages in descending order by creation date.
     * Long result sets will be split into pages.
     *
     * @param query ListMessagesQuery
     */
    public listMessages(query: ListMessagesQuery): Promise<ListMessagesResponse> {
        return Request.get(this.endpoint, query);
    }

    /**
     * Lists all messages in a 1:1 (direct) room. Use the personId or personEmail query parameter to specify the room. Each message will include content attachments if present.
     * The list sorts the messages in descending order by creation date.
     *
     * @param query ListDirectMessagesQuery
     */
    public listDirectMessages(query: ListDirectMessagesQuery): Promise<ListDirectMessagesResponse> {
        return Request.get(this.endpoint + "/direct", query);
    }

    /**
     * Post a plain text or rich text message, and optionally, a file attachment attachment, to a room.
     * The files parameter is an array, which accepts multiple values to allow for future expansion, but currently only one file may be included with the message.
     *
     * @param query CreateMessageQuery
     */
    public createMessage(query: CreateMessageQuery): Promise<CreateMessageResponse> {
        return Request.post(this.endpoint, query);
    }

    /**
     * Shows details for a message, by message ID.
     * Specify the message ID in the messageId parameter in the URI.
     *
     * @param messageId ID of the message
     */
    public getMessageDetails(messageId: string): Promise<GetMessageDetailsResponse> {
        return Request.get(this.endpoint + "/" + messageId);
    }

    /**
     * Deletes a message, by message ID.
     * Specify the message ID in the messageId parameter in the URI.
     *
     * @param messageId ID of the message
     */
    public deleteMessage(messageId: string): Promise<any> {
        return Request.delete(this.endpoint + "/" + messageId);
    }
}