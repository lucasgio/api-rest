const mongoose = require('mongoose');


const dbConnection = async () => {

    try {
        await mongoose.connect( process.env.MONGO_DB_CNN);

        console.log('DB is online')

    }catch (e) {
        console.error({ e })
        throw new Error('Error on connection database')
    }


}


module.exports = {
    dbConnection,
}