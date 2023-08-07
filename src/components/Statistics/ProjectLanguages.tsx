import { Chart } from "react-google-charts";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import colors from "@utility/colors"


function getData(): (string | number | { role: string })[][] {
    // Get language byte data
    const languages = [
        ["Language", ""],
        ["Astro", 9034],
        ["TypeScript", 2032],
        ["JavaScript", 172],
        ["C#", 1],
        ["Other", 100]
    ];

    // Convert languageByteValues to percentages
    const totalLanguageBytes = languages.slice(1).reduce((total, [_, bytes]) => total + Number(bytes), 0)
    const languagePercentages = languages.map(([language, bytes], index) => {
        if (index === 0) return [language, bytes];
        return [language, (Number(bytes) / totalLanguageBytes) * 100];
    });

    // Add color map to data
    // First get the color map and invert it to make it different from other graph
    let invertedColors = colors.slice().reverse();
    let coloredLanguagePercentages = languagePercentages.map((item, index) =>
        index === 0 ? [...item, { role: "style" }] : [...item, invertedColors[index - 1]]
    );

    return coloredLanguagePercentages
}
export const data = getData();

export const options = {
    backgroundColor: "transparent",
    legend: "none",
    bar: { groupWidth: "95%" },
    chartArea: { "width": "80%", "height": "80%" },
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

function ProjectLanguages() {
    return (
        <Chart
            chartType="BarChart"
            data={data}
            options={options}
            width={"100%"}
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
                <Skeleton width="100%" height="300px" baseColor="var(--card-color)" />}
        />
    );
}

export default ProjectLanguages;