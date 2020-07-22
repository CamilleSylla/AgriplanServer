var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
console.log(conofig)
module.export = require ('knex')(config);