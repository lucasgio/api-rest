const {response, request } = require('express');

const getInformation = (req = request, res = response) => {
    const { q,api_key } = req.query;

    res.json({
        "msg": 'Hello, we are online,GET method',
        q,
        api_key
    });
}

const postInformation = (req, res = response) => {
    const { name, age } = req.body;

    res.json({
        "msg": 'Hello, we are online, POST method',
        name,
        age
    });
}

const putInformation = (req, res = response) => {
    const id = req.params.id;

    res.json({
        "msg": 'Hello, we are online, PUT method',
        id
    });
}

const deleteInformation = (req, res = response) => {
    const { id } = req.params.id;

    res.json({
        "msg": 'Hello, we are online, DELETE method',
        id
    });
}


module.exports = {
    getInformation,
    postInformation,
    putInformation,
    deleteInformation
}