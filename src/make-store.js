import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {app} from './reducers/app'
import {currently} from './reducers/currently'
import {daily} from './reducers/daily'

export function makeStore() {
    const initialState = {}

    return createStore(
        combineReducers({
            app,
            currently,
            daily,
        }),
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk),
        )
    )
}
