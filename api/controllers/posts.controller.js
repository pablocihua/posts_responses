
const { connection_mysql } = require('../config/mysql');

connection_mysql.connect(( err ) => {
    if( err ){
        throw new Error('Error in connection DB!');
    }

    console.log('Mysql connected')
});

const postsCtrl = {
    getPosts: ( req, res ) => {
        let sql = 'Select * from posts';
        connection_mysql.query( sql, ( err, result ) => {
            if( err ){
                throw new Error('Error to get posts');
            }
            console.log( result )
            res.render('pages/index.twig', {
                posts: result
            });
        });
    }
}

module.exports = postsCtrl;