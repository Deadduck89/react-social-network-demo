import {profileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

let initialState = {
    posts: [
        {id: 1, post: 'Привет, как вы?', likesCount: 15, avatar: 'https://clck.ru/RaH6Z'},
        {id: 2, post: "Это мой первый пост", likesCount: 20, avatar: 'https://clck.ru/RaH6Z'},
    ],
    profile: null,
    status: ""
}
const profileReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case ADD_POST: {
            let newPost = {
                "id": 5,
                "post": action.newPostText,
                "likesCount": 0,
                "avatar": 'https://clck.ru/RaH6Z'
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter( p => p.id != action.postId )
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos:action.photos}
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile( userId )
        dispatch( setUserProfile( data ) );
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus( userId )
        dispatch( setStatus( data ) );
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus( status )
        if (data.resultCode === 0) {
            dispatch( setStatus( status ) );
        }
    }
}
    export const savePhoto = (file) => {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto( file )
        if (data.resultCode === 0) {
            dispatch( savePhotoSuccess( data.data.photos ) );
        }
    }
}

export default profileReducer;