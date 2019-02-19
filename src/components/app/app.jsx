import './app.less'
import React from 'react'
import {Desktop, Mobile} from '../../responsive'
import {connect} from 'react-redux'
import {Navbar} from '../navbar/navbar'

export const App = () => (
    <div className='app'>
        <Desktop>
            <Navbar/>
        </Desktop>
        <Mobile>
            <Navbar/>
        </Mobile>
    </div>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
