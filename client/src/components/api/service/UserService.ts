import { CreateUser } from '../../interfaces/IUser'
import http from '../MyApi'

const UserService = {
    createUser: (newUser: CreateUser) => {
        return http.post('/user/', newUser)
    },

    verifyUser: (payload: any) => {
        return http.get(`/user/verify`, payload)
    }
}

export default UserService