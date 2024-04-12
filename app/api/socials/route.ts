import { sanityClient } from "@/sanity";
import { Social } from "@/typings";
import { NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[]
}

export async function GET(
    req: Request,
    res: NextApiResponse<Data>,
) {
    const socials: Social[] = await sanityClient.fetch(query);
    try {
        return NextResponse.json(
            { socials: socials },
            { status: 200 }
        );
    } catch (error) {
        console.error('Socials: ', error);
        return NextResponse.json(
            { error: "Error in socials" },
            { status: 500 }
        );
    }
}

