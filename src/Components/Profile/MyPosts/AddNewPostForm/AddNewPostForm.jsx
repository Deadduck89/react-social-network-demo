import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../Utils/validators/Validators";
import {Textarea} from "../../../Common/FormControls/FormControls";
import styles from "./AddNewPostForm.module.css"
import Button from "../../../Common/Button/Button";

//Определяем максимальную длину записи

const maxLength100 = maxLengthCreator( 100 );

const AddNewPostForm = (props) => {

    //Отрисовываем форму для добавления постов и кнопку для отправки

    return (
        <form className={styles.addPostForm} onSubmit={props.handleSubmit}>
            <div>
                <Field className={styles.addPostField} name={'newPostText'} component={Textarea} placeholder={"Что нового?"}
                       validate={[required, maxLength100]}/>
            </div>
            <div>
                <Button type='send'/>
            </div>
        </form>
    )
}

//Оборачиваем компонент в редакс форм

const AddNewPostReduxForm = reduxForm( {form: 'profileAddNewPostForm'} )( AddNewPostForm );

export default AddNewPostReduxForm;