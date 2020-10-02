import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';

const MyPosts = () => {
    let posts = [
        {id: 1, post: 'Hi, how are you?', likesCount: 15},
        {id: 2, post: "It's my first post", likesCount: 20},
    ]

    let postElements = posts.map(post => <Post message={post.post} likesCount={post.likesCount}/>)

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
                {postElements}
            </div>
        </div>
    </div>
}

export default MyPosts