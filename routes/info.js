const { Router } = require('express');
const
    {
        getInformation,
        postInformation,
        putInformation,
        deleteInformation
    } = require("../controllers/information");


const route = Router();


route.get('/', getInformation );

route.post('/', postInformation);

route.put('/:id', putInformation);

route.delete('/:id', deleteInformation);


module.exports = route;
