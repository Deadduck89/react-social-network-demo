import * as axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "f396886d-46ad-4f04-880f-0e94c0126ca3"
        }
    }
);

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}` )
            .then( response => {
                return response.data;
            } );
    },

    unfollow(id) {
        return instance.delete( `follow/${id}` ).then( response => {
            return response.data
        } )
    },
    follow(id) {
        return instance.post( `follow/${id}` ).then( response => {
            return response.data
        } )
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.loadProfile(userId)
    },


}
export const profileAPI = {
    getProfile(userId) {
        return instance.get( `profile/` + userId ).then( response => {
            return response.data
        } )
    },
    getStatus(userId) {
        return instance.get( `profile/status/` + userId ).then( response => {
            return response.data
        } )
    },
    updateStatus(status) {
        return instance.put( `profile/status`, {status: status}).then( response => {
            return response.data
        } )
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put( `profile/photo`, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
        }}).then( response => {
            return response.data
        } )
    },
    saveProfile(profile) {
        return instance.put( `profile`, profile).then( response => {
            return response.data
        } )
    }
}
export const authAPI = {
    getAuthUserData() {
        return instance.get( `auth/me` ).then( response => {
            return response.data
        } )
    },
    loginUser(email, password, rememberMe=false, captcha = null) {
        return instance.post( `auth/login`, {email, password, rememberMe, captcha}).then( response => {
            return response.data
        } )
    },
    logoutUser() {
        return instance.delete( `auth/login` ).then( response => {
            return response.data
        } )
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url').then( response => {
            return response.data
        } );
    }
}