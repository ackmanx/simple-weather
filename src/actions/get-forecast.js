import {forecast_payload, forecast_start, forecast_stop} from './action-types'

export function getForecast() {
    return async dispatch => {
        dispatch({type: forecast_start})

        const response = await fetch(`${window.api}/weather`)
        const json = await response.json()

        if (response.status !== 200) {
            return console.error('Uh oh! Request did not work', json);
        }

        dispatch({type: forecast_payload, payload: json})
        dispatch({type: forecast_stop})
    }
}
