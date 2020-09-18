import React from "react";
import classes from './Profile.module.css';
const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>
        </div>
        <div>
            ava+description
        </div>
        <div>
            My Posts
        </div>
        <div>
            New Post
        </div>
        <div className={classes.posts}>
            <div className={classes.post}>
                post 1
            </div>
            <div className={classes.post}>
                post 2
            </div>
        </div>
    </div>
}

export default Profile