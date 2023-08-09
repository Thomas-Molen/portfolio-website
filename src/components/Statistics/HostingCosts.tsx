import { Chart } from "react-google-charts";
import Skeleton from 'react-loading-skeleton'
import {HostingCostColors as colors} from "@utility/colors"

export const data: (string | number)[][] = [
    ["Source", "Cost per Month"],
    ["Domain", 0.23],
    ["Vercel host", 0],
    ["Azure host", 0],
    ["DevOps", 0],
];

export const options = {
    backgroundColor: "transparent",
    legend: "none",
    pieHole: 0.4,
    chartArea: { "width": "80%", "height": "90%" },
    pieSliceText: "value",
    pieSliceBorderColor: "transparent",
    pieSliceTextStyle: {
        fontSize: 15,
        bold: true
    },
    tooltip: {
        textStyle: {
            fontSize: 15,
            bold: true
        }
    },
    slices: Object.fromEntries(colors.map((color, index) => [index, { color }]))
};

function HostingCosts() {
    return (
        <div className="row ms-1">
            <div className="col-lg-8 p-0">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"300px"}
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
                        <Skeleton width="100%" height="300px" baseColor="var(--card-color)" />}
                />
            </div>
            <div className="col-lg-4 ps-0 d-flex align-items-center">
                <ul className="ps-2">
                    {data.length <= 1 && <Skeleton baseColor="var(--card-color)" count={4} width="125px" />}
                    {data.slice(1).map((d, i) => (
                        <li className="d-flex" key={i}>
                            <i className="bi bi-circle-fill" style={{ color: colors[i] }}></i>
                            <p className="ms-2" style={{ fontSize: "0.8rem" }}>{d[0]}: {d[1]}€/mo</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HostingCosts;