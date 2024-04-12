import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";
import { NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "skill"]
`

type Data = {
    skills: Skill[]
}

export async function GET(
    req: Request,
    res: NextApiResponse<Data>,
) {
    const skills: Skill[] = await sanityClient.fetch(query);
    try {
        return NextResponse.json(
            { skills: skills },
            { status: 200 }
        );
    } catch (error) {
        console.error('skills: ', error);
        return NextResponse.json(
            { error: "Error in skills" },
            { status: 500 }
        );
    }
}

