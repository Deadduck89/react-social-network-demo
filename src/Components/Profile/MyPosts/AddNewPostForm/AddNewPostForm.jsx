import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../Utils/validators/Validators";
import {Textarea} from "../../../Common/FormControls/FormControls";
import styles from "./AddNewPostForm.module.css"
import Button from "../../../Common/Button/Button";

const maxLength100 = maxLengthCreator( 100 );

const AddNewPostForm = (props) => {
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

const AddNewPostReduxForm = reduxForm( {form: 'profileAddNewPostForm'} )( AddNewPostForm );

export default AddNewPostReduxForm;