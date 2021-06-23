import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/logo/Android_O_Preview_Logo.png';
import {NavLink} from "react-router-dom";
import styles from "../Common/FormControls/FormControls.module.css";
import Button from "../Common/Button/Button";

const Header = (props) => {

    //Отображаем логотип. Если юзер залогинен,
    //то еще и его имя и кнопку logout, если нет,
    //то кнопку, которая редиректит на форму
    //логина

    return <header className={classes.header}>
        <img src={logo}/>
        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>
                    {props.login}
                    <Button type='logout' logout={props.logout}/>
                </div>
                : <NavLink to={'/login'}>Войти</NavLink>}
        </div>
    </header>
}

export default Header