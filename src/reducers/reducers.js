import {xyz_payload} from '../actions/action-types'

export function app(state = {}, action = {}) {

    switch (action.type) {
        case xyz_payload:
            return action.payload

        default:
            return state
    }
}
