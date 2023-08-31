import Technology from "../Technology";
import Underline from "../Underline"

function PodoPrinter() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>PodoPrinter</h3>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="dot-net.png" alt=".NET" />
                <Technology image="fast-api.png" alt="Python Fast API" />
                <Technology image="react.png" alt="React" />
                <Technology image="vite.png" alt="Vite" />
                <Technology image="vitest.png" alt="Vitest" />
                <Technology image="cura.png" alt="Cura Engine" />
                <Technology image="azure.png" alt="Azure" />
                <Technology image="docker.png" alt="Docker" />
            </div>
            <p className="project-intro">
            </p>
            <p>
            </p>
        </>
    );
}

export default PodoPrinter;