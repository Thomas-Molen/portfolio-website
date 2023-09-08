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
                Predicting advantageous travel times for Jugo consultants, helping the environment and productivity.
            </p>
            <p>As part of a multi-disciplinary team, I had the opportunity to collaborate on an impactful project for the consultancy firm Jugo. Uniting a team with diverse skills for a common goal; empowering Jugo within the world of Artificial Inteligence.</p>
            <p>Our task was to acquire and analyze extensive datasets, culminating in the development of a machine learning model.<br />
            This model was developed with the purpose of predicting the most advantageous travel times for Jugo's consultants when they work on-site at client locations.</p>
            <p>Together with my teammates, we explored the domain of data analysis and machine learning to provide Jugo with insights into the plausability and possible integration of such predictive AI models within a company.</p>
        </>
    );
}

export default Jugo;