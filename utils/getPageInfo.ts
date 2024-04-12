import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
    try {
        const response = await fetch("/api/pageInfo", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed in pageInfo fetch with status: ${response.status}`);
        }
        const resp = await response.json();
        const pageInfo: PageInfo = resp.pageInfo;
        return pageInfo;

    } catch (error) {
        console.error("Error in handleGetPageInfo:", error);
    }
};