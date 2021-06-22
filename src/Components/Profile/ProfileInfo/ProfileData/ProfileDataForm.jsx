import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../Common/FormControls/FormControls";
import classes from "../ProfileInfo.module.css";
import styles from "../../../Common/FormControls/FormControls.module.css";
import Button from "../../../Common/Button/Button";


const ProfileDataForm =({profile, handleSubmit, error}) => {
    //Рисуем поля Имя, Обо мне, добавляем поле для отображения ошибки от сервера,
    //Мои контакты, где маппится массив контактов из профиля и для каждого
    //контакта рисуется своя форма, чекбокс Поиск работы и форма для Мои навыки,
    //кнопка Сохранить, которая запускает коллбек onSubmit
    return(
        <form onSubmit={handleSubmit}>
            <b>Имя:</b> {createField('Ваше имя',"fullName", Input, [] )}
            <b>Обо мне:</b> {createField('О себе',"aboutMe", Textarea, [] )}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div className={classes.contacts}>
                <b>Мои контакты:</b> {Object.keys(profile.contacts).map(key => {
                return(
                    <div key={key} className={classes.contact}>
                        <b>{key}: </b> {createField( key,"contacts." + key, Input, [] )}
                    </div>
                )
            })}
            </div>

            <div>
                <b>Поиск работы: </b>
                {createField('Поиск работы',"lookingForAJob", Input, [], {type: "checkbox"})}
            </div>
            <div>
                <b>Мои навыки: </b>
                {createField('Ваши навыки',"lookingForAJobDescription", Textarea, [] )}
            </div>
            <Button type="saveProfileDataChange">Сохранить</Button>
        </form>
    )
}

//Оборачиваем компонент в Redux-Form

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataReduxForm;