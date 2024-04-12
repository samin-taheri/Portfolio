import { sanityClient } from "@/sanity";
import { Experiences } from "@/typings";
import { NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
*[_type == "experience"] {
    ...,
    technologies[]->
}
`

type Data = {
    experiences: Experiences[]
}

export async function GET(
    req: Request,
    res: NextApiResponse<Data>,
) {
    const experiences: Experiences[] = await sanityClient.fetch(query);
    try {
        return NextResponse.json(
            { experiences: experiences },
            { status: 200 }
        );
    } catch (error) {
        console.error('experiences: ', error);
        return NextResponse.json(
            { error: "Error in experiences" },
            { status: 500 }
        );
    }
}

