import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/logo/Android_O_Preview_Logo.png';

const Header = () => {
    return <header className={classes.header}>
        <img
            src={logo}/>
    </header>
}

export default Header