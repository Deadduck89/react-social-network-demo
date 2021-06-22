import React, {useState} from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from '../../../assets/img/no-avatar.png'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import Button from "../../Common/Button/Button";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataReduxForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    //Используем хук useState для переключения профиля в режим редактирования

    let [editMode, setEditMode] = useState( false );

    //Крутилка на время, пока сервер не вернул данные профиля

    if (!profile) {
        return <Preloader/>
    }

    //Коллбэк для передачи фотографии профиля на сервер

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto( e.target.files[0] );
        }
    }

    //Коллбек для передачи данных профиля из форм на сервер и отключения режима редактирования
    //после ответа

    const onSubmit = (formData) => {
        saveProfile( formData ).then(() => {
        setEditMode( false )})
    }

    //Отрисовываем аватар с сервера или стоковую картинку, если сервер не вернул фото,
    //если это профиль залогиненного пользователя, отображаем кнопку Поменять аватар,
    //Статус, в зависимости от режима редактирования - Форму данных или форму для
    //их изменения
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto} className={classes.avatar}/>
                    {isOwner && <Button type='avatarChange' onMainPhotoSelected={onMainPhotoSelected}/>}
                </div>
                <div className={classes.description}>
                    <div className={classes.fullName}>
                        {profile.fullName}
                    </div>
                    <div className={classes.status}>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    </div>
                    {editMode ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                        <ProfileData toEditMode={() => {
                            setEditMode( true )
                        }} profile={profile} isOwner={isOwner}/>}
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo