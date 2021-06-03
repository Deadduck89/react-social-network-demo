import React from "react";
import style from "./Button.module.css"

const Button = (props) => {

    switch (props.type ) {
        case 'login':
            return (
                <button className={style.loginButton}>Войти</button>
            )
        case 'logout':
            return (
                <button className={style.logoutButton} onClick={props.logout}>Выйти</button>
            )
        case 'send':
            return (
                <button className={style.send}>Отправить</button>
            )
        case 'follow':
            return (
                <button className={style.followButton} onClick={props.onClick} disabled={props.disabled}>Подписаться</button>
            )
        case 'unfollow':
            return (
                <button className={style.followButton} onClick={props.onClick} disabled={props.disabled}>Отписаться</button>
            )
        case 'avatarChange':
            return (
                <input className={style.avatarChange} type={'file'} onChange={props.onMainPhotoSelected}/>
            )
        default:
            return (
                <button className={style.button}>Button</button>
            )

    }
}

export default Button;