import Technology from "../Technology";
import Underline from "../Underline"

function BASWorld() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>BAS World</h3>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="laravel.png" alt="Laravel" />
                <Technology image="mysql.png" alt="MySQL" />
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

export default BASWorld;