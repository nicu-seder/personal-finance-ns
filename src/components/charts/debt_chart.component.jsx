import React, {useState} from "react";
import Chart from "react-apexcharts";

//import styles
import {DebtChartContainer} from "./debt_chart.styles";

const DebtChart = ({debt_completion_percentage}) => {
    const [chartData] = useState(
        {
            options: {
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 15,
                            size: "70%"
                        },

                        dataLabels: {
                            showOn: "always",
                            name: {
                                offsetY: -10,
                                show: true,
                                color: "#888",
                                fontSize: "13px"
                            },
                            value: {
                                color: "#878C96",
                                fontSize: "30px",
                                fontFamily: 'Open Sans Condensed',
                                show: true
                            }
                        }
                    }
                },
                colors: ['#5DB1B9'],
                labels: ['Debt completion'],
                stroke: {
                    lineCap: "round",
                }
            },
            series: [debt_completion_percentage]
        }
    );
    const {options, series} = chartData;

    return (
        <DebtChartContainer>
            <Chart
                options={options}
                series={series}
                type="radialBar"
                width="250"
            />
        </DebtChartContainer>
    )
};

export default DebtChart;


