var config = require("../config");
/**
 * mongodb
 */
var databaseUrl = config.mgUrl; // "username:password@example.com/mydb"
var collections = ["TmRealInfo","TmSetupInfo","TmBaseInfo"];
var db = require("mongojs").connect(databaseUrl, collections);
/*
db.TmRealInfo.find({},function(err,docs){
    console.log(docs);
});
*/
exports.db=db;
