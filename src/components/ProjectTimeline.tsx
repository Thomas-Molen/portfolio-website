import { useState, useEffect } from 'react'
import { Gitgraph, templateExtend, TemplateName, Mode, MergeStyle, Orientation } from '@sugarypineapple/gitgraph-react'
import './ProjectTimeline.css'
import type { Commit } from '@gitgraph/core';
import type { ReactSvgElement } from '@sugarypineapple/gitgraph-react/lib/types';
import { Projects as _projects, ProjectColor } from '@utility/projects'
import Skeleton from 'react-loading-skeleton'

const defaultProject = "VocabVersus"
const template = templateExtend(TemplateName.Metro, {
    branch: { label: { display: false }, spacing: 30, mergeStyle: MergeStyle.Bezier },
    commit: {
        spacing: 35,
        message: {
            display: false,
            displayAuthor: false,
            displayHash: false,
        }
    },
});

interface graphProps {
    selectedProject: string;
    onSetProject: (project: string | undefined) => void;
    placeholder?: boolean;
}
function Graph({ selectedProject, onSetProject, placeholder = false }: graphProps) {
    const empty = function () {
        return (
            <></>
        );
    }
    const baseCircle = function (commit: Commit<ReactSvgElement>) {
        return (
            <g>
                <circle r={15} cx={14} cy={14} fill={commit.style.dot.color} />
            </g>
        );
    }
    const fakeSelector = function (commit: Commit<ReactSvgElement>) {
        return (
            <g>
                <circle r={14} cx={14} cy={14} stroke={commit.style.dot.color} strokeWidth="5" fill="var(--background)" />
            </g>
        );
    }
    function selector(commit: Commit<ReactSvgElement>) {
        if (placeholder) return fakeSelector(commit);
        if ((commit.tags?.[0].name ?? defaultProject) == selectedProject) {
            // selected project
            return baseCircle(commit);
        }
        else {
            // not selected project
            return (
                <g className="pointer" onClick={() => onSetProject(commit.tags?.[0].name)}>
                    <circle r={14} cx={14} cy={14} stroke={commit.style.dot.color} strokeWidth="5" fill="var(--background)" />
                </g>
            );
        }
    };

    function CreateBranchSettings(name: string, color: string)
    {
        return {
            name: name,
            style: {
              color: color,
              label: {
                strokeColor: color
              }
            },
            commitDefaultOptions: {
              style: {
                color: color,
                message: {
                  color: color
                },
                dot: {
                  color: color
                }
              }
            }
          }
    }

    return (
        <Gitgraph options={
            {
                author: "Thomas",
                template: template,
                branchLabelOnEveryCommit: false,
            }
        } key={placeholder ? "placeholder" : selectedProject}>
            {(gitgraph) => {
                const master = gitgraph.branch(CreateBranchSettings("master", "grey"));
                master.commit({
                    subject: "Start",
                    renderDot: empty,
                });

                // 2021
                master.commit({ renderDot: baseCircle }).tag("2021");
                master.commit({
                    subject: "Semester 2",
                    renderDot: empty
                })
                // BasWorld project
                const BASWorld = master.branch(CreateBranchSettings("BAS World", ProjectColor(_projects.BASWorld))).commit({ renderDot: commit => selector(commit) }).tag(_projects.BASWorld);
                const GameEngine = master.branch(CreateBranchSettings("Game Engine", ProjectColor(_projects.GameEninge))).commit({ renderDot: commit => selector(commit) }).tag(_projects.GameEninge);
                // Sugary Engine project
                master.merge({ branch: BASWorld, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.merge({ branch: GameEngine, commitOptions: { renderMessage: empty, renderDot: empty } });

                master.commit({
                    subject: "Semester 3",
                    renderDot: empty
                })
                const WebAdventure = master.branch(CreateBranchSettings("WebAdventure", ProjectColor(_projects.WebAdventure)));
                const Stuurmen = master.branch(CreateBranchSettings("Stuurmen", ProjectColor(_projects.Stuurmen)));
                // WebAdventure project
                WebAdventure.commit({ renderDot: commit => selector(commit) }).tag(_projects.WebAdventure);
                // Stuurmen project
                Stuurmen.commit({ renderDot: commit => selector(commit) }).tag(_projects.Stuurmen);

                // 2022
                master.commit({ renderDot: baseCircle }).tag("2022")
                master.merge({ branch: WebAdventure, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.merge({ branch: Stuurmen, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.commit({ subject: "Semester 4", renderDot: empty })
                const Jugo = master.branch(CreateBranchSettings("Jugo", ProjectColor(_projects.Jugo)));
                // Jugo project
                Jugo.commit({ renderDot: commit => selector(commit) }).tag(_projects.Jugo);
                master.merge({ branch: Jugo, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.commit({ subject: "Semester 5", renderDot: empty })
                const Authore = master.branch(CreateBranchSettings("Author-e", ProjectColor(_projects.Authore)));
                // Author-e projects
                Authore.commit({ renderDot: commit => selector(commit) }).tag(_projects.Authore);

                //2023
                master.commit({ renderDot: baseCircle }).tag("2023");

                master.commit({
                    subject: "Semester 6",
                    renderDot: empty
                })
                const VocabVersus = WebAdventure.branch(CreateBranchSettings("VocabVersus", ProjectColor(_projects.VocabVersus)));
                const PodoPrinter = master.branch(CreateBranchSettings("PodoPrinter", ProjectColor(_projects.PodoPrinter)));
                // PodoPrinter project
                PodoPrinter.commit({ renderDot: commit => selector(commit) }).tag(_projects.PodoPrinter);
                // VocabVersus project
                VocabVersus.commit({ renderDot: commit => selector(commit) }).tag(_projects.VocabVersus);
                master.merge({ branch: VocabVersus, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.merge({ branch: PodoPrinter, commitOptions: { renderMessage: empty, renderDot: empty } });

                master.commit({ subject: "Vacation Semester6-7", renderDot: empty })

                const Portfolio = master.branch(CreateBranchSettings("Portfolio", ProjectColor(_projects.Portfolio)));
                Portfolio.commit({ renderDot: commit => selector(commit) }).tag(_projects.Portfolio);

                Portfolio.commit({
                    subject: "Ongoing",
                    renderDot: empty
                });
                Authore.commit({
                    subject: "Ongoing",
                    renderDot: empty
                });
                master.commit({
                    subject: "Ongoing",
                    renderDot: empty
                });
            }}
        </Gitgraph>
    );
}

interface projectTimelineProps {
    selectedProject: string;
    onSetProject: (project: string | undefined) => void;
}
function ProjectTimeline({ selectedProject, onSetProject }: projectTimelineProps) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div id="graph-container" className="svg-container">
            {isLoading && (
                <Skeleton width="400px" height="800px" baseColor="transparent" />
            )}
            <div className={`${isLoading ? "d-none" : ""}`}>
                <div className="graph" style={{ zIndex: "0" }}>
                    <Graph selectedProject={selectedProject} onSetProject={onSetProject} placeholder />
                </div>
                <div className="graph" style={{ zIndex: "1" }}>
                    <Graph selectedProject={selectedProject} onSetProject={onSetProject} />
                </div>
            </div>
        </div>
    );
}

export default ProjectTimeline;