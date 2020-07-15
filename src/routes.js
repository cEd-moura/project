const express = require('express');

const ToolController = require('./controller/ToolController');

//Creating route
const routes = express.Router();

//Defining routes
routes.get('/tools/list', ToolController.index);
routes.get('/tools/list/:id', ToolController.findTool);
routes.post('/tools/create', ToolController.createTool);
routes.put('/tools/update/:id', ToolController.update);
routes.delete('/tools/delete/:id', ToolController.destroy);
routes.get('/teste_marko', ToolController.teste_marko);

module.exports = routes;