const {Schema,model} = require("mongoose");


const peripheralSchema = Schema({

    uid: {
        type:Number,
        required:[true,'The UID is required'],
        unique:true
    },
    vendor: {
        type: String,
    },
    date: {
        type:String,
    },
    status: {
        type:String,
        required:[true,'The status field is required'],
    }
});

module.exports = model('Peripheral',peripheralSchema);