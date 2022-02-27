const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "kamarex2002",
    host: "db",
    database: "attendancebd",
    port: "5432"

});

module.exports = pool;