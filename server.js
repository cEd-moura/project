const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('./index.hmtl');
});

app.listen(3001);