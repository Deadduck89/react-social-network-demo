import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/logo/Android_O_Preview_Logo.png';
import {NavLink} from "react-router-dom";
import styles from "../Common/FormControls/FormControls.module.css";

const Header = (props) => {
    return <header className={classes.header}>
        <img src={logo}/>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login}
                <button className={styles.logoutButton} onClick={props.logout}>Logout</button>
            </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header