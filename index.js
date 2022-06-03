const express = require('express');

// Create a local server to receive data from
const app = express();

app.get('/', (req, res) => {
    console.log('Hello world');

    res.send({ test: 'test' });
});

// http://localhost:5000
app.listen(5000, () => {
    console.log('Server started');
});
