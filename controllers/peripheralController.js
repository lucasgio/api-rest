const { response } = require('express');


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

const getPeripheral = async (req,res = response) => {

    const [peripheral, total] = await Promise.all([
        Peripheral.find(),
        Peripheral.countDocuments()
    ])

    res.status(200).json({
        peripheral,
        message: `There are ${ total } records listed`
    });

}







module.exports = {
    postPeripheral,
    getPeripheral
}