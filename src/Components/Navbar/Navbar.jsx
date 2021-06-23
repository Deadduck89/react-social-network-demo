import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

//Компонент, отвечающий за отрисовку бокового меню
//НавЛинки на профиль, диалоги и список юзеров
//Новости, Музыка, настройка и список из трех
//лучших друзей не используются

const Navbar = (props) => {
    return (
        <div className={classes.navbar}>
        <nav className={classes.nav}>
            <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.active}>Профиль</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Диалоги</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>Пользователи</NavLink>
            </div>

            {/*Менюшки, которые должны появится в будущем*/}

            {/*<div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>Новости</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Музыка</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}>Настройки</NavLink>
            </div>*/}
        </nav>
           {/* <div>
                <BestFriendsContainer/>
            </div>*/}
        </div>
    )
}

export default Navbar
