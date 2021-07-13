import classes from "../ProfileInfo.module.css";
import React from "react";
import Button from "../../../Common/Button/Button";
import Contact from "./Contact/Contact";

const ProfileData = ({profile, isOwner, toEditMode}) => {
    //Отрисовываем Обо мне, если он не null, маппим массив контактов
    //для отображения каждого, Поиск работы, Мои навыки, кнопку
    //для переключения в режим редактирования, если это
    //профиль залогиненного пользователя
    return (
        <div>
            {profile.aboutMe && <div className={classes.aboutMe}>
                <b>Обо мне:</b> {profile.aboutMe}
            </div>}
            <div className={classes.contacts}>
                <b>Мои контакты:</b> {Object.keys(profile.contacts).map(key => {
                    return(
                    <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
                    )
            })}
            </div>
            <div className={classes.job}>
                <b>Поиск работы:  </b>
                 {profile.lookingForAJob ? 'Ищу' : 'Не ищу'} работу
            </div>
            <div>
                <b>Мои навыки:  </b> {profile.lookingForAJobDescription}
            </div>
            {isOwner && <Button type='profileDataChange' toEditMode={toEditMode}/>}
        </div>
    )
}

//Компонент для отрисовки контакта



export default ProfileData;