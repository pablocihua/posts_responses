const { connection_mysql } = require('../config/mysql');


const ResponseModel = {
    addResponse: (response) => {
        return new Promise((resolve, reject) => {
            let sql = "Insert Into responses SET?";
            connection_mysql.query(sql, response, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    },
    getResponses: (id = null) => {
        let where = '';
        if (id !== null) {
            where = `Where post_id = ${ id }`;
        }

        return new Promise((resolve, reject) => {
            let sql = "Select * from responses " + where;
            connection_mysql.query(sql, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
};

module.exports = ResponseModel;