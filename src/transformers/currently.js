export function filterWeatherData(json) {
    const filtered = {}
    const currently = json.currently

    if (!currently) return {}

    filtered.time = new Date(currently.time)

    filtered.currently = {
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

    return filtered
}
