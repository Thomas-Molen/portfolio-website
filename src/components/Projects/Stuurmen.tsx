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
                Fully automated license management system for selling plugins of popular design tools.
            </p>
            <p>Together with a talented team, we were challenged by Stuurmen/OneBlinq to develop an efficient licensing system tailored for their suite of design tool plugins, which could be sold seamlessly via their external webshop.</p>

            <p>This specialized licensing application was designed to simplify the process of managing and delivering licenses to customers. This included a web interface, allowing both Stuurmen employees to manage and view license activity as well as offering a hub for their customers to find all Stuurmen related content.</p>
            <p>The end result was a fully integrated and cloud hosted licensing system. This cloud-based solution ensured scalability, reliability, and future extensibility, allowing Stuurmen/OneBlinq to adapt and grow as their needs evolve. Additionally, the system was designed to efficiently manage free trials, providing a valuable tool for customer engagement and product adoption.</p>
        </>
    );
}

export default Stuurmen;