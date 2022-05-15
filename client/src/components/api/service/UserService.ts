import { CreateUser, CreateUserObject } from '../../interfaces/IUser'
import http from '../MyApi'

const UserService = {
    createUser: (newUser: CreateUser) => {
        return http.post('/user/', newUser)
    },

    verifyUser: (payload: CreateUserObject) => {
        return http.post(`/user/verify`, payload)
    }
}

export default UserService