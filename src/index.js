// common js modules
const express = require('express');
const { clientErrorsHandler, serverErrorHandler } = require('./middlewares/error.handler.js');
const router = require('./routes/index.js');

// Create a server to receive data from clients
const app = express();

app.use(express.json()); // Content-Type: application/json

// cors

app.use(function (req, res, next) {
    console.log(new Date().toLocaleString(), req.method, req.path, req.body);
    next();
});

app.use('/', router);

app.use(clientErrorsHandler);
app.use(serverErrorHandler);

// http://localhost:5000
app.listen(5000, () => {
    console.log('Server started');
});
