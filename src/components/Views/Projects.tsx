import { useState, useEffect } from "react";
import ProjectTimeline from "../ProjectTimeline";
import { Projects as _projects } from "@utility/projects";
import ProjectDetails from "../ProjectDetails";
import Skeleton from "react-loading-skeleton";
import "./Projects.css"

function Projects() {
    const defaultProject: string = _projects.VocabVersus;
    const [currentProject, setCurrentProject] = useState(defaultProject);
    const [obtainingQueryProject, setObtainingQueryProject] = useState(true);

    const setProject = (project: string) => {
        setCurrentProject(project);
        // Set project query parameter to current project
        // URLSearchParams is supported by all modern browsers by sanity check anyways
        if ('URLSearchParams' in window) {
            const queryparams = new URLSearchParams(window.location.search);
            queryparams.set("project", encodeURI(project));
            // Restructure url as base path + query params + location hash to maintain all page data
            window.history.replaceState(null, "", `${location.pathname}?${queryparams}${location.hash}`);
        }
    }

    // Check initial project state
    useEffect(() => {
        if ('URLSearchParams' in window) {
            // Get possibly set project from query parameters
            const queryparams = new URLSearchParams(window.location.search);
            const queryProject = queryparams.get("project");
            // Set project from query parameter or current local value (should be defaultProject for all modern browsers)
            setProject(decodeURI(queryProject ?? currentProject));
        }
        setObtainingQueryProject(false);
    }, []);

    return (
        <div id="projects" className="container-fluid py-5">
            <div className="row h-100">
                <div className="d-flex align-items-center col-12 offset-lg-1 col-lg-6 col-xl-6">
                    {obtainingQueryProject ?
                        <Skeleton width="100%" height="100%" baseColor="transparent" containerClassName="project-skeleton" />
                        :
                        <ProjectDetails project={currentProject} onChangeProject={(project) => setProject(project ?? defaultProject)} />
                    }
                </div>
                <div className="col-lg-5 offset-xl-1 col-xl-4 h-100 d-none d-lg-block">
                    <ProjectTimeline selectedProject={currentProject} onSetProject={(project) => setProject(project ?? defaultProject)} />
                </div>
            </div>
        </div>
    );
}

export default Projects;