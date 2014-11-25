var config = require("./config");
var options = {
    'host': config.mysql.host,
    'port': config.mysql.port,
    'user': config.mysql.user,
    'password': config.mysql.password,
    'database': config.mysql.database,
    'charset': 'utf8',
    'connectionLimit': 50,
    'supportBigNumbers': true,
    'bigNumberStrings': true
};

/**
 * mysql
 */
var mysql = require('mysql');
var pool = mysql.createPool(options);

/**
 * 释放数据库连接
 */
exports.release = function(connection) {
    connection.end(function(error) {
        console.log('Connection closed');
    });
};

/**
 * 执行查询
 */
exports.query = function(sql,args,handler) {
    pool.getConnection(function(error, connection) {
        if(error) {
            console.log('DB-获取数据库连接异常！');
            throw error;
        }
		if(typeof args==='function'){
			handler=args;
			args=null;
		}	

		var query = connection.query(sql, args, function(error, results) {
			if(error) {
				console.log('DB-执行查询语句异常！');
				throw error;
			}
			// 处理结果
			handler(null,results);
		});

		console.log(query.sql);
 
        // 返回连接池
        connection.release(function(error) {
            if(error) {
                console.log('DB-关闭数据库连接异常！');
                throw error;
            }
        });
    });
};