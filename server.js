const express = require('express');
const mongoose = require('mongoose');

//Initializg app    
const app = express();

//Connecting to DB
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

//Defining routes
app.get('/', (req, res) => {
    res.send('Hello');
});
//
app.listen(3001);