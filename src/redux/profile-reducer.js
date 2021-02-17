const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 15,avatar: 'https://clck.ru/RaH6Z'},
        {id: 2, post: "It's my first post", likesCount: 20,avatar: 'https://clck.ru/RaH7G'},
    ],
    newPostText: 'it-kamasutra'
}
const profileReducer = (state = initialState,action) => {

    switch ( action.type ) {
        case ADD_POST:
            let newPost = {
                "id": 5,
                "post": state.newPostText,
                "likesCount": 0,
                "avatar": 'https://clck.ru/RaH6Z'
            }

            state.posts.push( newPost );
            state.newPostText = ' ';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postAreaText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (postText) =>
    ({type: UPDATE_NEW_POST_TEXT, postAreaText: postText})

export default profileReducer;