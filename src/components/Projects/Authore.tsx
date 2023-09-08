import Technology from "../Technology";
import Underline from "../Underline"

function Authore() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>Author-e</h3>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="dot-net.png" alt=".NET" />
                <Technology image="blazor.png" alt="Blazor" />
                <span className="note">
                    *Technology info limited due to Non-Disclosure Agreements.
                </span>
            </div>
            <p className="project-intro">
                Lead developer for several business oriented projects.
            </p>
            <p>At Author-e, a dynamic software company, I actively contributed to many projects for various businesses. My primary focus was on creating efficient and maintainable software solutions.</p>
            <p>My work at Author-e allowed me to take a leading role in delivering purpose built software solutions. I architected new systems for complex business solutions as well as helped maintain existing solutions for our partners.</p>
            <p>Engaging with stakeholders within client organizations was a crucial to the success of any project I worked on. I actively collaborated with them to gather requirements, provide progress updates, and address any evolving needs or concerns.</p>
            <p>Building strong relationships with clients and ensuring their satisfaction was a fundamental part of my work at Author-e.</p>
        </>
    );
}

export default Authore;