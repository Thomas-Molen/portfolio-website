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
            <p>
            </p>
        </>
    );
}

export default Portfolio;