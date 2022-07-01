const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {

    try {
        if (process.env.NODE_ENV !== 'testing') {
            await mongoose.connect(process.env.MONGO_DB_CNN);
        } else {
            await mongoose.connect(process.env.MONGO_DB_CNN_TEST);
        }


        console.log('DB is online');
    } catch (e) {
        console.error({e})
        throw new Error(`Error on DB connection ${e}`)
    }


}


module.exports = {
    dbConnection,
}