import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

//Получаем из стейта данные постов и текст для добавления нового поста

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}

//action для добавления нового поста

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPostText) => {
            dispatch( addPostActionCreator(newPostText) )
        }
    }

}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer