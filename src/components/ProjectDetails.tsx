import { Projects as _projects, PreviousProject, NextProject } from '@utility/projects'
import "./ProjectDetails.css"
import VocabVersus from '@projects/VocabVersus';
import { useEffect, useState } from 'react';
import Portfolio from '@projects/Portfolio';
import PodoPrinter from '@projects/PodoPrinter';
import Jugo from '@projects/Jugo';
import Stuurmen from '@projects/Stuurmen';
import WebAdventure from '@projects/WebAdventure';
import GameEninge from '@projects/GameEngine';
import BASWorld from '@projects/BASWorld';
import Authore from '@projects/Authore';

function Details(project: string) {
    switch (project) {
        case _projects.Portfolio:
            return <Portfolio />;
        case _projects.VocabVersus:
            return <VocabVersus />;
        case _projects.PodoPrinter:
            return <PodoPrinter />;
        case _projects.Authore:
            return <Authore />;
        case _projects.Jugo:
            return <Jugo />;
        case _projects.Stuurmen:
            return <Stuurmen />;
        case _projects.WebAdventure:
            return <WebAdventure />;
        case _projects.GameEninge:
            return <GameEninge />;
        case _projects.BASWorld:
            return <BASWorld />;
        default:
            return (<></>);
    }
}


interface props {
    project: string;
    onChangeProject: (project: string | undefined) => void;
}
function ProjectDetails({ project, onChangeProject }: props) {
    const [nextProject, setNextProject] = useState<string | null>(null);
    const [previousProject, setPreviousProject] = useState<string | null>(null);
    useEffect(() => {
        setNextProject(NextProject(project));
        setPreviousProject(PreviousProject(project));
    }, [project]);

    return (
        <div className="w-100 py-5 d-flex align-items-center project-details-container">
            <div className="project-info-navigation-container">
                <i tabIndex={0} className={`bi bi-chevron-up navigation-icon ${nextProject ? "" : "invisible"}`} 
                    onClick={() => nextProject ? onChangeProject(nextProject) : null}
                    onKeyPress={(event) => (event.key == "Enter" && nextProject) ? onChangeProject(nextProject) : null }></i>
                <div className="navigation-seperator"></div>
                <i tabIndex={0} className={`bi bi-chevron-down navigation-icon ${previousProject ? "" : "invisible"}`} 
                    onClick={() => previousProject ? onChangeProject(previousProject) : null}
                    onKeyPress={(event) => (event.key == "Enter" && previousProject) ? onChangeProject(previousProject) : null }></i>
            </div>
            <div className="project-info-border-container">
                <div className="project-info-border"></div>
                <div className="project-info-border"></div>
                <div className="project-info-border"></div>
            </div>
            <div className="project-info-container">
                <div className="p-3 pt-5">
                    {Details(project)}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;