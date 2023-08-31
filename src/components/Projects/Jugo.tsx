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
                <div className="col">
                    <Technology image="jupyter.png" alt="Jupyter Notebook" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="pandas.png" alt="Python Pandas" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="seaborn.png" alt="Python Seaborn" className="technology-image" />
                </div>
                <div className="col">
                    <Technology image="scikit.png" alt="Python SciKit Learn & Surprise" className="technology-image" />
                </div>
            </div>
            <p>
            </p>
        </>
    );
}

export default Jugo;