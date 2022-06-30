const {response, request} = require('express');
const {validationResult} = require("express-validator");

const Getaway = require('../models/getaway');




const getGetaway = async (req = request, res = response) => {
    //const {q,} = req.query;

    const [getaways, total] = await Promise.all([
        Getaway.find().populate('peripheral'),
        Getaway.countDocuments()
    ])

    res.status(200).json({
        getaways,
        message: `There are ${ total } records listed`
    });
}


const postGetaway = async (req, res = response) => {

    const body = req.body;
    const getaway = new Getaway(body);
    await getaway.save();


    res.status(201).json({
        getaway,
        message: 'The getaway has been stored successfully'
    });
}

const showGetaway = async (req, res = response) => {

    const getaway = req.params.id

    const response = await Getaway.findOne({_id: getaway}).populate('peripheral')


    res.status(200).json({
        response,
        message:'Listed getaway done!'
    });
}

const deletePeripheralGetaway = async (req = request, res = response) => {
    const {id} = req.params;

    const response = await Getaway.findByIdAndUpdate({_id: id}, {
        $pull: {
            peripheral: req.body.peripheral
        }
    }, {new: true});

    res.status(200).json({
        response,
        message:`We deleted peripheral devices from ${id} successfully`
    });
}


const addPeripheralToGetaway = async (req = request, res = response) => {
    const id = req.params.id;

    const response = await Getaway.findByIdAndUpdate({_id: id}, {
        $push: {
            peripheral: req.body.peripheral
        }
    }, {new: true})


    res.status(201).json({
        response,
        message:`Peripheral devices added successfully`
    });
}


module.exports = {
    getGetaway,
    postGetaway,
    showGetaway,
    deletePeripheralGetaway,
    addPeripheralToGetaway
}