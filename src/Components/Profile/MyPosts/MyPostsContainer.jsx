import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPostText) => {
            dispatch( addPostActionCreator(newPostText) )
        }
    }

}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer