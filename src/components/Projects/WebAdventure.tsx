import Technology from "../Technology";
import Underline from "../Underline"

function WebAdventure() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>Web Adventure</h3>
                <Underline initialWidth="0">
                    <a href="https://github.com/Thomas-Molen/WebAdventure" target="_blank"><i className="bi bi-git me-1"></i>Source code</a>
                </Underline>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <div className="col">
                    <Technology image="dot-net.png" alt=".NET" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="react.png" alt="React" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="cypress.png" alt="Cypress" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="signal-r.png" alt="SignalR" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="mysql.png" alt="MySQL" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="azure.png" alt="Azure" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="vercel.png" alt="Vercel" className="technology-image" />
                </div>
            </div>
            <p>
            </p>
        </>
    );
}

export default WebAdventure;