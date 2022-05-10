import { Express } from "express"
import MessageController from "../controllers/MessageController";

const MessageRoutes = (server: Express) => {

    server.get('/message', MessageController.getAllMessages)

    server.post('/message', MessageController.createMessage)

//    server.put('/message', MessageController.updateMessage)

//    server.delete('/message', MessageController.deleteMessage)
}

export default MessageRoutes
