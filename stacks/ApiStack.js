import { Api, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
    const { table } = use(StorageStack);

    // Create the API
    const api = new Api(stack, "Api", {
        defaults: {
            function: {
                bind: [table],
            },
        },
        routes: {
            "POST /emojis": "packages/functions/src/create.main",
            "GET /emojis/{id}": "packages/functions/src/get.main",
            "GET /emojis": "packages/functions/src/list.main",
            "PUT /emojis/{id}": "packages/functions/src/update.main",
            "DELETE /emojis/{id}": "packages/functions/src/delete.main",
        },
    });

    // Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    });

    // Return the API resource
    return {
        api,
    };
}