import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const client = sanityClient({
    projectId: "wollqsrd" ,
    dataset: "production",
    apiVersion: "2022-11-11",
    useCdn: true,
    token: process.env.NEXT_PUBLİC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);