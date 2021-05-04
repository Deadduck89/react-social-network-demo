import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import facebookIcon from '../../../assets/social-icons/iconfinder_Facebook-1_669610.png';
import githubIcon from '../../../assets/social-icons/iconfinder_social-79_2285234.png';
import instagramIcon from '../../../assets/social-icons/iconfinder_Instagram_3709561.png';
import youtubeIcon from '../../../assets/social-icons/iconfinder_youtube-social-network-brand-logo_1820429.png';
import twitterIcon from '../../../assets/social-icons/iconfinder_SocialMedia_Twitter-Outline_2959740.png';
import websiteIcon from '../../../assets/social-icons/iconfinder_SocialMedia_Website-Outline_2959741.png';
import mainLinkIcon from '../../../assets/social-icons/iconfinder__google_chrome_2560108.png';
import vkIcon from '../../../assets/social-icons/iconfinder_vk_853340.png';
import userPhoto from '../../../assets/img/no-avatar.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.mainimg}>
                <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>
            </div>
            <div className={classes.descriptionBlock}>
                {profile.photos.large ?
                <img src={profile.photos.large} className={classes.avatar}/>
                : <img src={userPhoto} className={classes.avatar}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={classes.fullName}>
                    Меня зовут {profile.fullName}
                </div>
                <div className={classes.aboutMe}>
                    Обо мне: {profile.aboutMe}
                </div>
                <div className={classes.contacts}>
                    Мои контакты:
                    <div className={classes.contact}>
                        <img src={facebookIcon}/>
                        {profile.contacts.facebook}
                    </div>
                    <div className={classes.contact}>
                        <img src={githubIcon}/>
                        {profile.contacts.github}
                    </div>
                    <div className={classes.contact}>
                        <img src={instagramIcon}/>
                        {profile.contacts.instagram}
                    </div>
                    <div className={classes.contact}>
                        <img src={mainLinkIcon}/>
                        {profile.contacts.mainLink}
                    </div>
                    <div className={classes.contact}>
                        <img src={twitterIcon}/>
                        {profile.contacts.twitter}
                    </div>
                    <div className={classes.contact}>
                        <img src={vkIcon}/>
                        {profile.contacts.vk}
                    </div>
                    <div className={classes.contact}>
                        <img src={websiteIcon}/>
                        {profile.contacts.website}
                    </div>
                    <div className={classes.contact}>
                        <img src={youtubeIcon}/>
                        {profile.contacts.yotube}
                    </div>
                </div>
                <div>
                    {profile.lookingForAJob ? 'Ищу' : 'Не ищу'} работу
                </div>
                <div>
                    {profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo