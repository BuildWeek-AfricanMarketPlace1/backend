const request = require('supertest')
const server = require('./server')

describe('server.js', () => {
    describe('index route', () => {
        it('should return status code 200', async () => {
            const expectedStatusCode = 200
            const response = await request(server).get('/')
            expect(response.status).toEqual(expectedStatusCode)
        })
        it('should return the correct JSON object', async () => {
            const expectedBody = { api: 'up' }
            const response = await request(server).get('/')

            expect(response.body).toEqual(expectedBody)
        })
        it('should return a JSON object', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.type).toEqual('application/json')
                })
        })
    })
})