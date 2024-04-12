import { Experiences } from "@/typings";

export const fetchExperience = async () => {
    const res = await fetch(`${process.env.SANITY_STUDIO_BASE_URL}/api/getExperience`);

    const data = await res.json(); // Await the promise to get the actual data
    const experiences: Experiences[] = data.experiences;

    return experiences;
}