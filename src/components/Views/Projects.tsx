import { useState } from "react";
import ProjectTimeline from "../ProjectTimeline";

function Projects() {
    const defaultProject = "VocabVersus";
    const [currentProject, setCurrentProject] = useState(defaultProject)

    return (
        <div id="projects" className="container-fluid py-5" style={{height: "100vh"}}>
            <div className="row h-100">

                <div className="col-12 col-lg-7 col-xl-8">
                    {currentProject}
                </div>
                <div className="col-lg-5 col-xl-4 h-100 d-none d-lg-block">
                    <ProjectTimeline currentProject={currentProject} onSetProject={(project) => setCurrentProject(project ?? defaultProject)}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;