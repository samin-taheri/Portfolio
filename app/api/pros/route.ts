import { sanityClient } from "@/sanity";
import { Project } from "@/typings";
import { NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "proejct"] {
        ...,
        technologies[]->
    }
`

type Data = {
    projects: Project[]
}

export async function GET(
    req: Request,
    res: NextApiResponse<Data>,
) {
    const projects: Project[] = await sanityClient.fetch(query);
    try {
        return NextResponse.json(
            { projects: projects },
            { status: 200 }
        );
    } catch (error) {
        console.error('projects: ', error);
        return NextResponse.json(
            { error: "Error in projects" },
            { status: 500 }
        );
    }
}

