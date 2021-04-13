import {Field, reduxForm} from "redux-form";
import React from "react";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'} placeholder={"What's new?"}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm( {form: 'profileAddNewPostForm'} )( AddNewPostForm );

export default AddNewPostReduxForm;