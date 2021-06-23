import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../Utils/validators/Validators";
import styles from "./addMessageForm.module.css"
import Button from "../../Common/Button/Button";

//Определяем максимальную длину сообщения в 100 для валидатора

const maxLength100 = maxLengthCreator( 100 );

//Рисуем форму с одной Textarea и кнопкой

const AddMessageForm = (props) => {
    return (
        <form className={styles.addMessageForm} onSubmit={props.handleSubmit}>
            <div>
                <Field className={styles.addMessageField} component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength100]}/>
            </div>
            <div>
                <Button type='send'/>
            </div>
        </form>
    )
}

//Оборачиваем форму в Редакс Форм


const AddMessageReduxForm = reduxForm( {form: 'dialogAddMessageForm'} )( AddMessageForm )

export default AddMessageReduxForm