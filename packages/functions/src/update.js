import { Table } from "sst/node/table";
import handler from "@lunmoji/core/handler";
import dynamoDb from "@lunmoji/core/dynamodb";

export const main = handler(async (event) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: Table.Emojis.tableName,
        // 'Key' defines the partition key and sort key of the item to be updated
        Key: {
            userId: "123", // The id of the author
            emojiId: event.pathParameters.id, // The id of the note from the path
        },
        // 'UpdateExpression' defines the attributes to be updated
        // 'ExpressionAttributeValues' defines the value in the update expression
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues: {
            ":attachment": data.attachment || null,
            ":content": data.content || null,
        },
        // 'ReturnValues' specifies if and how to return the item's attributes,
        // where ALL_NEW returns all attributes of the item after the update; you
        // can inspect 'result' below to see how it works with different settings
        ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
});