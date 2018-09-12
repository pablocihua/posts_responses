
const { connection_mysql } = require('./api/config/mysql');

connection_mysql.connect(( err ) => {
    if( err ){
        throw new Error('Error in connection DB!');
    }

    console.log('Mysql connected')
});

const mysqlCtrl = {
    createDb: ( req, res ) => {
        let sql = 'CREATE DATABASE posts_responses';
        connection_mysql.query( sql, ( err, result ) => {
            if( err ){
                throw new Error('Erro to create the database posts_response');
            }
            res.send('Database created ...');
        });
    }
}

module.exports = mysqlCtrl;