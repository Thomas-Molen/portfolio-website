import Technology from "../Technology";
import Underline from "../Underline"

function WebAdventure() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>WebAdventure</h3>
                <Underline initialWidth="0">
                    <a href="https://github.com/Thomas-Molen/WebAdventure" target="_blank"><i className="bi bi-git me-1"></i>Source code</a>
                </Underline>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="dot-net.png" alt=".NET" />
                <Technology image="react.png" alt="React" />
                <Technology image="cypress.png" alt="Cypress" />
                <Technology image="signal-r.png" alt="SignalR" />
                <Technology image="mysql.png" alt="MySQL" />
                <Technology image="azure.png" alt="Azure" />
                <Technology image="vercel.png" alt="Vercel" />
            </div>
            <p className="project-intro">
            </p>
            <p>
            </p>
        </>
    );
}

export default WebAdventure;