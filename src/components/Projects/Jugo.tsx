import Technology from "../Technology";
import Underline from "../Underline"

function Jugo() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>Jugo</h3>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="jupyter.png" alt="Jupyter Notebook" />
                <Technology image="pandas.png" alt="Python Pandas" />
                <Technology image="seaborn.png" alt="Python Seaborn" />
                <Technology image="scikit.png" alt="Python SciKit Learn & Surprise" />
            </div>
            <p className="project-intro">
            </p>
            <p>
            </p>
        </>
    );
}

export default Jugo;