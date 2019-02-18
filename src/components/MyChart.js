import React from 'react'
import Chart from 'chart.js'
import 'chartjs-plugin-datalabels'
import {filterWeatherData} from '../transformers/daily'

export class MyChart extends React.Component {

    componentDidMount() {
        const dailyWeatherData = filterWeatherData(this.props.forecast)

        new Chart(this.chartRef, {
            type: 'line',
            options: {
                plugins: {
                    datalabels: {
                        align: 'top'
                    }
                }
            },
            data: {
                //This is actually x-axis label. y-axis is auto-labeled number range defined by the dataset's data arrays
                //Number of labels must match length of data array inside a dataset
                //For this graph, iterate through dark sky 'daily' array. Format time property for each and push to labels
                //High, low, record high and record low datasets all share the same x-axis labels
                labels: dailyWeatherData.daysInForecast,
                datasets: [
                    {
                        //Iterate through dark sky 'daily' array. Push the temperatureMax to this object's data array
                        label: 'High',
                        data: dailyWeatherData.forecastedHighs,
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1
                    },
                    {
                        //Iterate through dark sky 'daily' array. Push the temperatureMin to this object's data array
                        label: 'Low',
                        data: dailyWeatherData.forecastedLows,
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    // {
                    //     //Need to make API call for dark sky historical data, cache it, then put each corresponding day here
                    //     label: 'Record High',
                    //     data: [50, 45, 40, 35, 30, 25],
                    //     backgroundColor: 'transparent',
                    //     borderColor: 'rgba(255, 206, 86, 1)',
                    //     borderWidth: 1
                    // },
                    // {
                    //     //Need to make API call for dark sky historical data, cache it, then put each corresponding day here
                    //     label: 'Record Low',
                    //     data: [-25, -35, -50, -20, -2, -30],
                    //     backgroundColor: 'transparent',
                    //     borderColor: 'rgba(255, 159, 64, 1)',
                    //     borderWidth: 1
                    // },
                ]
            },
        })
    }

    render() {
        return <canvas id="myChart" ref={el => this.chartRef = el} />
    }
}
