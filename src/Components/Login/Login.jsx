import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormControls/FormControls";
import {required} from "../../Utils/validators/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../Common/FormControls/FormControls.module.css"
import classes from "./Login.module.css"
import Button from "../Common/Button/Button";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className={classes.loginForm} onSubmit={handleSubmit}>
                {createField("Email", "email", Input, [required])}
                {createField("Password", "password", Input, [required], {type:"password"})}
                {createField(null, "rememberMe", Input, null, {type:"checkbox"}, "Запомнить меня")}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div className={classes.loginButton}>
               <Button type='login' />
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData=>{
        props.login(formData.email, formData.password, formData.rememberMe)
    })
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
    <div className={classes.login}>
        <h3>Войти на сайт</h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);