const Pool = require("pg").Pool
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "fiqih",
    database: "test",
    post: "5432"
})

module.exports = pool;