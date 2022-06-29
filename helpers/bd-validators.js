const Getaway = require('../models/getaway');
const Peripheral = require('../models/peripheral');


const checkSerialNumber = async ( serial_number= '' ) => {

    const response = await Getaway.findOne({ serial_number });
    if ( response ) {
        throw new Error(`The ${ serial_number } already exists on system`);
    }

}


const checkIp = async ( ipv4_address ) => {
    const response = await Getaway.findOne({ ipv4_address });

    if ( response ) {
        throw new Error(`The ${ ipv4_address } already exists on system`);
    }

}


const checkPeripheralUID = async ( uid ) => {

    const response = await Peripheral.findOne( { uid } );
    if ( response ) {
        throw new Error(`The ${ uid } already exists on system`);
    }
}

const checkCountPeripheralGetaway = async ( idGetaway ) => {
    const response = await Getaway.findOne( { _id:idGetaway } );

    if ( response.peripheral.length > 10 ) {
        throw new Error(`The ${idGetaway } getaway no longer supports peripheral device`)
    }


}



module.exports = {
    checkSerialNumber,
    checkIp,
    checkPeripheralUID,
    checkCountPeripheralGetaway
}