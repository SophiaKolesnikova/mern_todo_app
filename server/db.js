const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "13071997Nene",
    host: "localhost",
    database: "perntodo",
    port: 5432
});

module.exports = pool;