import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import {sendMessageCreator,updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {

    let state = store.getState().dialogsPage

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
    }


    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
    />}}
    </StoreContext.Consumer>
}
let f1 = () => {
    return {

    }
}
let f2 = () => {
    return {

    }

}
const SuperDialogsContainer = connect(f1, f2)(Dialogs)
export default DialogsContainer;