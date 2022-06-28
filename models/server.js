const express = require('express')
const cors = require("cors");


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.informationRoutes = '/api/information'


        // Middleware
        this.middleware();


        // App routes
        this.routes();
    }

    middleware() {
        this.app.use(cors());

        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public'));
    }


    routes() {
        this.app.use(this.informationRoutes,require('../routes/info'))
    }


    listen() {
        this.app.listen(this.port,() => {
            console.log(`Server running ${ this.port }`)
        })
    }

}


module.exports = Server;