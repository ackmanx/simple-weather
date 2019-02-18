import './index.less'
import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './components/App'
import {Desktop, Mobile} from './responsive'

ReactDOM.render(
    <>
        <Mobile>
            <div className='small-view'>
                <App/>
            </div>
        </Mobile>
        <Desktop>
            <App/>
        </Desktop>
    </>,
    document.getElementById('root')
)
