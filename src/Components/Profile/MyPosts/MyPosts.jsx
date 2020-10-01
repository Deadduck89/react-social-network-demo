import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return <div className={classes.content}>
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' likesCount='15'/>
                <Post message="It's my first post" likesCount='20'/>
            </div>
        </div>
    </div>
}

export default MyPosts