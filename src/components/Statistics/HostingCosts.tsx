import { Chart } from "react-google-charts";
import Skeleton from 'react-loading-skeleton'
import { HostingCostColors as colors } from "@utility/colors"
import Accordion from "./Accordion";

type HostingCost = { [service: string]: number };
function ProcessData(data: HostingCost): (string | number)[][] {
    // Sort data based on value (cost)
    const orderedData: HostingCost = Object.fromEntries(
        Object.entries(data)
            .sort((left, right) => right[1] - left[1])
    );

    // Parse service cost data to chart structure
    const services: (string | number)[][] = [
        ["Service", ""],
        ...Object.keys(orderedData).map((service) => [service, data[service]])
    ];

    return services
}

const options = {
    backgroundColor: "transparent",
    legend: "none",
    pieHole: 0.4,
    chartArea: { "width": "90%", "height": "90%" },
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

function HostingCostsLabels(data: (string | number)[][]) {
    return (
        <ul>
            {data.slice(1).map((d, i) => (
                <li className="d-flex" key={i}>
                    <i className="bi bi-circle-fill" style={{ color: colors[i] }}></i>
                    <p className="ms-2" style={{ fontSize: "0.9rem" }}>{d[0]}: {typeof d[1] === "number" ? d[1].toFixed(2) : d[1]}€/mo</p>
                </li>
            ))}
        </ul>
    );
}
interface props {
    data: HostingCost;
}
function HostingCosts({ data }: props) {
    const chartData = ProcessData(data);
    return (
        <div className="row gx-0" title="test-title">
            <div className="col-lg-7">
                <div className="mx-1">
                    <Chart
                        chartType="PieChart"
                        data={chartData}
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
            </div>
            {/* Wide screen */}
            <div className="col-lg-5 d-none d-md-flex align-items-center">
                    {HostingCostsLabels(chartData)}
            </div>
            {/* Mobile */}
            <div className="col-lg-5 d-flex d-md-none align-items-center">
                <Accordion title="Services">
                    {HostingCostsLabels(chartData)}
                </Accordion>
            </div>
        </div>
    );
}

export default HostingCosts;