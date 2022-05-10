import http from '../MyApi'
import { CreateMessage } from '../../interfaces/IMessage'

const MessageService = {

    createMessage: (newMessage: CreateMessage) => {
        return http.post('/message', newMessage)
    },

    getAllMessages: () => {
        return http.get('/message')
    }

}

export default MessageService