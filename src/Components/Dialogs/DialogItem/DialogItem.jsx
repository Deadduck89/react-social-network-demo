import React from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


//Компонент для отрисовки списка юзеров в диалогах
//НавЛинк для красоты, чтобы подчеркивать юзеров
// "как живых"

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <img src={props.avatar}/>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;