const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'consultadddb.c5k1aeum1ejj.us-east-1.rds.amazonaws.com',
  user: 'root',
  password: 'Ayush1311',
  database: 'dcbapp', // Change this to match your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});




module.exports = pool.promise();