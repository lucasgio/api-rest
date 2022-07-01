const server = require('../app');
const mongoose = require('mongoose');
const supertest = require('supertest');

const { newPeripheral,Peripheral } = require('./helpers/helper');

process.env.NODE_ENV='testing'


beforeEach(async () => {
    await Peripheral.deleteMany({});
});


describe('Testing peripheral endpoint', function () {

    it('should be store a peripheral on db', async () => {
        await supertest(server)
            .post('/api/v1/peripheral')
            .send(newPeripheral)
            .expect(201)
            .expect('Content-Type', /json/);
    });
});


afterAll(() => {
    mongoose.connection.close();
    server.close();
})

