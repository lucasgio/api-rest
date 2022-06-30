const express = require('express')
const cors = require("cors");
const {dbConnection} = require("../database/config");


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.informationRoutes = '/api/v1/information'
        this.getawayRoutes = '/api/v1/getaway'
        this.peripheralRoutes = '/api/v1/peripheral'

        this.DBConnection();

        // Middleware
        this.middleware();


        // App routes
        this.routes();
    }


    async DBConnection() {
        await dbConnection();
    }

    middleware() {
        this.app.use(cors());

        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public'));
    }


    routes() {
        this.app.use(this.informationRoutes,require('../routes/info'))
        this.app.use(this.getawayRoutes,require('../routes/getaway'))
        this.app.use(this.peripheralRoutes,require('../routes/peripheral'))
    }


    listen() {
        this.app.listen(this.port,() => {
            console.log(`Server running ${ this.port }`)
        })
    }

}


module.exports = Server;