const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id:1, message: 'Привет!'},
        {id:2, message: 'Как жизнь?'},
        {id:3, message: 'Пожалуй, напишу позже)'},
    ],
    dialogs: [
        {id: 1, user: 'Андрей', avatar: 'https://clck.ru/RaH6Z'},
        {id: 2, user: 'Игорь', avatar: 'https://clck.ru/RQNNi' },
        {id: 3, user: 'Сергей', avatar: 'https://clck.ru/RaH7G'},
        {id: 4, user: 'Ирина', avatar: 'https://clck.ru/RaH87'},
        {id: 5, user: 'Даша', avatar: 'https://clck.ru/RhWYy'}
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