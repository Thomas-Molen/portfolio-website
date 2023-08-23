import { Projects as _projects, PreviousProject, NextProject } from '@utility/projects'
import "./ProjectDetails.css"
import VocabVersus from '@projects/VocabVersus';
import { useEffect, useState } from 'react';

function Details(project: string) {
    switch (project) {
        case _projects.VocabVersus:
            return <VocabVersus />;
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
        <div className="h-100 py-5 d-flex align-items-center">
            <div className="project-info-navigation-container">
                <i className={`bi bi-chevron-up navigation-icon ${nextProject ? "" : "invisible"}`} onClick={() => nextProject ? onChangeProject(nextProject) : null}></i>
                <i className={`bi bi-chevron-down navigation-icon ${previousProject ? "" : "invisible"}`} onClick={() => previousProject ? onChangeProject(previousProject) : null}></i>
            </div>
            <div className="project-info-border-container">
                <div className="project-info-border"></div>
                <div className="project-info-border"></div>
                <div className="project-info-border"></div>
            </div>
            <div className="project-info-container">
                <div className="p-3 pt-5">
                    <h3>{project}</h3>
                    <hr />
                    {Details(project)}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;