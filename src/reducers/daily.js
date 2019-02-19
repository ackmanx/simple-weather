import {forecast_payload} from '../actions/action-types'

export function daily(state = {}, action = {}) {

    switch (action.type) {
        case forecast_payload:
            return filterWeatherData(action.payload)

        default:
            return state
    }
}

export function filterWeatherData(json) {
    const filtered = {
        daysInForecast: [],
        forecastedHighs: [],
        forecastedLows: [],
    }
    const daily = json.daily

    if (!daily) return {}

    daily.data.forEach(day => {
        filtered.daysInForecast.push(new Date(day.time * 1000).toLocaleDateString('en-US', {weekday: 'long'}))
        filtered.forecastedHighs.push(Math.round(day.temperatureHigh))
        filtered.forecastedLows.push(Math.round(day.temperatureLow))
    })

    return filtered
}
