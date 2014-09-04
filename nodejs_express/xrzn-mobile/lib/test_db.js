var db = require("./db_mysql");
var mgDb=require("./db_mongo").db;
/*
db.query("select * from sys_user where user_id = 1",function(rows){
	console.info(rows);
});
*/

/*
mgDb.TmRealInfo.find({},function(err,docs){
    console.info(docs)
});
*/
mgDb.TmSetupInfo.find({'vehicleId':30473},function(err,docs){
    console.log(docs[0]);

});