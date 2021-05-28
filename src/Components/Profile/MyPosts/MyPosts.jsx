import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';
import AddNewPostReduxForm from "./AddNewPostForm/AddNewPostForm";


const MyPosts = React.memo(props => {
    console.log("render")
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
            <div className={classes.postsForm}>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
        </div>
            <div className={classes.posts}>
                <h3>Мои новости</h3>
                {postElements}
            </div>
        </div>
    </div>
})

export default MyPosts