import { Project } from "@/typings";

export const fetchProjects = async () => {
    try {
        const response = await fetch("/api/pros", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed in project fetch with status: ${response.status}`);
        }
        const resp = await response.json();
        const project: Project[] = resp.projects;
        return project;

    } catch (error) {
        console.error("Error in handleGetProject:", error);
    }
};