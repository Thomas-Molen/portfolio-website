import Technology from "../Technology";
import Underline from "../Underline"

function WebAdventure() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>WebAdventure</h3>
                <Underline initialWidth="0">
                    <a href="https://github.com/Thomas-Molen/WebAdventure" target="_blank"><i className="bi bi-git me-1"></i>Source code</a>
                </Underline>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="dot-net.png" alt=".NET" />
                <Technology image="react.png" alt="React" />
                <Technology image="cypress.png" alt="Cypress" />
                <Technology image="signal-r.png" alt="SignalR" />
                <Technology image="mysql.png" alt="MySQL" />
                <Technology image="azure.png" alt="Azure" />
                <Technology image="vercel.png" alt="Vercel" />
            </div>
            <p className="project-intro">
                Procedually generated web-based multiplayer text adventure game.
            </p>
            <p>Undertaking an exciting project, I developed a modernized text adventure game that seamlessly combined nostalgia with cutting-edge technology. My mission was to revitalize the classic text-based gaming experience for the modern era. The result? A massively multiplayer web application, fully hosted in the cloud, with virtually endless playability.</p>

            <p>From the enemy encounters to the rooms themselves, the entire game is procedually generated, ensuring that every player could have a unique experience, and compete against one another in a constantly changing environment. Remember that the game is also not just singleplayer, players will be placed within the same dungeon as other users, allowing real-time interactions with one another, competing against eachother or even overcoming challenges that had been <i>attempted</i> by people before.</p>

            <p>The game has a global leaderboards where players can compete to become the strongest survivors in the dungeon, with constantly increasing stakes due to the permament death of characters, cutting any survivors journey short if not properly taking advantage of all tools available within the dungeon, the game can stay exciting no matter how long you play.</p>

            <i>
                The homepage can be viewed&nbsp;
                <Underline initialWidth="0">
                    <a href="https://vocabversus.thomasmolen.com" target="_blank">here<i className="bi bi-box-arrow-up-right ms-1">*</i></a>
                </Underline>
                <br />
                <span className="note">
                    *The game engine and authentication services are temporarily offline while the cloud-infrasture is being re-structured for a demo environment.
                </span>
            </i>
        </>
    );
}

export default WebAdventure;