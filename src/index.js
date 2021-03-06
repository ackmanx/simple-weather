import './index.less'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedApp} from './components/app/app'
import {Desktop, Mobile} from './responsive'
import {makeStore} from './make-store'
import {getForecast} from './actions/get-forecast'

const store = makeStore()

store.dispatch(getForecast())

ReactDOM.render(
    <Provider store={store}>
        <Mobile>
            <div className='small-view'>
                <ConnectedApp/>
            </div>
        </Mobile>
        <Desktop>
            <ConnectedApp/>
        </Desktop>
    </Provider>,
    document.getElementById('root')
)
