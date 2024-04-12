import { sanityClient } from "@/sanity";
import { Social } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[]
}

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const socials: Social[] = await sanityClient.fetch(query);

    res.status(200).json({ socials });

    return NextResponse.json(
        { socials: socials },
        { status: 200 }
    );
}