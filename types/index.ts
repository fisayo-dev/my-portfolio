
interface WorkExperience {
    company: string,
    logo: string,
    role: string,
    website: string,
    startDate: string,
    endDate: string,
}

enum projectCategory {
    'api',
    'website',
    'web app',
    'bot',
}

interface WorkProjects {
    title: string,
    image: string,
    description: string,
    category: "api"  | "website" | "web app" | "bot",
    link: string
}