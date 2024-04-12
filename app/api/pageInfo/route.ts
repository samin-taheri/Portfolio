import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";
import { NextApiResponse } from "next";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

const query = groq`
    *[_type == "pageInfo"][0]
`

type Data = {
    pageInfo: PageInfo
}

export async function GET(
    req: Request,
    res: NextApiResponse<Data>,
) {
    const pageInfo: PageInfo[] = await sanityClient.fetch(query);
    try {
        return NextResponse.json(
            { pageInfo: pageInfo },
            { status: 200 }
        );
    } catch (error) {
        console.error('pageInfo: ', error);
        return NextResponse.json(
            { error: "Error in pageInfo" },
            { status: 500 }
        );
    }
}

