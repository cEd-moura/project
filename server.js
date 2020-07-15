const express = require('express');
const mongoose = require('mongoose');
require('marko/node-require');
require('marko/express');
const cors = require('cors');

//Initializg app    
const app = express();

//Allow server to use json format
app.use(express.json());

//Liberando CORS
app.use(cors());

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true, useUnifiedTopology: true });

//Routes
app.use('/', require("./src/routes"));


app.listen(3001);