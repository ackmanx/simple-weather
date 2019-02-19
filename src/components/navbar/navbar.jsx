import './navbar.less'
import React from 'react'
import {connect} from 'react-redux'

export const Navbar = () => (
    <div className='navbar'>
        <button>Currently</button>
        <button>Hourly</button>
        <button>Daily</button>
    </div>
)

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar)
