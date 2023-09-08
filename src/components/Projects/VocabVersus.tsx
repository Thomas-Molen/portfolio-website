import Underline from "../Underline"
import "./Project.css"
import Technology from "../Technology";

function VocabVersus() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>VocabVersus</h3>
                <Underline initialWidth="0">
                    <a href="https://github.com/Thomas-Molen/VocabVersus" target="_blank"><i className="bi bi-git me-1"></i>Source code</a>
                </Underline>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                    <Technology image="dot-net.png" alt=".NET" />
                    <Technology image="astro.png" alt="Astro" />
                    <Technology image="react.png" alt="React" />
                    <Technology image="vite.png" alt="Vite" />
                    <Technology image="lucene.png" alt="Lucene" />
                    <Technology image="signal-r.png" alt="SignalR" />
                    <Technology image="azure.png" alt="Azure" />
                    <Technology image="vercel.png" alt="Vercel" />
                    <Technology image="docker.png" alt="Docker" />
            </div>
            <p className="project-intro">
                VocabVersus is a web-based multiplayer vocabulary game.
            </p>
            <p>
                Multiple participants compete to come up with a word containing a prescribed set of letters. Points are awarded based on the player's quick thinking, the complexity of their word, and the word's popularity.
            </p>
            <p>
                To deliver an engaging and competitive experience, significant effort has gone into designing the entire application with a focus on minimal client-server process delay and the ability to handle an ever growing user base.<br />
                Additionally, an evolving word-scoring system, which adapts in real-time based on game data, keeps participants engaged and awards the use of less common words.
            </p>
            <p>
                The application is fully cloud-hosted, making use of robust technologies like Lucene and SignalR to ensure a seamless user experience and the capability to accommodate a large number of users within a single or many seperate game instances,
                all while keeping hosting expenses in check.
            </p>
            <i>
                For a hands on experience, check out the&nbsp;
                <Underline initialWidth="0">
                    <a href="https://vocabversus.thomasmolen.com" target="_blank">Live demo!<i className="bi bi-box-arrow-up-right ms-1">*</i></a>
                </Underline>
                <br />
                <span className="note">
                    *Live demo applications are hosted in the cloud in a zero-cost mode, this will minimize costs by aggresively lowering resources depending on usage,<br />
                    application might be slow while resources are being reassigned.
                </span>
            </i>
        </>
    );
}

export default VocabVersus;