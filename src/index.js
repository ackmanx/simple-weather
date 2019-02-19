import './index.less'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {App} from './components/App'
import {Desktop, Mobile} from './responsive'
import {makeStore} from './make-store'
import {getForecast} from './actions/get-forecast'

const store = makeStore()

store.dispatch(getForecast())

ReactDOM.render(
    <Provider store={store}>
        <Mobile>
            <div className='small-view'>
                <App/>
            </div>
        </Mobile>
        <Desktop>
            <App/>
        </Desktop>
    </Provider>,
    document.getElementById('root')
)
