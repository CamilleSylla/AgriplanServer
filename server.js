const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex');

const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extends: false}));

app.get('/todos', (req, res) => {
    knex.select().from('todos')
    .then(function (todos){
        res.send(todos)
    })
  })

  app.post('/todos', (req, res) => {
    knex('todos').insert({
        title: "go play some shorcuts",
        user_id: 1
    }).then(function (){
        knex.select().from('todos')
        .then(function (todos){
            res.send(todos)
        })
    })
  })

  
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });