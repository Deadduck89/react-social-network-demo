import React from "react";
import styles from "./FormControls.module.css";
import {Field} from "redux-form";

//Функция, которая определяет поведение сообщения об ошибке
//и рисует формы

function formControl(tag) {
    return ({input, meta:{touched, error}, ...props}) => {
        const hasError = touched && error
        return (
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                <div >
                    {React.createElement( tag, {...input, ...props, style: {marginTop: "5px",borderStyle: "solid",borderColor: "#ff9133",borderRadius: "3px", }} )}
                </div>
                <div>
                    {hasError && <span>{error}</span>}
                </div>
            </div>
        )
    }
}

//Создание формы с элементами textarea или input

export const Textarea = formControl( 'textarea' )

export const Input = formControl( 'input' )

//Функция для создания формы

export const createField = (placeholder, name, component, validator, props={}, text="") => {
    return <div className={styles.loginField}>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validator}
               {...props}/>
               <span>{text}</span>
    </div>
}