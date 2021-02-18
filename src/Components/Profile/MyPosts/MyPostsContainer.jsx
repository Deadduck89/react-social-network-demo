import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    let onPostChange = (postText) => {
        let action = updateNewPostTextActionCreator(postText);
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     onAddPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer