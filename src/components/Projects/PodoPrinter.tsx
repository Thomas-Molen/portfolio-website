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
                <div className="col">
                    <Technology image="dot-net.png" alt=".NET" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="fast-api.png" alt="Python Fast API" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="react.png" alt="React" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="vite.png" alt="Vite" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="vitest.png" alt="Vitest" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="cura.png" alt="Cura Engine" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="azure.png" alt="Azure" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="docker.png" alt="Docker" className="technology-image" />
                </div>
            </div>
            <p>
            </p>
        </>
    );
}

export default PodoPrinter;