import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    let nav = props.user ?
        <div>
        <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        </div>
        :
        <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>

        </div>;

    return (
        <div className='NavBar'>
        {nav}
        </div>
    );
};

export default NavBar