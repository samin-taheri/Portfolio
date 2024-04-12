import { Skill } from "@/typings";

export const fetchSkills = async () => {
    try {
        const response = await fetch("/api/skills", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed in skill fetch with status: ${response.status}`);
        }
        const resp = await response.json();
        const skill: Skill[] = resp.skills;
        return skill;

    } catch (error) {
        console.error("Error in handleGetSkill:", error);
    }
};