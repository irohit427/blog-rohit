import {createClient} from "@sanity/client";

export const client = createClient({
  projectId: '74spomaf',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-08-27'
})