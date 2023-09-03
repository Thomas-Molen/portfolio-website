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
                Web-based 3D printing solution.
            </p>
            <p>Working in collaboration with the specialized 3D printer company PodoPrinter. My team and I, developed a transformative web-based solution aimed at revolutionizing their 3D printing processes. Our mission was to develop a fully web-based alternative to the 3D printing process provided to their customers.<br />
            Allowing for remote printing to the PodoPrinter printers from anywhere in the world, while keeping any data security/privacy concerns in mind.</p>
            <p>This comprehensive system would allow PodoPrinter to dramatically expand their customer base. Our project encompassed several key components, including the creation of a fully cloud-based slicer, a 3D model analysis system capable of identifying issues or defects across a wide range of 3D model file types, and the development of an intuitive website interface for seamless interaction with the web application.</p>
            <p>Moreover, our team played a pivotal role in setting up the basis of a cloud infrastructure for PodoPrinter, helping them navigate the complexities of a cloud environment as they transitioned to this innovative technology.</p>
        </>
    );
}

export default PodoPrinter;