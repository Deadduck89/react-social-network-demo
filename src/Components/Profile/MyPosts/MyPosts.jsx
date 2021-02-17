import React from "react";
import Post from "./Post/Post.jsx";
import classes from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postElements = props.post.map(
        post => <Post message={post.post}
                      likesCount={post.likesCount}
                      avatar={post.avatar}/>
    )
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(postText);
        props.dispatch(action)
    }

    return <div className={classes.content}>
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    </div>
}

export default MyPosts