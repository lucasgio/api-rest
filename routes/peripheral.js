const { Router } = require('express');
const { check } = require('express-validator');

const { postPeripheral } = require('../controllers/peripheralController');
const { checkPeripheralUID } = require("../helpers/bd-validators");
const fieldValidation = require("../middleware/field-validation");



const route = Router();


route.post('/', [
    check('uid','The field is UID required').not().isEmpty(),
    check('status','The field is status required').not().isEmpty(),
    check('uid').custom(checkPeripheralUID),
    fieldValidation
],postPeripheral);






module.exports = route;