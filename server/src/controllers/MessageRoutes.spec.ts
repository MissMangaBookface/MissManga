import Chai from 'chai'
import chaiHTTP from 'chai-http'
import server from "../server";
import { ReadMessage } from "../interface/IMessage";
import Logger from "../utils/Logger";
import StatusCode from "../utils/StatusCode";
import { describe, test as it } from 'mocha'

Chai.use(chaiHTTP)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
Logger.debug(randomString)

const newMessage = {
    message: "Test"
}

let createdMessage: ReadMessage

const updatedMessage = {
    message: "updated test"
}

// Create new message
const createMessage = () => {
    describe('Create message', () => {
        it('Should create a message', () => {
            return Chai.request(server)
                .post(`/message`)
                .send(newMessage)
                .then((response) => {
                    expect(response).to.have.a.status(StatusCode.CREATED)
                    expect(response.text).to.equal('Test')
                })
        })
    })
}

describe('Testing message routes', () => {
    createMessage()
})