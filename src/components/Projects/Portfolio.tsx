import Technology from "../Technology";
import Underline from "../Underline"

function Portfolio() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>Portfolio</h3>
                <Underline initialWidth="0">
                    <a href="https://github.com/Thomas-Molen/Portfolio" target="_blank"><i className="bi bi-git me-1"></i>Source code</a>
                </Underline>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="dot-net.png" alt=".NET" />
                <Technology image="astro.png" alt="Astro" />
                <Technology image="react.png" alt="React" />
                <Technology image="redis.png" alt="Redis" />
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

export default Portfolio;