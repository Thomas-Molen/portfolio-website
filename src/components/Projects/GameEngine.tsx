import Technology from "../Technology";
import Underline from "../Underline"

function GameEninge() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>Game Eninge</h3>
                <Underline initialWidth="0">
                    <a href="https://github.com/Thomas-Molen/SugaryEngine" target="_blank"><i className="bi bi-git me-1"></i>Source code</a>
                </Underline>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="dot-net.png" alt=".NET" />
                <Technology image="mono-game.png" alt="MonoGame" />
                <Technology image="laravel.png" alt="Laravel" />
                <Technology image="mysql.png" alt="MySQL" />
            </div>
            <p className="project-intro">
                Game Engine, including direct web application connection with accompanying Proof of Concept speedrun game.
            </p>
            <p>I undertook an exciting project involving the development of a game engine and proof of concept speedrunning game using MonoGame. This project also featured direct integration with a web application that offered automatically updating leaderboards for tracking completion times directly from the game.</p>
            <p>This project served as a valuable opportunity for me to gain experience in building large, complex, and multi-disciplinary spanning projects. Utilizing frameworks such as MonoGame and Laravel to build up a featureful game (engine) and web application in a short amount of time.</p>
            <p>The integration with the web application provided insights into real-time data synchronization and user interaction, keeping user experience in mind while also ensuring security.</p>
        </>
    );
}

export default GameEninge;