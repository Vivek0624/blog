import client from "@sanity/client";

export default client({
  projectId: "55bz4qco",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-19",
});
