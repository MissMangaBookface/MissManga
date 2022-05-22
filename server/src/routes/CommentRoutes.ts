import {Express} from "express"
import CommentController from "../controllers/CommentController"

const CommentRoutes = (server: Express) => {

    //CREATE
    server.post('/comment/', CommentController.createNewComment)

    //READ
    server.post('/get/comments/', CommentController.searchByKey)

    //UPDATE

    //DELETE
    server.delete('/delete/comment/:id', CommentController.deleteComment)
}

export default CommentRoutes