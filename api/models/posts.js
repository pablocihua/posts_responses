const { connection_mysql } = require('../config/mysql');

/* connection_mysql.connect((err) => {
    if (err) {
        throw new Error('Error in connection DB - posts !');
    }

    console.log('Mysql connected')
}); */

const PostModel = {
    getPosts: () => {
        return new Promise((resolve, reject) => {
            let sql = 'Select * from posts';
            connection_mysql.query(sql, (err, rows) => {
                if (err) {
                    return reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },
    addPost: (post) => {
        return new Promise((resolve, reject) => {
            let sql = "Insert Into posts SET?";
            console.log(post)
            connection_mysql.query(sql, post, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    updatePost: (id, data) => {
        return new Promise((resolve, reject) => {
            let sql = 'Update posts Set responses_count = ? Where post_id = ?';
            console.log(data);
            connection_mysql.query(sql, [data.responses_count, id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
};

module.exports = PostModel;