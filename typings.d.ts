interface sanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends sanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends sanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends sanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends sanityBody {
    _type: "project";
    image: Image;
    title: string;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Experiences extends sanityBody {
    _type: "experience";
    company: string;
    companyName: string;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Social extends sanityBody {
    _type: "social";
    title: string;
    url: string;
}