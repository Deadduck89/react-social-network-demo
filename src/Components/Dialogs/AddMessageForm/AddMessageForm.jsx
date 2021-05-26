import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../Utils/validators/Validators";
import styles from "./addMessageForm.module.css"

const maxLength100 = maxLengthCreator( 100 );

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength100]}/>
            </div>
            <div>
                <button className={styles.sendButton}>Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm( {form: 'dialogAddMessageForm'} )( AddMessageForm )

export default AddMessageReduxForm