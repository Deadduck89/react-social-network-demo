import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name='Andrew' id='1'/>
                <DialogItem name='Igor' id='2'/>
                <DialogItem name='Sergey' id='3'/>
                <DialogItem name='Irina' id='4'/>
                <DialogItem name='Zhop' id='5'/>
                <DialogItem name='Andrew' id='1'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi!'/>
                <Message message='Ti mne bil kak brat!'/>
                <Message message='Tut zhop'/>
            </div>
        </div>
    )
}

export default Dialogs;