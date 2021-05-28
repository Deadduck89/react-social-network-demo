import React from "react";
import styles from "./FormControls.module.css";
import {Field} from "redux-form";

function formControl(tag) {
    return ({input, meta:{touched, error}, ...props}) => {
        const hasError = touched && error
        return (
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                <div className={styles.form}>
                    {React.createElement( tag, {...input, ...props} )}
                </div>
                <div>
                    {hasError && <span>{error}</span>}
                </div>
            </div>
        )
    }
}

export const Textarea = formControl( 'textarea' )

export const Input = formControl( 'input' )

export const createField = (placeholder, name, component, validator, props={}, text="") => {
    return <div className={styles.loginField}>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validator}
               {...props}/>{text}
    </div>
}