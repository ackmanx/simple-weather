import './app.less'
import React from 'react'
import {Desktop, Mobile} from '../responsive'
import {connect} from 'react-redux'

export const App = () => (
    <div className='app'>
        <Desktop>
            {null}
        </Desktop>
        <Mobile>
            {null}
        </Mobile>
    </div>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
