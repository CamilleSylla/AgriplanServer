const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false}));

app.get('/tasks', (req, res) => {
    // use the knex variable above to create dynamic queries
  });
  
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });