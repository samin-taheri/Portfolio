import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION || '2024-04-11',
    useCdn: process.env.SANITY_STUDIO_USE_CDN === 'production',
}
export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)