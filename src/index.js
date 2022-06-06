// common js modules
const express = require('express');
const router = require('./routes/index.js');

// Create a server to receive data from clients
const app = express();

app.use('/', router);

// http://localhost:5000
app.listen(5000, () => {
    console.log('Server started');
});
