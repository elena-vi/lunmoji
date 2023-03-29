import { Table } from "sst/node/table";
import handler from "@lunmoji/core/handler";
import dynamoDb from "@lunmoji/core/dynamodb";

export const main = handler(async (event) => {
    const params = {
        TableName: Table.Emojis.tableName,
        // 'Key' defines the partition key and sort key of the item to be retrieved
        Key: {
            userId: "123", // The id of the author
            emojiId: event.pathParameters.id, // The id of the note from the path
        },
    };

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        throw new Error("Item not found.");
    }

    // Return the retrieved item
    return result.Item;
});