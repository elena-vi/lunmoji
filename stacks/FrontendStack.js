import { StaticSite, use } from "sst/constructs";
import { ApiStack } from "./ApiStack";
import { StorageStack } from "./StorageStack";

export function FrontendStack({ stack, app }) {
    const { api } = use(ApiStack);
    const { bucket } = use(StorageStack);

    // Define our React app
    const site = new StaticSite(stack, "ReactSite", {
        path: "frontend",
        buildOutput: "build",
        buildCommand: "npm run build",
        // Pass in our environment variables
        environment: {
            REACT_APP_API_URL: api.customDomainUrl || api.url,
            REACT_APP_REGION: app.region,
            REACT_APP_BUCKET: bucket.bucketName,
        },
    });

    // Show the url in the output
    stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000",
    });
}