import {Field, reduxForm} from "redux-form";
import React from "react";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm( {form: 'dialogAddMessageForm'} )( AddMessageForm )

export default AddMessageReduxForm