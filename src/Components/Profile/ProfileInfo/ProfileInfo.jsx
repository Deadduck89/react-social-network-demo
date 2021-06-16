import React, {useState} from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from '../../../assets/img/no-avatar.png'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import Button from "../../Common/Button/Button";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileDataReduxForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState( false );

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto( e.target.files[0] );
        }
    }
    const onSubmit = (formData) => {
        saveProfile( formData ).then(() => {
        setEditMode( false )})
    }
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