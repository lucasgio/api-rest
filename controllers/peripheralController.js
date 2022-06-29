const { response, request } = require('express');


const Peripheral = require('../models/peripheral');

const postPeripheral = async (req, res = response) => {

    const body = req.body;
    const peripheral = new Peripheral( body );
    await peripheral.save();


    res.status(201).json({
        peripheral,
        message: 'Peripheral is added successfully'
    });
}






module.exports = {
    postPeripheral,
}