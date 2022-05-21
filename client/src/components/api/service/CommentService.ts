import http from '../MyApi'
import { CreateComment } from '../../interfaces/IComments'

const CommentService =  {

    createComment: (newComment: {}) => {
            return http.post('/comment', newComment)
    },

    searchByKey: (messageKey: {}) => {
        return http.post('/get/comments', messageKey)
    }

}

export default CommentService