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
                    <Technology image="sql-server.png" alt="SQL Server" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="azure.png" alt="Azure" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="netlify.png" alt="Netlify" className="technology-image" />
                </div>
            </div>
            <p>
            </p>
        </>
    );
}

export default Stuurmen;