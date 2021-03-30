import * as axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "842fcf68-1b9d-4e16-a7e5-e02cbf7809e4"
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
    loadProfile(userId) {
        return instance.get( `profile/` + userId ).then( response => {
            return response.data
        } )
    },


}
export const authAPI = {
    getAuthUserData() {
        return instance.get( `auth/me` ).then( response => {
            return response.data
        } )
    }
}
