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
              <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    </div>
}

export default MyPosts