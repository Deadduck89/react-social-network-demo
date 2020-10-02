import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(
        dialog => <DialogItem name={dialog.user} id={dialog.id}/>
    );
    let messagesElements = props.messages.map(
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