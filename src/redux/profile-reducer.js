const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 15,avatar: 'https://clck.ru/RaH6Z'},
        {id: 2, post: "It's my first post", likesCount: 20,avatar: 'https://clck.ru/RaH7G'},
    ],
    newPostText: 'it-kamasutra',
    profile: null
}
const profileReducer = (state = initialState,action) => {

    switch ( action.type ) {
        case ADD_POST: {
            let newPost = {
                "id": 5,
                "post": state.newPostText,
                "likesCount": 0,
                "avatar": 'https://clck.ru/RaH6Z'
            };
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ' '};
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postAreaText
            };
        }case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
        }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (postText) =>
    ({type: UPDATE_NEW_POST_TEXT, postAreaText: postText})

export default profileReducer;