const express = require('express')
const cors = require("cors");
const { dbConnection } = require("./database/config");


// Init Express
const app = express();

// Middleware
app.use( cors() );
app.use( express.json() );
app.use( express.static('public') );


// Routes Endpoint
const getawayEndPoint = '/api/v1/getaway';
const peripheralEndPoint = '/api/v1/peripheral';


// Connection to Mongo Atlas
const connectionMongo = async () => {
    await dbConnection()
}



// Routes
app.use( getawayEndPoint,require('./routes/getaway') );
app.use( peripheralEndPoint,require('./routes/peripheral') );

connectionMongo();

const server = app.listen( process.env.PORT, () => {
    console.log(`Server running on ${ process.env.PORT }`)
});


module.exports = server;