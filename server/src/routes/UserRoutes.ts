import {Express} from "express"
import UserController from '../controllers/UserController'


const UserRoutes = (server: Express) => {
   //Create
    server.post('/user/', UserController.createNewUser)

//     //Read
    server.get('/user/active', UserController.getAllUsers)

//     server.get('/user/name/:name', UserController.getUserByName)
    server.get('/user/:id', UserController.getUserById)
//
    //Update
     server.put('/user/:id', UserController.updateUserById)
//
//     Delete
    server.delete('/user/:id', UserController.deleteUserById)
}

export default UserRoutes