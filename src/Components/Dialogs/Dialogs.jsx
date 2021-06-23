import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import AddMessageReduxForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    //Переименовываем полученные из стейта данные

    let state = props.dialogsPage;

    //Маппим массив dialogs и передаем ключ, id, имя и аватар
    //компоненту DialogItem по отдельности

    let dialogElements = state.dialogs.map(
        dialog => <DialogItem key={dialog.id}
                              name={dialog.user}
                              id={dialog.id}
                              avatar={dialog.avatar}/>
    );

    //Маппим массив сообщений, передаем каждому сообщению ключ
    //и текст для отображения в компоненте Message

    let messagesElements = state.messages.map(
        message => <Message key={message.id}
                            message={message.message}/>
    );

    //Коллбек, который мы передаем в onSubmit формы, чтобы
    //он запустил action creator из пропсов, передав ему
    //текст из формы

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    //отрисовка юзеров, сообщений и формы для новых сообщений


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;