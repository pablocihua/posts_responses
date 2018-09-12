const mysql = require('mysql'),
      db_config = require('./config.json'),
      connection_mysql = mysql.createConnection( db_config.database.mysql.posts_responses );



module.exports = {
    connection_mysql
};