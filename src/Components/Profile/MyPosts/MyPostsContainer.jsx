import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (postText) => {
            let action = updateNewPostTextActionCreator( postText );
            dispatch( action )
        },
        onAddPost: () => {
            dispatch( addPostActionCreator() )
        }
    }

}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default MyPostsContainer