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
            value: Math.round(currently.temperature),
            unit: 'f',
        },
        feelsLike: {
            label: 'Feels Like',
            value: Math.round(currently.apparentTemperature),
            unit: 'f',
        },
        dewPoint: {
            label: 'Dew Point',
            value: Math.round(currently.dewPoint),
            unit: 'f',
        },
        humidity: {
            label: 'Humidity',
            value: currently.humidity * 100,
            unit: '%',
        },
        windSpeed: {
            label: 'Wind Speed',
            value: Math.round(currently.windSpeed),
            unit: 'mph',
        },
        windGust: {
            label: 'Wind Gust',
            value: Math.round(currently.windGust),
            unit: 'mph',
        },
    }
}
