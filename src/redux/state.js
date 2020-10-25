let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you?', likesCount: 15},
            {id: 2, post: "It's my first post", likesCount: 20},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'Ti mne bil kak brat!'},
            {id: 3, message: 'Tut zhop'},
        ],
        dialogs: [
            {id: 1, user: 'Andrew'},
            {id: 2, user: 'Igor'},
            {id: 3, user: 'Sergey'},
            {id: 4, user: 'Irina'},
            {id: 5, user: 'Zhop'}
        ]
    },
    navbar: {
        friends: [
            {id:1 ,avatar: 'https://clck.ru/RaH6Z' , bfriend:'Andrew' },
            {id:2 ,avatar: 'https://clck.ru/RaH7G', bfriend:'Sergey' },
            {id:3 ,avatar: 'https://clck.ru/RaH87', bfriend: 'Irina'}
        ]
    }
}

export default state