import { Experiences } from "@/typings";

export const fetchExperience = async () => {
    try {
        const response = await fetch("/api/experiences", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed in experiences fetch with status: ${response.status}`);
        }
        const resp = await response.json();
        const experiences: Experiences[] = resp.experiences;
        return experiences;

    } catch (error) {
        console.error("Error in handleGetExperiences:", error);
    }
};