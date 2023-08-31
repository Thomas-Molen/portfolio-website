import Technology from "../Technology";
import Underline from "../Underline"

function Authore() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>Author-e Job</h3>
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
            </p>
            <p>
            </p>
        </>
    );
}

export default Authore;