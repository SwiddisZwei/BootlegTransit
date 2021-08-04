const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');

const app = express();
const port = 3000;

app.get('/', routes.index);

app.listen(port, (err) => {
    if (err) {
        console.log("Error starting app.");
        console.log(err);
    }
    console.log("Server started at http://localhost:" + port)
});
