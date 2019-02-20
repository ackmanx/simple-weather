import './header.less'
import React from 'react'
import logo from '../../images/logo.png'

export const Header = (props) => (
    <header>
        <img src={logo} alt='logo'/>
        <h1>Simple Weather</h1>
    </header>
)
