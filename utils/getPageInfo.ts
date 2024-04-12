import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.SANITY_STUDIO_BASE_URL}/api/getPageInfo`);

    const data = await res.json(); // Await the promise to get the actual data
    const pageInfo: PageInfo[] = data.pageInfo;

    return pageInfo;
}