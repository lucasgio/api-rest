const server = require('../app');
const mongoose = require('mongoose');
const supertest = require('supertest');

const {
    newGetaway,
    newPeripheral,
    Getaway,
    Peripheral
} = require('./helpers/helper');

process.env.NODE_ENV = 'testing'


beforeEach(async () => {

    await Promise.all([
        await Getaway.deleteMany({}),
        await Peripheral.deleteMany({})
    ])

    const peripheral = new Peripheral(newPeripheral)
    await peripheral.save();

    const getaway = new Getaway(newGetaway)
    await getaway.save();
})

describe('Testing getaway endpoints', () => {

    it('should get all getaways', async () => {
        await supertest(server)
            .get('/api/v1/getaway')
            .expect('Content-Type', /json/)
            .expect(200)

    });


    it('should unprocessed entry status code 422', async () => {

        await supertest(server)
            .post('/api/v1/getaway')
            .send({})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422)
    });

    it('should POST getaway', async () => {

        const newGetaway = {
            serial_number: "23564889",
            readable_name: "Mouse",
            ipv4_address: "127.1.25.25"
        }

        await supertest(server)
            .post('/api/v1/getaway')
            .send(newGetaway)
            .expect(201)
            .expect('Content-Type', /json/);
    });


    it('should store peripheral to a getaway  ', async () => {
        const getaway = await Getaway.findOne({serial_number: newGetaway.serial_number})
        await supertest(server)
            .put(`/api/v1/getaway/${getaway._id}`)
            .send(newPeripheral._id)
            .expect(201)
            .expect('Content-Type', /json/);
    });

    it('should delete peripheral to a getaway', async () => {
        const getaway = await Getaway.findOne({serial_number: newGetaway.serial_number})
        await supertest(server)
            .delete(`/api/v1/getaway/${getaway._id}`)
            .send(newPeripheral._id)
            .expect(200)
            .expect('Content-Type', /json/);
    });

})


afterAll(() => {
    mongoose.connection.close();
    server.close();
})