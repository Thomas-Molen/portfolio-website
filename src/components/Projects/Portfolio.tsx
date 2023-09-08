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
                Project history portfolio website of Thomas Van der Molen.
            </p>
            <p>
                To showcase all the major project I have worked on during my adventures through the world of IT, I have decided to create a portfolio website where all projects can be easily accessed, as well as concisely showcasing my expertise and skills within the industry.
            </p>
            <p>
                The portfolio project is designed with rapid development and low hosting costs in mind. This is achieved by adopting a cloud-first methodology, utilizing cloud-agnostic tools such as serverless functions, and implementing a fully automated deployment process for the chosen cloud providers.
            </p>
            <i>
                For a showcase of this project look no further than the website you are on already, as this is the portfolio project!
            </i>
        </>
    );
}

export default Portfolio;