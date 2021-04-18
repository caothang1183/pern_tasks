const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'nnthang1994',
    host: 'localhost',
    port: 5432,
    database: 'pern_tasks'
});

module.exports = pool;