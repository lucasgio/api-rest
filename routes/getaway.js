const { Router } = require('express');
const { check } = require("express-validator");

const
    {
        getGetaway,
        postGetaway,
        showGetaway,
        deletePeripheralGetaway,
        addPeripheralToGetaway
    } = require("../controllers/getawayControllers");

const fieldValidation = require("../middleware/field-validation");
const { checkIp, checkSerialNumber, checkCountPeripheralGetaway} = require("../helpers/bd-validators");



const route = Router();

route.get('/', getGetaway );

route.post('/', [
    // Validations
    check('serial_number', 'The serial_number field is required').not().isEmpty(),
    check('readable_name', 'The readable_name field is required').not().isEmpty(),
    check('ipv4_address',  'The ipv4_address field is required').not().isEmpty(),
    check('serial_number').custom( checkSerialNumber ),
    check('ipv4_address').custom( checkIp ),
    fieldValidation,
],
    postGetaway
);

route.put('/:id',[
    check('id').custom( checkCountPeripheralGetaway ),
    fieldValidation
],addPeripheralToGetaway);

route.get('/:id', showGetaway);

route.delete('/:id', deletePeripheralGetaway);


module.exports = route;
