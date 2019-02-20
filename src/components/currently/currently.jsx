import './currently.less'
import React from 'react'
import {connect} from 'react-redux'

export const Currently = (props) => (
    <div className='currently'>
        <div>
            <div className='temperature'>{props.temperature}f</div>
            <div className='feels-like'>Feels like {props.feelsLike}f</div>
        </div>
        <div>
            <div>Dew point: {props.dewPoint}f</div>
            <div>Humidity: {props.humidity}%</div>
            <div>Wind Speed: {props.windSpeed}mph</div>
            <div>Wind Gust: {props.windGust}mph</div>
        </div>
    </div>
)

const mapStateToProps = state => ({
    temperature: (state.currently.temperature || {}).value,
    feelsLike: (state.currently.feelsLike || {}).value,
    dewPoint: (state.currently.dewPoint || {}).value,
    humidity: (state.currently.humidity || {}).value,
    windSpeed: (state.currently.windSpeed || {}).value,
    windGust: (state.currently.windGust || {}).value,
})

const mapDispatchToProps = dispatch => ({})

export const ConnectedCurrently = connect(mapStateToProps, mapDispatchToProps)(Currently)
