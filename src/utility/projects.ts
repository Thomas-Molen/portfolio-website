export enum Projects {
    BASWorld = "BAS World",
    WebAdventure = "WebAdventure",
    Stuurmen = "Stuurmen",
    Jugo = "Jugo",
    AuthoreInternship = "Author-e Internship",
    AuthoreJob = "Author-e Job",
    PodoPrinter = "PodoPrinter",
    VocabVersus = "VocabVersus",
    Portfolio = "Portfolio",
}

const projects: string[] = Object.values(Projects);
export function PreviousProject(target: string): string | null {
    const currentIndex = projects.indexOf(target);
    if (currentIndex === -1 || currentIndex === 0) return null; // Target not found or it's the last project
    return projects[currentIndex - 1];
}
export function NextProject(target: string): string | null {
    const currentIndex = projects.indexOf(target);
    if (currentIndex === -1 || currentIndex === projects.length - 1) return null; // Target not found or it's the last project
    return projects[currentIndex + 1];
}