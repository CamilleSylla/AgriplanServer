module.exports ={
    development: {
        client: 'pg',
        connection: 'postgres://localhost/test',
        migration: {
            directory: __dirname + '/db/migrations',
        },
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migration: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: {
                directory: __dirname + '/db/seeds/production',
            },
        },
    },
}