const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
}

const dialogsReducer = (state = initialState,action) => {

    switch(action.type) {

        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: 4, message: body});
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_BODY:{
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }

        default:
            return state;

    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;