import './app.less'
import React from 'react'
import {Desktop, Mobile} from '../../responsive'
import {connect} from 'react-redux'
import {ConnectedCurrently} from '../currently/currently'
import {ConnectedDaily} from '../daily/daily'

export const App = () => (
    <div className='app'>
        <Desktop>
            <ConnectedCurrently/>
            <ConnectedDaily/>
        </Desktop>
        <Mobile>
            <ConnectedCurrently/>
            <ConnectedDaily/>
        </Mobile>
    </div>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
