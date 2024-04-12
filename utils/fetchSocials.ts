import { Social } from "@/typings";

export const fetchSocials = async () => {
    const res = await fetch(`${process.env.SANITY_STUDIO_BASE_URL}/api/getSocials`);

    const data = await res.json(); // Await the promise to get the actual data
    const socials: Social[] = data.socials;

    return socials;
}