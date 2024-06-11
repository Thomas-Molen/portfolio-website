import Technology from "../Technology";
import Underline from "../Underline"

function SUE() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>SUE</h3>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="tensor-flow.png" alt="TensorFlow" />
                <Technology image="pandas.png" alt="Python Pandas" />
                <Technology image="streamlit.png" alt="Streamlit" />
                <Technology image="jupyter.png" alt="Jupyter Notebook" />
                <Technology image="aws.png" alt="Amazon Web Services" />
                <Technology image="dvc.png" alt="DVC" />
                <Technology image="tict.png" alt="Technology Impact Cycle Tool" />
            </div>
            <p className="project-intro">
                Leveraging new AI technologies to automatically detect malicious behavior in the cloud. 
            </p>
            <p>SUE, a consultancy and cloud solution provider has many customers who trust their worldclass cloud deployment expertise and accompanying security.</p>
            <p>To keep their customers safe from any existing and new threats to their cloud infrastructure, my team and I have researched, developed and showcased a viable method of using new Artificial Intelligence technologies to detect malicious behaviour through networking logs.</p>
            <p>For this project we have collaborated with TU/Delft researchers to build on top of their research<sup>[1]</sup> into state machine anomaly detection, along with developments into new AI models such as Anomaly Detection Transformers<sup>[2]</sup> to build a model that can confidently identify and relay malicious behaviour within customer's cloud environments.</p>
            <br />
            <sup>[1]</sup>
            <Underline initialWidth="0">
                <a href="https://arxiv.org/abs/2207.12087" target="_blank">Learning State Machines to Monitor and Detect Anomalies on a Kubernetes Cluster<i className="bi bi-box-arrow-up-right ms-1"></i></a>
            </Underline>
            <br />
            <sup>[2]</sup>
            <Underline initialWidth="0">
                <a href="https://arxiv.org/abs/2201.07284" target="_blank">TranAD: Deep Transformer Networks for Anomaly Detection in Multivariate Time Series Data<i className="bi bi-box-arrow-up-right ms-1"></i></a>
            </Underline>
        </>
    );
}

export default SUE;