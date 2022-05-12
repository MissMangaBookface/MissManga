import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'
import {Request, Response} from 'express'
import {CreateUser, ReadUser} from '../interface/IUser'
import UserModel from '../models/UserModel'
import bcrypt from 'bcrypt'

const saltRounds: number = 10;
const encryptPassword = async (password: string) => {
    let newPassword: string = '';
    await bcrypt.hash(password, saltRounds).then(function (hash: any) {
        newPassword = hash;
    });
    return newPassword;
};

const createNewUser = async (req: Request, res: Response) => {


    try {
        Logger.info('createNewUser()')
        Logger.http(req.body)
        let {username, password, email}: CreateUser = req.body
        password = await encryptPassword(password)
        if (username && password && email) {
            const newObject: CreateUser = {
                username,
                password,
                email: email,
                active: false,
            }
            Logger.http(newObject)

            const user = new UserModel(newObject)
            const dbResponse = await user.save()
            Logger.http(dbResponse)
            res.status(StatusCode.CREATED).send(dbResponse)

        } else {
            Logger.error('username, password or email failed')
            res.status(StatusCode.BAD_REQUEST).send({
                message: 'Incorrect body'
            })
        }
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error while creating New User'
        })
    }
}

const updateUserById = (req: Request, res: Response) => {
    try {
        Logger.debug(req.params.id)
        Logger.debug(req.body)
        const updatedUser: CreateUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            active: req.body.active,
        }
        Logger.debug(updatedUser)

        UserModel.findByIdAndUpdate(req.params.id, updatedUser, {new: true}, (error, user: ReadUser) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error updating user'
                })
            } else {
                Logger.http(user)
                res.status(StatusCode.OK).send(user ? user : {
                    message: `User with id '${req.params.id}' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error updating user'
        })
    }
}

const getAllUsers = (req: Request, res: Response) => {
    try {

        UserModel.find({active: true}, '', (error: ErrorCallback, users: Array<ReadUser>) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting users'
                })
            } else {
                Logger.http(users)
                res.status(StatusCode.OK).send(users)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting user'
        })
    }
}

const getUserById = (req: Request, res: Response) => {
    try {
        UserModel.findById(req.params.id, (error: ErrorCallback, user: ReadUser) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting user'
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(user ? user : {
                    message: `User with id '${req.params.id}' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting user'
        })
    }
}


const deleteUserById = (req: Request, res: Response) => {
    try {
        UserModel.findByIdAndRemove(req.params.id, (error: ErrorCallback, user: ReadUser) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error deleting user'
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(
                    user ? {message: `user with id '${req.params.id}' was deleted from database!`}
                        : {message: `user with id '${req.params.ic}' not found`})
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error deleting user'
        })
    }
}


export default {
    createNewUser,
    updateUserById,
    getAllUsers,
    getUserById,
    deleteUserById
}