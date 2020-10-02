import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, user: 'Andrew'},
        {id: 2, user: 'Igor'},
        {id: 3, user: 'Sergey'},
        {id: 4, user: 'Irina'},
        {id: 5, user: 'Zhop'}
    ]
    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Ti mne bil kak brat!'},
        {id: 3, message: 'Tut zhop'},
    ]
    let dialogElements = dialogs.map(
        dialog => <DialogItem name={dialog.user} id={dialog.id}/>
    );
    let messagesElements = messages.map(
        message => <Message message={message.message}/>
    );
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;