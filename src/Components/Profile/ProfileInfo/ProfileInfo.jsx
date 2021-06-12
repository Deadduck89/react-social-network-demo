import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import facebookIcon from '../../../assets/social-icons/iconfinder_Facebook-1_669610.png';
import githubIcon from '../../../assets/social-icons/iconfinder_social-79_2285234.png';
import instagramIcon from '../../../assets/social-icons/iconfinder_Instagram_3709561.png';
import youtubeIcon from '../../../assets/social-icons/iconfinder_youtube-social-network-brand-logo_1820429.png';
import twitterIcon from '../../../assets/social-icons/iconfinder_SocialMedia_Twitter-Outline_2959740.png';
import websiteIcon from '../../../assets/social-icons/iconfinder_SocialMedia_Website-Outline_2959741.png';
import mainLinkIcon from '../../../assets/social-icons/iconfinder__google_chrome_2560108.png';
import vkIcon from '../../../assets/social-icons/iconfinder_vk_853340.png';
import userPhoto from '../../../assets/img/no-avatar.png'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import Button from "../../Common/Button/Button";

const ProfileInfo = ({profile, status, updateStatus,isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto( e.target.files[0] );
        }
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
                    {profile.aboutMe && <div className={classes.aboutMe}>
                        Обо мне: {profile.aboutMe}
                    </div>}
                    <div className={classes.contacts}>
                        Мои контакты:
                        {profile.contacts.facebook && <div className={classes.contact}>
                            <img src={facebookIcon}/>
                            {profile.contacts.facebook}
                        </div>}
                        {profile.contacts.github && <div className={classes.contact}>
                            <img src={githubIcon}/>
                            {profile.contacts.github}
                        </div>}
                        {profile.contacts.instagram && <div className={classes.contact}>
                            <img src={instagramIcon}/>
                            {profile.contacts.instagram}
                        </div>}
                        {profile.contacts.mainLink && <div className={classes.contact}>
                            <img src={mainLinkIcon}/>
                            {profile.contacts.mainLink}
                        </div>}
                        {profile.contacts.twitter && <div className={classes.contact}>
                            <img src={twitterIcon}/>
                            {profile.contacts.twitter}
                        </div>}
                        {profile.contacts.vk && <div className={classes.contact}>
                            <img src={vkIcon}/>
                            {profile.contacts.vk}
                        </div>}
                        {profile.contacts.website && <div className={classes.contact}>
                            <img src={websiteIcon}/>
                            {profile.contacts.website}
                        </div>}
                        {profile.contacts.yotube && <div className={classes.contact}>
                            <img src={youtubeIcon}/>
                            {profile.contacts.yotube}
                        </div>}
                    </div>
                    <div className={classes.job}>
                        {profile.lookingForAJob ? 'Ищу' : 'Не ищу'} работу
                    </div>
                    <div>
                        {profile.lookingForAJobDescription}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo