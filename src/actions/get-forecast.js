import {xyz_payload, xyz_start, xyz_stop} from './action-types'

export function getForecast() {
    return dispatch => {
        dispatch({type: xyz_start})

        fetch(`${window.api}/weather`)
            .then(res => {
                if (res.status !== 200) {
                    console.error('Uh oh. The webtask did not work!')
                    return
                }

                res.json().then(json => dispatch({type: xyz_payload, payload: json}))
            })
            .catch(e => console.error(e))
            .finally(() => dispatch({type: xyz_stop}))
    }
}
