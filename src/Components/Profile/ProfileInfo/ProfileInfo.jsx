import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.mainimg}>
                <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo