import { Chart } from "react-google-charts";
import Skeleton from 'react-loading-skeleton'
import {LanguageColors as colors} from "@utility/colors"


function ProcessData(data: { [language: string]: number }): (string | number | { role: string })[][] {
    // Get language byte data
    const languages: (string | number | { role: string })[][] = [
        ["Language", ""],
        ...Object.keys(data).map((language) => [language, data[language]])
    ];

    // Convert languageByteValues to percentages
    const LanguageValueTotal = Object.values(data).reduce((total, value) => total + value);
    const languagePercentages = languages.map(([language, bytes], index) => {
        if (index === 0) return [language, bytes];
        return [language, (Number(bytes) / LanguageValueTotal) * 100];
    });

    // Add color map to data
    let coloredLanguagePercentages = languagePercentages.map((item, index) =>
        index === 0 ? [...item, { role: "style" }] : [...item, colors[index - 1]]
    );

    return coloredLanguagePercentages
}

const options = {
    backgroundColor: "transparent",
    legend: "none",
    bar: { groupWidth: "95%" },
    chartArea: { "width": "80%", "height": "80%", "left": 100},
    hAxis: {
        textStyle: {
            color: "lightgrey"
        },
        gridlines: {
            color: "lightgrey"
        },
        minorGridlines: {
            color: "grey"
        },
        format: "#\'%\'"
    },
    vAxis: {
        textStyle: {
            color: "white"
        }
    }
};

interface props {
    data: ({ [language: string]: number });
}
function ProjectLanguages({ data }: props) {
    const chartData = ProcessData(data);
    return (
        <Chart
            chartType="BarChart"
            data={chartData}
            options={options}
            width={"99%"}
            height={"300px"}
            formatters={[
                {
                    type: "NumberFormat",
                    column: 1,
                    options: {
                        suffix: "%",
                    }
                }
            ]}
        />
    );
}

export default ProjectLanguages;