const express = require('express');

//Criando rota
const routes = express.Router();

routes.get('/', (req, res) => {
    Tool.create({
        description: "Martelo de Ferro",
        price: 50.5,
        typeOfTool: 1,
        code: "T1"
    });
    res.send()
});


module.exports = routes;