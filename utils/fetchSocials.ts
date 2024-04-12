import { Social } from "@/typings";

export const fetchSocials = async () => {
    try {
        const response = await fetch("/api/socials", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed in socials fetch with status: ${response.status}`);
        }
        const resp = await response.json();
        const socials: Social[] = resp.socials;
        return socials;

    } catch (error) {
        console.error("Error in handleGetSocials:", error);
    }
};