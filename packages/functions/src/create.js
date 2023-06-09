import { Table } from "sst/node/table";
import * as uuid from "uuid";
import handler from "@lunmoji/core/handler";
import dynamoDb from "@lunmoji/core/dynamodb";

export const main = handler(async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: Table.Emojis.tableName,
        Item: {
            // The attributes of the item to be created
            userId: "123", // The id of the author
            emojiId: uuid.v1(), // A unique uuid
            content: data.content, // Parsed from request body
            attachment: data.attachment, // Parsed from request body
            createdAt: Date.now(), // Current Unix timestamp
        },
    };

    await dynamoDb.put(params);

    return params.Item;
});