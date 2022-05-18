import { CreateUser, CreateUserObject } from '../../interfaces/IUser'
import http from '../MyApi'

const UserService = {
    createUser: (newUser: CreateUser) => {
        return http.post('/user/', newUser)
    },

    verifyUser: (payload: CreateUserObject) => {
        return http.post(`/user/verify`, payload)
    },

    getOnlineUsers: () => {
        return http.post('/user/active')
    },

    changeActive: (id: string, active: {}) => {
        return http.post(`/active/${id}`, active)
    },

    updateUserById: (id: string, updateUser: {}) => {
        return http.put(`/user/${id}`, updateUser)
    }

}

export default UserService