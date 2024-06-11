import { useState, useEffect } from 'react'
import { Gitgraph, templateExtend, TemplateName, Mode, MergeStyle, Orientation } from '@sugarypineapple/gitgraph-react'
import './ProjectTimeline.css'
import type { Commit, Tag } from '@gitgraph/core';
import type { ReactSvgElement } from '@sugarypineapple/gitgraph-react/lib/types';
import { Projects as _projects, ProjectColor } from '@utility/projects'
import Skeleton from 'react-loading-skeleton'
import type { TagStyle } from '@gitgraph/core/lib/template';

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
    
    const getTextWidth = (text: string, fontSize: string) => {
        // Add padding offset for small text, and remove some on bigger text due to overshot
        // small text: +10px
        // medium text: -10px
        // large text: -2px per char (min -16)
        const offSet: number = text.length < 5
        ? 10 
        : text.length > 8 
            ? text.length*-2
            : -10; 
        // Perform short hand calculation to estimate size, by multiplying the text length by the given fontsize
        return (text.length * parseFloat(fontSize)) + offSet;
        // determine a more accuracte estimate, however this is significantly more intensive to calculate without a cache
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context!.font = fontSize;
        const textWidth = context!.measureText(text).width;
        return textWidth;
    };

    const arrow = (innerWidth: number) => {
        // Calculate an arrow path with the straight part, being based on changeable innerWidth
        // Add 10 to the curve endings to achive the curved end
        return `M 0 0 L 12 15.5724 V 15.5724 Q 12 15.5724 22 15.5724 H ${innerWidth} Q ${innerWidth + 10} 15.5724 ${innerWidth + 10} 5.5724 V -6 Q ${innerWidth + 10} -15.5724 ${innerWidth} -15.5724 H 22 Q 12 -15.5724 12 -15.5724 V -15.5724 z`;
    }
    function projectTag(name: string, style: TagStyle) {
        // Calculate the text width based on the font size
        let textWidth = getTextWidth(name, "14pt");

        return (
            <g className="pointer" onClick={() => onSetProject(name)}>
                <path d={arrow(textWidth)} fill={style.bgColor} />
                <text fill={style.color} alignmentBaseline="middle" dominantBaseline="middle" x="22" y="2" style={{ fontSize: "14pt" }}>{name}</text>
            </g>
        );
    };

    function DateTag(date: string, style: TagStyle) {
        return (
            <g>
                <path d="M -10 4 q 0 11 10 11 H 62 q 10 0 10 -10 V -5 Q 72 -15 62 -15 H 0 Q -10 -15 -10 -5 z"
                    fill="grey" />
                <text fill={style.color} alignmentBaseline="middle" dominantBaseline="middle" x="11" y="2" style={{ fontSize: "14pt" }}>{date}</text>
            </g>
        )
    };

    function CreateBranchSettings(name: string, color: string) {
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
                master.commit({ renderDot: baseCircle }).tag({ name: "2021", render: DateTag });
                master.commit({
                    subject: "Semester 2",
                    renderDot: empty
                })
                // BasWorld project
                const BASWorld = master.branch(CreateBranchSettings("BAS World", ProjectColor(_projects.BASWorld))).commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.BASWorld, render: projectTag });
                const GameEngine = master.branch(CreateBranchSettings("Game Engine", ProjectColor(_projects.GameEninge))).commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.GameEninge, render: projectTag });
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
                WebAdventure.commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.WebAdventure, render: projectTag });
                // Stuurmen project
                Stuurmen.commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.Stuurmen, render: projectTag });

                // 2022
                master.commit({ renderDot: baseCircle }).tag({ name: "2022", render: DateTag })
                master.merge({ branch: WebAdventure, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.merge({ branch: Stuurmen, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.commit({ subject: "Semester 4", renderDot: empty })
                const Jugo = master.branch(CreateBranchSettings("Jugo", ProjectColor(_projects.Jugo)));
                // Jugo project
                Jugo.commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.Jugo, render: projectTag });
                master.merge({ branch: Jugo, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.commit({ subject: "Semester 5", renderDot: empty })
                const Authore = master.branch(CreateBranchSettings("Author-e", ProjectColor(_projects.Authore)));
                // Author-e projects
                Authore.commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.Authore, render: projectTag });

                //2023
                master.commit({ renderDot: baseCircle }).tag({ name: "2023", render: DateTag });

                master.commit({subject: "Semester 6", renderDot: empty})

                const VocabVersus = WebAdventure.branch(CreateBranchSettings("VocabVersus", ProjectColor(_projects.VocabVersus)));
                const PodoPrinter = master.branch(CreateBranchSettings("PodoPrinter", ProjectColor(_projects.PodoPrinter)));
                // PodoPrinter project
                PodoPrinter.commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.PodoPrinter, render: projectTag });
                // VocabVersus project
                VocabVersus.commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.VocabVersus, render: projectTag });
                master.merge({ branch: VocabVersus, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.merge({ branch: PodoPrinter, commitOptions: { renderMessage: empty, renderDot: empty } });

                master.commit({ subject: "Vacation Semester6-7", renderDot: empty })
                
                const Portfolio = master.branch(CreateBranchSettings("Portfolio", ProjectColor(_projects.Portfolio)));
                Portfolio.commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.Portfolio, render: projectTag });
                
                master.commit({ subject: "Semester 7", renderDot: empty })
                // SUE project
                const SUE = master.branch(CreateBranchSettings("SUE", ProjectColor(_projects.SUE)));
                SUE.commit({ renderDot: commit => selector(commit) }).tag({ name: _projects.SUE, render: projectTag }); // TODO: Add SUE description

                // 2024
                master.commit({ renderDot: baseCircle }).tag({ name: "2024", render: DateTag });

                master.merge({ branch: Portfolio, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.merge({ branch: SUE, commitOptions: { renderMessage: empty, renderDot: empty } });
                master.merge({ branch: Authore, commitOptions: { renderMessage: empty, renderDot: empty } });

                // Info Support projects
                const InfoSupport = master.branch(CreateBranchSettings("Info Support", ProjectColor(_projects.InfoSupport)));
                InfoSupport.commit({ renderDot: empty }).tag({ name: _projects.InfoSupport, render: projectTag }); // TODO: Add Info Support description
                
                // Graduation Fontys

                // Today
                InfoSupport.commit({subject: "Ongoing", renderDot: empty });

                master.commit({subject: "Ongoing", renderDot: empty });
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