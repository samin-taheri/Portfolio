import { Project } from "@/typings";

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.SANITY_STUDIO_BASE_URL}/api/getProjects`);

    const data = await res.json(); // Await the promise to get the actual data
    const peojects: Project[] = data.peojects;

    return peojects;
}