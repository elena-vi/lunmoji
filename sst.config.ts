import { SSTConfig } from "sst";
import {StorageStack} from './stacks/StorageStack';
import { ApiStack } from "./stacks/ApiStack";

export default {
  config(_input) {
    return {
      name: "lunmoji",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app
        .stack(StorageStack)
        .stack(ApiStack);
  }
} satisfies SSTConfig;
