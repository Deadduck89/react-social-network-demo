import {authAPI, securityAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'deadduck-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'deadduck-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}
const authReducer = (state = initialState, action) => {

    switch ( action.type ) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }

}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuthUserData();
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch( setAuthUserData( id, login, email, true ) );
        }
    }
}
export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.loginUser( email, password, rememberMe, captcha );
        if (data.resultCode === 0) {
            dispatch( getAuthUserData() )
        } else {
            if (data.resultCode === 10){
                dispatch(getCaptchaUrl())}
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch( stopSubmit( "login", {_error: message} ) );
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }
}
export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logoutUser();
        if (data.resultCode === 0) {
            dispatch( setAuthUserData( null, null, null, false ) )
        }
    }
}

export default authReducer;