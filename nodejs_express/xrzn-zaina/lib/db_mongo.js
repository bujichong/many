var config = require("./config");
/**
 * mongodb
 */
var databaseUrl = config.mgUrl; // "username:password@example.com/mydb"
var collections = ["TmRealInfo","TmSetupInfo","TmBaseInfo","TmPoint","IdEntity"];
var db = require("mongojs").connect(databaseUrl, collections);
/*
db.TmRealInfo.find({},function(err,docs){
    console.log(docs);
});
*/
module.exports=db;
