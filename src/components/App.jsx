import './App.less'
import React from 'react'
import {Desktop, Mobile} from '../responsive'
import {MyChart} from './MyChart'
import {filterWeatherData} from '../transformers/currently'

export class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: null,
            currently: null,
            entireForecast: null,
        }
    }

    async componentDidMount() {
        const response = await fetch(`${window.api}/weather`)
        const json = await response.json()

        //It appears Webtask only sends a code property on the response if there's an error. So, no code property, no error! From Webtask anyway.
        if (json.code) {
            return console.error('Uh oh! Request did not work', json);
        }

        const filtered = filterWeatherData(json)

        this.setState({
            date: filtered.time,
            currently: filtered.currently,
            entireForecast: json,
        })
    }

    render() {
        return (
            <div className='app'>
                <Desktop>
                    <div>
                        Date of observation: {this.state.date && <span>{this.state.date.toDateString()} {this.state.date.toLocaleTimeString()}</span>}
                    </div>
                    <ul>
                        {this.state.currently && Object.keys(this.state.currently).map(dataPoint =>
                            <li key={dataPoint}>
                                {this.state.currently[dataPoint].label}: {`${this.state.currently[dataPoint].value}${this.state.currently[dataPoint].unit}`}
                            </li>
                        )}
                    </ul>
                    {this.state.entireForecast && <MyChart forecast={this.state.entireForecast}/>}
                </Desktop>
                <Mobile>
                    <div className='breakpoint-title'>Mobile</div>
                </Mobile>
            </div>
        )
    }
}
