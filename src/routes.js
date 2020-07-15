const express = require('express');

const ToolController = require('./controller/ToolController');

//Creating route
const routes = express.Router();

//Defining routes
routes.get('/list', ToolController.index);
routes.get('/list/:id', ToolController.findTool);
routes.post('/create', ToolController.createTool);
routes.put('/update/:id', ToolController.update);
routes.delete('/delete/:id', ToolController.destroy);

module.exports = routes;