import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized: false,
    globalError: null
}
const appReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }

}

export const initializedSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch( getAuthUserData() );
        Promise.all( [promise] )
            .then( () => {
                dispatch( initializedSuccess() );
            } )
    }
}

export default appReducer;