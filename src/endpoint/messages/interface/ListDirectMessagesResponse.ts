export interface ListDirectMessagesResponse {
    items: [
        {
            /**
             * The unique identifier for the message.
             */
            id?: string;

            /**
             * The unique identifier for the parent message.
             */
            parentId?: string;

            /**
             * The room ID of the message.
             */
            roomId?: string;

            /**
             * The type of room. Will always be direct.
             */
            roomType?: "direct";

            /**
             * The message, in plain text. If markdown is specified this parameter may be optionally used to provide alternate text for UI clients that do not support rich text.
             */
            text?: string;

            /**
             * The message, in Markdown format.
             */
            markdown?: string;

            /**
             * The text content of the message, in HTML format. This read-only property is used by the Webex Teams clients.
             */
            html?: string;

            /**
             * Public URLs for files attached to the message. For the supported media types and the behavior of file uploads, see Message Attachments.
             */
            files?: string[];

            /**
             * The person ID of the message author.
             */
            personId?: string;

            /**
             * The email address of the message author.
             */
            personEmail?: string;

            /**
             * The date and time the message was created.
             */
            created?: string;
        }
    ]
}