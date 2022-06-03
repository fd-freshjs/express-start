// common js modules
const express = require('express');
const { middleWare } = require('./middlewares/index.js');
const { getHome } = require('./routes/index.js');

// Create a server to receive data from clients
const app = express();

// localhost:5000/users/123/get
// route -> mws -> endpoint/controller (getHome)
app.get('/users/:id/get', middleWare, getHome);

// http://localhost:5000
app.listen(5000, () => {
    console.log('Server started');
});
