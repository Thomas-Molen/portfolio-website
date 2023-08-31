import Technology from "../Technology";
import Underline from "../Underline"

function Stuurmen() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>Stuurmen</h3>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="dot-net.png" alt=".NET" />
                <Technology image="react.png" alt="React" />
                <Technology image="cypress.png" alt="Cypress" />
                <Technology image="sql-server.png" alt="SQL Server" />
                <Technology image="azure.png" alt="Azure" />
                <Technology image="netlify.png" alt="Netlify" />
            </div>
            <p className="project-intro">
            </p>
            <p>
            </p>
        </>
    );
}

export default Stuurmen;