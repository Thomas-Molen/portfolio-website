export enum Projects {
    BASWorld = "BAS World",
    GameEninge = "Game Engine",
    WebAdventure = "WebAdventure",
    Stuurmen = "Stuurmen",
    Jugo = "Jugo",
    Authore = "Author-e",
    PodoPrinter = "PodoPrinter",
    VocabVersus = "VocabVersus",
    Portfolio = "Portfolio",
    SUE = "SUE",
    InfoSupport = "Info Support"
}

export function ProjectColor(project: string)
{
    switch(project){
        case Projects.BASWorld:
                return "#4B4477";
            case Projects.GameEninge:
                return "#447746";
            case Projects.WebAdventure:
                return "#776644";
            case Projects.Stuurmen:
                return "#5D9B9B";
            case Projects.Jugo:
                return "#774460";
            case Projects.Authore:
                return "#447777";
            case Projects.PodoPrinter:
                return "#457744";
            case Projects.VocabVersus:
                return "#6A7744";
            case Projects.Portfolio:
                return "#924E7D";
            case Projects.SUE:
                return "#7da956";
            case Projects.InfoSupport:
                return "#8e58a7";
            default:
                return "#FFFFFF";
    }
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