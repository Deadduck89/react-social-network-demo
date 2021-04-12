import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";


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


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'input'} placeholder={"What's new?"}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm( {form: 'profileAddNewPostForm'} )( AddNewPostForm );
export default MyPosts