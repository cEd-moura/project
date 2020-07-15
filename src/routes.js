const express = require('express');

const ToolController = require('./controller/ToolController');

//Creating route
const routes = express.Router();

//Defining routes
routes.get('/list', ToolController.index);
routes.post('/create', ToolController.createTool);


module.exports = routes;