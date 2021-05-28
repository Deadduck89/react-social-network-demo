
let initialState = {
    friends: [
        {id:1, bfavatar: 'https://clck.ru/RaH6Z' , bfriend:'Андрей' },
        {id: 2,bfavatar: 'https://clck.ru/RaH7G', bfriend:'Сергей' },
        {id:3, bfavatar: 'https://clck.ru/RaH87', bfriend: 'Ирина'}
    ]
}

const sidebarReducer = (state = initialState) => {
    return state;
}

export default sidebarReducer;