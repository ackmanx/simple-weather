import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {app} from './reducers/reducers'

export function makeStore() {
    const initialState = {}

    return createStore(
        combineReducers({
            app,
        }),
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk),
        )
    )
}
