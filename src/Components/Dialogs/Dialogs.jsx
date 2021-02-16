import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {sendMessageCreator,updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogElements = state.dialogs.map(
        dialog => <DialogItem name={dialog.user}
                              id={dialog.id}
                              avatar={dialog.avatar}/>
    );
    let messagesElements = state.messages.map(
        message => <Message message={message.message}/>
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;