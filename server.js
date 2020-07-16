const express = require('express');
const mongoose = require('mongoose');
require('marko/node-require');
require('marko/express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Initializg app    
const app = express();

//Allowing express to use static files
app.use('/static', express.static('src/public'));

//Allow server to use json format
app.use(express.json());

//Allowing modifications in the body of request made with a form
app.use(bodyParser.urlencoded({ extended: true }));

//Liberando CORS
app.use(cors());

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true, useUnifiedTopology: true });

//Routes
app.use('/', require("./src/routes"));


app.listen(3001);