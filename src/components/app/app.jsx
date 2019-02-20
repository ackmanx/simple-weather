import './app.less'
import React from 'react'
import {Desktop, Mobile} from '../../responsive'
import {connect} from 'react-redux'
import {ConnectedCurrently} from '../currently/currently'

export const App = () => (
    <div className='app'>
        <Desktop>
            <ConnectedCurrently/>
        </Desktop>
        <Mobile>
            <ConnectedCurrently/>
        </Mobile>
    </div>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
