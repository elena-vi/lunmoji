import { Table } from "sst/node/table";
import handler from "@lunmoji/core/handler";
import dynamoDb from "@lunmoji/core/dynamodb";

export const main = handler(async () => {
    const params = {
        TableName: Table.Emojis.tableName,
        // 'KeyConditionExpression' defines the condition for the query
        // - 'userId = :userId': only return items with matching 'userId'
        //   partition key
        KeyConditionExpression: "userId = :userId",
        // 'ExpressionAttributeValues' defines the value in the condition
        // - ':userId': defines 'userId' to be the id of the author
        ExpressionAttributeValues: {
            ":userId": "123",
        },
    };

    const result = await dynamoDb.query(params);

    // Return the matching list of items in response body
    return result.Items;
});