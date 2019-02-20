import './daily.less'
import React from 'react'
import {connect} from 'react-redux'
import Chart from 'chart.js'
import 'chartjs-plugin-datalabels'

export class Daily extends React.Component {

    componentDidUpdate(prevProps) {
        //This should only happen once. Chart data isn't in redux until after first render, so componentDidMount cannot be used
        if (prevProps.daysInForecast === undefined && this.props.daysInForecast) {
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
                    labels: this.props.daysInForecast,
                    datasets: [
                        {
                            //Iterate through dark sky 'daily' array. Push the temperatureMax to this object's data array
                            label: 'High',
                            data: this.props.forecastedHighs,
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1
                        },
                        {
                            //Iterate through dark sky 'daily' array. Push the temperatureMin to this object's data array
                            label: 'Low',
                            data: this.props.forecastedLows,
                            backgroundColor: 'transparent',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        },
                    ]
                },
            })
        }
    }

    render() {
        return (
            <div className='daily'>
                <h2>The next 7 days...</h2>
                <div className='content'>
                    <canvas id='myChart' ref={el => this.chartRef = el} width='400' height='400'/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    daysInForecast: state.daily.daysInForecast,
    forecastedHighs: state.daily.forecastedHighs,
    forecastedLows: state.daily.forecastedLows,
})

const mapDispatchToProps = dispatch => ({})

export const ConnectedDaily = connect(mapStateToProps, mapDispatchToProps)(Daily)
