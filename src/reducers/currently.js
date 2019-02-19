import {forecast_payload} from '../actions/action-types'

export function currently(state = {}, action = {}) {

    switch (action.type) {
        case forecast_payload:
            return filterWeatherData(action.payload)

        default:
            return state
    }
}

export function filterWeatherData(json) {
    const currently = json.currently

    if (!currently) return {}

    return {
        time: new Date(currently.time * 1000),
        temperature: {
            label: 'Temperature',
            value: currently.temperature,
            unit: 'f',
        },
        feelsLike: {
            label: 'Feels Like',
            value: currently.apparentTemperature,
            unit: 'f',
        },
        dewPoint: {
            label: 'Dew Point',
            value: currently.dewPoint,
            unit: 'f',
        },
        humidity: {
            label: 'Humidity',
            value: currently.humidity,
            unit: '%',
        },
        windSpeed: {
            label: 'Wind Speed',
            value: currently.windSpeed,
            unit: 'mph',
        },
        windGust: {
            label: 'Wind Gust',
            value: currently.windGust,
            unit: 'mph',
        },
    }
}
