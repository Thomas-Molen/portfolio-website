import Skeleton from 'react-loading-skeleton'
import { Gitgraph, templateExtend, TemplateName, Mode, MergeStyle } from '@sugarypineapple/gitgraph-react'
import './ProjectTimeline.css'
import type { Commit } from '@gitgraph/core';
import type { ReactSvgElement } from '@sugarypineapple/gitgraph-react/lib/types';
import { ProjectColors } from '@utility/colors';
import { useState } from 'react';
const defaultProject = "VocabVersus"
const template = templateExtend(TemplateName.Metro, {
    branch: { label: { display: false }, spacing: 30, mergeStyle: MergeStyle.Bezier },
    colors: ProjectColors,
    commit: {
        spacing: 35,
        message: {
            display: false,
            displayAuthor: false,
            displayHash: false,
        }
    },
});

function ProjectTimeline() {
    const [selectedProject, setSelectedProject] = useState<string>(defaultProject);

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
    function selector(commit: Commit<ReactSvgElement>) {
        if ((commit.tags?.[0].name ?? defaultProject) == selectedProject) {
            // selected project
            return baseCircle(commit);
        }
        else {
            // not selected project
            return (
                <g className="pointer" onClick={() => selectorClick(commit)}>
                    <circle r={14} cx={14} cy={14} stroke={commit.style.dot.color} strokeWidth="5" fill="var(--background)" />
                </g>
            );
        }
    };

    const selectorClick = function (commit: Commit<ReactSvgElement>) {
        setSelectedProject(() => commit.tags?.[0].name ?? defaultProject);
    }

    return (
        <div id="graph-container" className="svg-container">
            <Gitgraph options={
                {
                    author: "Thomas",
                    template: template,
                    branchLabelOnEveryCommit: false,
                }
            } key={selectedProject}>
                {(gitgraph) => {
                    const master = gitgraph.branch("master");
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
                    const BASWorld = master.branch("BAS World").commit({ renderDot: commit => selector(commit), onClick: selectorClick }).tag("BAS World");

                    master.commit({
                        subject: "Semester 3",
                        renderDot: empty
                    })
                    const WebAdventure = master.branch("WebAdventure");
                    const Stuurmen = master.branch("Stuurmen");
                    master.merge({ branch: BASWorld, commitOptions: { renderMessage: empty, renderDot: empty } });
                    // WebAdventure project
                    WebAdventure.commit({ renderDot: commit => selector(commit) }).tag("WebAdventure");
                    // Stuurmen project
                    Stuurmen.commit({ renderDot: commit => selector(commit) }).tag("Stuurmen");

                    // 2022
                    master.commit({ renderDot: baseCircle }).tag("2022")
                    master.merge({ branch: WebAdventure, commitOptions: { renderMessage: empty, renderDot: empty } });
                    master.merge({ branch: Stuurmen, commitOptions: { renderMessage: empty, renderDot: empty } });
                    master.commit({ subject: "Semester 4", renderDot: empty })
                    const Jugo = master.branch("Jugo");
                    // Jugo project
                    Jugo.commit({ renderDot: commit => selector(commit) }).tag("Jugo");
                    master.merge({ branch: Jugo, commitOptions: { renderMessage: empty, renderDot: empty } });
                    master.commit({ subject: "Semester 5", renderDot: empty })
                    const Authore = master.branch("Author-e");
                    // Author-e Internship project
                    Authore.commit({ renderDot: commit => selector(commit) }).tag("Author-e Internship");
                    // Author-e Job project
                    Authore.commit({ renderDot: commit => selector(commit) }).tag("Author-e Job");

                    //2023
                    master.commit({ renderDot: baseCircle }).tag("2023");

                    master.commit({
                        subject: "Semester 6",
                        renderDot: empty
                    })
                    const VocabVersus = WebAdventure.branch("VocabVersus");
                    const PodoPrinter = master.branch("PodoPrinter");
                    // PodoPrinter project
                    PodoPrinter.commit({ renderDot: commit => selector(commit) }).tag("PodoPrinter");
                    // VocabVersus project
                    VocabVersus.commit({ renderDot: commit => selector(commit) }).tag("VocabVersus");
                    master.merge({ branch: VocabVersus, commitOptions: { renderMessage: empty, renderDot: empty } });
                    master.merge({ branch: PodoPrinter, commitOptions: { renderMessage: empty, renderDot: empty } });

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
        </div>
    );
}

export default ProjectTimeline;