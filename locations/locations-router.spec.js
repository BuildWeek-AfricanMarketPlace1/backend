const { expectCt } = require('helmet')
const request = require('supertest')
const server = require('../api/server')
const db = require('../data/dbConfig')

describe('locations-router', () => {
    describe('POST /api/locations', () => {
        it('should create a new location', async () => {
            const res =  await request(server)
                .post('/api/locations')
                .send({locname: 'South Africa'})
              const resp = await db('locations')  
        console.log(resp)
        expect(resp).toHaveLength(8)
            })
    })
})