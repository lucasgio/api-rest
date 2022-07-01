const Peripheral = require('../../models/peripheral');
const Getaway = require('../../models/getaway');


const newPeripheral = {
    uid: "2155",
    vendor:"IBM",
    date:"02/02/2020",
    status:true
}

const newGetaway = {
    serial_number:"365478955874",
    readable_name:"Mouse",
    ipv4_address :"125.698.658.6"
}




module.exports = {
    newPeripheral,
    newGetaway,

    Peripheral,
    Getaway

}