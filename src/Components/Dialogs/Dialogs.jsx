import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(
        dialog => <DialogItem name={dialog.user} id={dialog.id} avatar={dialog.avatar}/>
    );
    let messagesElements = props.state.messages.map(
        message => <Message message={message.message}/>
    );
    let newMessageElement = React.createRef()
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text)
        newMessageElement.current.value = '';
    };


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogElements }
            </div>
            <div className={classes.messages}>
                { messagesElements }
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;