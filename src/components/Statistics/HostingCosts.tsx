import { Chart } from "react-google-charts";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export const data = [
    ["Source", "Cost per Month", "#FFFFFF"],
    ["Domain", 0.23, "#6f9654"],
    ["Vercel host", 0, "#e7711b"],
    ["Azure host", 0, "#1c91c0"],
    ["DevOps", 0, "#43459d"],
];

export const options = {
    backgroundColor: "transparent",
    legend: "none",
    pieHole: 0.4,
    chartArea: { "width": "100%", "height": "80%" },
    pieSliceText: "value",
    slices: {
        0: { color: data[1][2] },
        1: { color: data[2][2] },
        2: { color: data[3][2] },
        3: { color: data[4][2] },
    }
};

function HostingCosts() {
    return (
        <div className="row m-3">
            <div className="col">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"250px"}
                    formatters={[
                        {
                            type: "NumberFormat",
                            column: 1,
                            options: {
                                suffix: "€/mo",
                            }
                        }
                    ]}
                    loader={
                        <Skeleton height="250px" baseColor="var(--card-color)" />}
                />
            </div>
            <div className="col d-flex align-items-center">
                <ul>
                    {data && <Skeleton baseColor="var(--card-color)" count={4}  width="125px"/>}
                    {data.slice(1).map((d) => (
                        <li className="d-flex">
                            <i className="bi bi-circle-fill" style={{ color: d[2] }}></i>
                            <p style={{ fontSize: "0.8rem" }}>{d[0]}: {d[1]}€/mo</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HostingCosts;