import './app.less'
import React from 'react'
import {Desktop, Mobile} from '../responsive'
import {connect} from 'react-redux'
import {ConnectedMyChart} from './my-chart'

export class App extends React.Component {

    render() {
        const {date, temperature} = this.props

        return (
            <div className='app'>
                <Desktop>
                    Observation: {date && <span>{date.toDateString()} {date.toLocaleTimeString()}</span>}
                    Temperature: {temperature.value}{temperature.unit}
                    <ConnectedMyChart/>
                </Desktop>
                <Mobile>
                    <button>Currently</button>
                    <button>Hourly</button>
                    <button>Daily</button>
                </Mobile>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        date: state.currently.time,
        temperature: state.currently.temperature || {},
    }
}

const mapDispatchToProps = dispatch => ({})

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
