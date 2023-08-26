import Underline from "../Underline"

function WebAdventure() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>Web Adventure</h3>
                <Underline initialWidth="0">
                    <a href="https://github.com/Thomas-Molen/WebAdventure" target="_blank"><i className="bi bi-git me-1"></i>Source code</a>
                </Underline>
            </div>
            <hr className="my-0" />
            <p>
            </p>
        </>
    );
}

export default WebAdventure;