import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormControls/FormControls";
import {required} from "../../Utils/validators/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../Common/FormControls/FormControls.module.css"
import classes from "./Login.module.css"
import Button from "../Common/Button/Button";

//Форма логина, содержащая email, пароль и чекбокс для запоминания юзера

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={classes.loginForm} onSubmit={handleSubmit}>
                {createField("Email", "email", Input, [required])}
                {createField("Password", "password", Input, [required], {type:"password"})}
                {createField(null, "rememberMe", Input, null, {type:"checkbox"}, "Запомнить меня")}
            {captchaUrl && <img src={captchaUrl} className={classes.captcha} alt="captcha"/>}
            {captchaUrl && createField("Symbols from image", "captcha", Input, [required])}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div className={classes.loginButton}>
               <Button type='login' />
            </div>
        </form>
    )
}

//Обертка формы в Редакс Форм

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)


const Login = (props) => {
    //onSubmit запускает санку login из auth-reducer, которая отправляет
    //email, пароль и "Запомнить меня" на сервер
    const onSubmit = (formData=>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    })
    //Проверка, залогинен ли пользователь, и редирект на профиль,
    //если залогинен
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    //Отрисовка заголовка и формы
    return (
    <div className={classes.login}>
        <h3>Войти на сайт</h3>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
    )
}
//Из стейта забираем состояние логина пользователя
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
//В пропсы компоненте Login отдаем стейт и санку login
export default connect(mapStateToProps, {login})(Login);