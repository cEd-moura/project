const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Initializg app    
const app = express();

//Allow server to use json format
app.use(express.json());

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true, useUnifiedTopology: true });

//Routes
app.use('/tools', require("./src/routes"));


app.listen(3001);