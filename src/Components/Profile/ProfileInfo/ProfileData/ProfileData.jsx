import classes from "../ProfileInfo.module.css";
import {facebook} from "../../../../assets/social-icons/iconfinder_Facebook-1_669610.png";
import githubIcon from "../../../../assets/social-icons/iconfinder_social-79_2285234.png";
import instagramIcon from "../../../../assets/social-icons/iconfinder_Instagram_3709561.png";
import mainLinkIcon from "../../../../assets/social-icons/iconfinder__google_chrome_2560108.png";
import twitterIcon from "../../../../assets/social-icons/iconfinder_SocialMedia_Twitter-Outline_2959740.png";
import vkIcon from "../../../../assets/social-icons/iconfinder_vk_853340.png";
import websiteIcon from "../../../../assets/social-icons/iconfinder_SocialMedia_Website-Outline_2959741.png";
import youtubeIcon from "../../../../assets/social-icons/iconfinder_youtube-social-network-brand-logo_1820429.png";
import React from "react";
import Button from "../../../Common/Button/Button";

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

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

export default ProfileData;