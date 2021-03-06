const server = require('../app');
const mongoose = require('mongoose');
const supertest = require('supertest');

const { newPeripheral,Peripheral } = require('./helpers/helper');



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

    it('should get all peripheral', async () => {
        await supertest(server)
            .get('/api/v1/peripheral')
            .expect(200)
            .expect('Content-Type', /json/);
    });
});



afterAll(() => {
    mongoose.connection.close();
    server.close();
})

