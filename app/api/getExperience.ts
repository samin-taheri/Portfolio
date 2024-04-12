import { sanityClient } from "@/sanity";
import { Experiences } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`

type Data = {
    experiences: Experiences[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const experiences: Experiences[] = await sanityClient.fetch(query);

    res.status(200).json({ experiences });
}