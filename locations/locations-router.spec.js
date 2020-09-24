const request = require('supertest')
const server = require('../api/server')
const db = require('../data/dbConfig')

describe('locations-router', () => {
    describe('POST /api/locations', () => {
        beforeEach(async () => {
            await db('locations').truncate()
        })
        it('should create a new location', async () => {
            const res = await request(server)
                .post('/api/locations')
                .send({ locname: 'South Africa' })
            const resp = await db('locations')
            expect(resp).toHaveLength(1)
            expect(resp[0]).toEqual({"id": 1, "locname": "South Africa"})
        })
    })
    describe('DELETE /api/locations/:id', () => {
        it('should remove location from database', async () => {
            const res = await request(server)
                .delete('/api/locations/1')
            const resp = await db('locations')
            expect(resp).toHaveLength(0)
        })
    })
})