export const post = {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: "jobTitle",
            title: "JobTiltle",
            type: "string"
        },
        {
            name: "companyImage",
            title: "CompanyImage",
            type: "image",
            options: {
                hotspot: true
            },
        },
        {
            name: "company",
            title: "Comppany",
            type: "text"
        },
        {
            name: "dateStarted",
            title: "DateStarted",
            type: "date",
        },
        {
            name: "dateEnded",
            title: "DateEnded",
            type: "date"
        },
        {
            name: "isCurrentluyWorkingHere",
            title: "IsCurrentluyWorkingHere",
            type: "boolean"
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }]
        },
        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }]
        },
    ],
}
