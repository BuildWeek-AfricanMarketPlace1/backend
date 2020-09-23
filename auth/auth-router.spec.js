const { expectCt } = require('helmet')
const request = require('supertest')
const server = require('../api/server')
const db = require('../data/dbConfig')

const testRegister = {
    email: 'test@email.com',
    password: 'password'
}

const testLogin = {
    email: 'test@email.com',
    password: 'password'
}
describe('/api/auth', () => {
    describe('POST /register', () => {
        beforeEach(async () => {
            await db('users').truncate()
        })
        it('gets status 201 after registering new user', async () => {
            const res = await request(server)
                .post('/api/auth/register')
                .send(testRegister)
            expect(res.status).toBe(201)
        })
        it('can post a new user', async () => {
            const res = await request(server)
                .post('/api/auth/register')
                .send(testRegister)

            const test = await db('users')
            expect(test).toHaveLength(1)
        })
    })
    describe('POST /login', () => {
        it('returns status 200', async () => {
            const res = request(server)
                .post('/api/auth/login')
                .send(testLogin)
            expect(res.status).toBe(200)
        })
        it("returns a token", async () => {
            const res = await request(server)
              .post("/api/auth/login")
              .send(testLogin)
      
            expect(res.body).toMatchObject(/token/i)
            expect(res.type).toMatch(/json/i)
          })
    })
})
