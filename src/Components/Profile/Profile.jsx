import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
const Profile = () => {
    return <div className={classes.content}>
        <div className={classes.mainimg}>
            <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts />
    </div>
}

export default Profile