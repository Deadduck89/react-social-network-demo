/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 15,avatar: 'https://clck.ru/RaH6Z'},
                {id: 2, post: "It's my first post", likesCount: 20,avatar: 'https://clck.ru/RaH7G'},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [
                {id:1, message: 'Hi!'},
                {id:2, message: 'Ti mne bil kak brat!'},
                {id:3, message: 'Tut zhop'},
            ],
            newMessageBody: "",
            dialogs: [
                {id: 1, user: 'Andrew', avatar: 'https://clck.ru/RaH6Z'},
                {id: 2, user: 'Igor', avatar: 'https://clck.ru/RQNNi' },
                {id: 3, user: 'Sergey', avatar: 'https://clck.ru/RaH7G'},
                {id: 4, user: 'Irina', avatar: 'https://clck.ru/RaH87'},
                {id: 5, user: 'Zhop', avatar: 'https://clck.ru/RhWYy'}
            ]
        },
        sidebar: {
            friends: [
                {bfavatar: 'https://clck.ru/RaH6Z' , bfriend:'Andrew' },
                {bfavatar: 'https://clck.ru/RaH7G', bfriend:'Sergey' },
                {bfavatar: 'https://clck.ru/RaH87', bfriend: 'Irina'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },    //Private

    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },  //Doesn't change state

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);

    }

}
window.store=store;



export default store*/
