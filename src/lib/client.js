import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '74spomaf',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-08-27'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}