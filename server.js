const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Initializg app    
const app = express();

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/store', { useNewUrlParser: true, useUnifiedTopology: true });

//Defining Schemas
requireDir("./src/models");
const Tool = mongoose.model('Tool');

//Defining routes
app.get('/', (req, res) => {
    Tool.create({
        description: "Martelo de Ferro",
        price: 50.5,
        typeOfTool: 1,
        code: "T1"
    });
    res.send()
});

app.listen(3001);