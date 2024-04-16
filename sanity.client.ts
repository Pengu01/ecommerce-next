
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "fgi5vbwo",
  dataset: "production",
  apiVersion: "2024-03-08",
  useCdn: false,
};

const client = createClient(config);

export default client;