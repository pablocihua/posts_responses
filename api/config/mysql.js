const mysql = require('mysql'),
    db_config = require('./config.json'),
    connection_mysql = mysql.createConnection(db_config.database.mysql.posts_responses);


connection_mysql.connect((err) => {
    if (err) {
        throw new Error('Error in connection DB !');
    }
    console.log('Connected!')
});


module.exports = {
    connection_mysql
};