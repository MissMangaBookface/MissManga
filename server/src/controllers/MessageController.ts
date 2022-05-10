import Logger from '../utils/Logger'
import StatusCode from "../utils/StatusCode";
import { Request, Response } from 'express'
import MessageModel from "../models/MessageModel";
import { CreateMessage, ReadMessage } from "../interface/IMessage";

const createMessage = async (req: Request, res: Response) => {
    try {
        Logger.info('createMessage()')
        Logger.http(req.body)
        const {message} = req.body
        if (message) {
            const newObject: CreateMessage = {
                message: message
            }
            Logger.http(newObject)

            const newMessage = new MessageModel(newObject)
            const dbResponse = await newMessage.save()
            Logger.http(dbResponse)
            res.status(StatusCode.CREATED).send(dbResponse)

        } else {
            Logger.error('message failed')
            res.status(StatusCode.BAD_REQUEST).send({
                message: 'Incorrect body'
            })
        }
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error while creating message'
        })
    }
}

const getAllMessages = (req: Request, res: Response) => {
    try {
        // UserModel.find({name: req.body.name, skoStorlek: req.body.skoStorlek} , '', (error: ErrorCallback, users: Array<ReadUser>) => {
        MessageModel.find({} , '', (error: ErrorCallback, messages: Array<ReadMessage>) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting messages'
                })
            } else {
                Logger.http(messages)
                res.status(StatusCode.OK).send(messages)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting messages'
        })
    }
}



export default {
    createMessage,
    getAllMessages
}