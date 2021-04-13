import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';
import AddNewPostReduxForm from "./AddNewPostForm/AddNewPostForm";


const MyPosts = (props) => {
    let postElements = props.posts.map(
        post => <Post message={post.post}
                      likesCount={post.likesCount}
                      avatar={post.avatar}/>
    )

    let onAddPost = (values) => {
        props.onAddPost(values.newPostText);
    };

    return <div className={classes.content}>
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    </div>
}

export default MyPosts