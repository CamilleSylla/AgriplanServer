module.exports ={
    development: {
        client: 'pg',
        connection: {
          host : '127.0.0.1',
          user : 'postgres',
          password : 'laGalere72',
          database : 'agriplan',
          charset: 'utf8'
        },
        migrations: {
          directory: __dirname + '/migrations/knex.js',
        },
        seeds: {
          directory: __dirname + '/seeds/knex.js'
        }
      }
}