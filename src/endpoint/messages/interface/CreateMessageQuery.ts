export interface CreateMessageQuery {
    /**
     * The room ID of the message.
     */
    roomId?: string;

    /**
     * The parent message to reply to.
     */
    parentId?: string;

    /**
     * The person ID of the recipient when sending a private 1:1 message.
     */
    toPersonId?: string;

    /**
     * The email address of the recipient when sending a private 1:1 message.
     */
    toPersonEmail?: string;

    /**
     * The message, in plain text. If markdown is specified this parameter may be optionally used to provide alternate text for UI clients that do not support rich text. The maximum message length is 7439 bytes.
     */
    text?: string;

    /**
     * The message, in Markdown format. The maximum message length is 7439 bytes.
     */
    markdown?: string;

    /**
     * The public URL to a binary file to be posted into the room. Only one file is allowed per message. Uploaded files are automatically converted into a format that all Webex Teams clients can render. For the supported media types and the behavior of uploads, see the Message Attachments Guide.
     */
    files?: string[];

    /**
     * Content attachments to attach to the message. Only one card per message is supported. See the Cards Guide for more information.
     */
    attachments?: string[];
}