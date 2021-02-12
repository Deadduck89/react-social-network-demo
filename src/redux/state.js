

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
                {message: 'Hi!'},
                {message: 'Ti mne bil kak brat!'},
                {message: 'Tut zhop'},
            ],
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
    getState () {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0,
            avatar: 'https://clck.ru/RaH6Z'
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ' ';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage(dialogMessage) {
        let newMessage = {
            id: 5,
            message: dialogMessage
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}
window.store=store;

export default store