import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(
        dialog => <DialogItem name={dialog.user}
                              id={dialog.id}
                              avatar={dialog.avatar}/>
    );
    let messagesElements = props.state.messages.map(
        message => <Message message={message.message}/>
    );
    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    };

    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(messageText);
        props.dispatch(action)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <div>
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessageElement}
                        value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;