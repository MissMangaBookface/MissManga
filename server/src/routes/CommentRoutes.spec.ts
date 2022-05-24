import Chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'
import { ReadMessage } from "../interface/IMessage";
import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'
import { describe, it as test } from "mocha";

Chai.should()
Chai.use(chaiHttp)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
Logger.debug(randomString)

const newComment = {
    text: "test",
    name: "Carin",
    messagekey: "1"
}

const updatedComment = {
    text: "updated test",
    name: "Carin",
    messagekey: "1"
}

const commentMessageKey = {
    messagekey: "1"
}

let global_id = ''

const createComment = () => {
    describe('Create message', () => {
        it('should create new message', (done) => {
            Chai.request(server)
                .post(`/comment/`)
                .send(newComment)
                .then((response) => {
                    expect(response).to.have.a.status(StatusCode.CREATED)
                    expect(response.body.text).to.equal('test')
                    expect(response.body.name).to.equal('Carin')

                    global_id = response.body._id

                    done()
                })
        })
    })
}

const getCommentWithKey = () => {
    describe('Testing to get an existing message using id', () => {
        test('Should return an array of messages', (done) => {
            Chai.request(server)
                .post('/get/comments/')
                .send(commentMessageKey)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)

                    const body = response.body[0]
                    expect(body).to.be.an('object')
                    expect(body.text).to.equal('test')
                    expect(body.name).to.equal('Carin')

                    done()
                })
        })
    })
}

const updateCommentById = () => {
    describe('Testing to update message using id', () => {
        test('Should update message', (done) => {
            Chai.request(server)
                .put(`/update/comment/${global_id}`)
                .send(updatedComment)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)

                    const body = response.body
                    expect(body.text).to.equal('updated test')
                    expect(body.name).to.equal('Carin')

                    done()
                })
        })
    })
}

const deleteCommentById = () => {
    describe('Testing to delete a message using id', () => {
        test('Should delete the message', (done) => {
            Chai.request(server)
                .delete(`/delete/comment/${global_id}`)
                .end((error, response) => {
                    expect(response.status).to.equal(StatusCode.OK)
                    expect(response.body.message).to.equal(
                        `Comment with id: ${ global_id } was deleted from database!`
                    )

                    done()
                })
        })
    })
}

describe('Testing CommentRoutes', () => {
    createComment()
    getCommentWithKey()
    updateCommentById()
    deleteCommentById()
})