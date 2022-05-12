import { CreateUser } from '../../interfaces/IUser'
import http from '../MyApi'

const UserService = {
    createUser: (newUser: CreateUser) => {
        return http.post('/user/', newUser)
    }
}

export default UserService