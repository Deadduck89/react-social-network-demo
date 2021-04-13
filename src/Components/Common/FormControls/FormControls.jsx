import React from "react";
import styles from "./FormControls.module.css";

function formControl(tag) {
    return ({input, meta,child, ...props}) => {
        const hasError = meta.touched && meta.error
        return (
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                <div>
                    {React.createElement(tag, {...input, ...props})}
                </div>
                <div>
                    { hasError && <span>{meta.error}</span>}
                </div>
            </div>
        )
    }
}

export const Textarea = formControl('textarea')

export const Input = formControl('input')