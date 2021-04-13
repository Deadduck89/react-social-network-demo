import React from "react";
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../API/API";
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../../Utils/validators/Validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"}  component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field   name={"rememberMe"} type={"checkbox"} component={Input}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData=>{
        console.log(formData)
        //authAPI.loginUser(formData.login, formData.login).then( data =>{
        //if (data.resultCode == 0) {
        //    console.log('Success'+ data.data.userId)
       // }
    //})
    })
    return (
    <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    )
}


export default Login;