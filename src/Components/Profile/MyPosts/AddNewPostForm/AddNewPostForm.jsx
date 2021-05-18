import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../Utils/validators/Validators";
import {Textarea} from "../../../Common/FormControls/FormControls";
import {styles} from "./AddNewPostForm.module.css"

const maxLength100 = maxLengthCreator( 100 );

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={Textarea} placeholder={"What's new?"}
                       validate={[required, maxLength100]}/>
            </div>
            <div>
                <button >Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm( {form: 'profileAddNewPostForm'} )( AddNewPostForm );

export default AddNewPostReduxForm;