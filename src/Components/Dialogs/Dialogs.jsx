import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import AddMessageReduxForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(
        dialog => <DialogItem key={dialog.id}
                              name={dialog.user}
                              id={dialog.id}
                              avatar={dialog.avatar}/>
    );
    let messagesElements = state.messages.map(
        message => <Message key={message.id}
                            message={message.message}/>
    );
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>

                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;