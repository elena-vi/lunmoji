import { Bucket, Table } from "sst/constructs";

export function StorageStack({ stack, app }) {
    // Create an S3 bucket
    const bucket = new Bucket(stack, "Uploads");

    // Create the DynamoDB table
    const table = new Table(stack, "Emojis", {
        fields: {
            userId: "string",
            emojiId: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey: "emojiId" },
    });

    return {
        bucket,
        table,
    };
}