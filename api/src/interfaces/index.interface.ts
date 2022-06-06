export interface Location {
    address: string;
    region: string;
    country: string;
}
export interface Social {
    network: string;
    username: string;
}

export interface Basics {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    website: string;
    summary: string;
    location: Location;
    socials: Social[];
}

export interface Work {
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
}
export interface Education {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
}

export interface Skill {
    name: string;
    percent: number;
}

export interface Project {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    role: string;
}

export interface ICV {
    basics: Basics;
    work: Work[];
    education: Education[];
    skills: Skill[];
    projects: Project[];
}


export interface INotificationObj {
    title: string;
    status: string;
    message: string;
    url: string | null;
}

