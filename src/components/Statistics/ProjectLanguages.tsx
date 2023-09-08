import { Chart } from "react-google-charts";
import Skeleton from 'react-loading-skeleton'
import {LanguageColors as colors} from "@utility/colors"

type LanguageData = { [language: string]: number };
function ProcessData(data: LanguageData): (string | number | { role: string })[][] {
    // Sort data based on value (languagebytes)
    const orderedData: LanguageData = Object.fromEntries(
        Object.entries(data)
            .sort((left, right) => right[1] - left[1])
    );
    // Parse language byte data to chart structure
    const languages: (string | number | { role: string })[][] = [
        ["Language", ""],
        ...Object.keys(orderedData).map((language) => [language, data[language]]),
        // Anything under ~100 bytes is not included, so add it as a static value for context
        ["Other", 100]
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
    data: LanguageData;
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
            loader={
                <Skeleton width="99%" height="300px" baseColor="transparent" />}
        />
    );
}

export default ProjectLanguages;