import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';
const MyPosts = () => {
    return <div className={classes.content}>
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
              <Post message='Hi, how are you?' likescount='15'/>
              <Post message="It's my first post" likescount='20'/>
            </div>
        </div>
    </div>
}

export default MyPosts