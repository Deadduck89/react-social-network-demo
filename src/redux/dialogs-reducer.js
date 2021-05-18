const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id:1, message: 'Hi!'},
        {id:2, message: 'Ti mne bil kak brat!'},
        {id:3, message: 'Dasha tut'},
    ],
    dialogs: [
        {id: 1, user: 'Andrew', avatar: 'https://clck.ru/RaH6Z'},
        {id: 2, user: 'Igor', avatar: 'https://clck.ru/RQNNi' },
        {id: 3, user: 'Sergey', avatar: 'https://clck.ru/RaH7G'},
        {id: 4, user: 'Irina', avatar: 'https://clck.ru/RaH87'},
        {id: 5, user: 'Dasha', avatar: 'https://clck.ru/RhWYy'}
    ]
}

const dialogsReducer = (state = initialState,action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {...state,
                messages: [...state.messages,{id: 4, message: body}]
            };

        default:
            return state;

    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;