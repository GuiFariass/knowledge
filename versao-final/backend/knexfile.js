const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: {
        database: 'knowledge_final',
        user: 'postgres',
        password: 'Donner5990' // sua senha 
    },
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
