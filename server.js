const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false}));

app.listen(port, function () {
    console.log("listening on port; ", port)
})