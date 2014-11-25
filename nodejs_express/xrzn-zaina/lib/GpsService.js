var $db=require('../lib/db_mysql');
var $mg=require('../lib/db_mongo');
var $redis=require('../lib/db_redis');
var $util=require('../lib/util');
var async=require('async');

var srv={
	getVehicles:function(userId,callback){
		var sql="SELECT t2.tm_sid sid,t2.cm_id cmId,t2.plate_num plateNum,t2.vehicle_no vehicleNo FROM zn_user_vehicle t1,tm_setup_info t2 WHERE t1.vehicle_id = t2.vehicle_id AND t1.user_id =?";
		$db.query(sql,[userId], function (err,tmList) {
			async.map(tmList,function(item,cb){
				$redis.get('dsl:Tm:'+item.cmId+':moveState', function (err,reply) {
					item.state=reply||0;
					cb(null,item);
				});
			},callback);
		});
	},
	getPoints:function(userId,callback){
		$mg.TmPoint.find({userId:userId},callback);
	},
	getRealInfo:function(sidList,callback){
		$mg.TmRealInfo.find({sid:{$in:sidList}},callback);
	},
	checkTmList: function (sessionId,tmList) {
		$redis.multi().sadd("ZN:SESSION:"+sessionId+":checkedTm",tmList);
	},
	saveLoc: function (pos,userId,callback) {
		$db.query('update sys_user set pos=? where user_id=?',[pos,userId],callback);
	},
	saveMarker: function (point,cb) {
		console.log(point);
		console.log($mg.IdEntity);
		$util.incr($mg,'TmPoint', function (err,doc) {
			console.log('doc:',doc);
			console.log(err,doc);
			point.id=doc.id;
			$mg.TmPoint.insert(point,cb);
		});
	},
	delMarker: function (id,cb) {
		console.log("id="+id);
		$mg.TmPoint.remove({"id":id*1},cb);
	},
	searchTrack:function(sid,start,end,callback){
		$mg.TmBaseInfo.find({sid:sid,time:{$gte:start,$lte:end}},{loc:1,bLoc:1,time:1,alarm:1,cp:1}).sort({time:1}, function (err, docs) {
			var rst=[];
			docs.forEach(function (doc) {
				var tmp={time:doc.time,alarm:doc.alarm};
				if(doc.loc){
					tmp.lng=doc.loc.lng/1000000;
					tmp.lat=doc.loc.lat/1000000;
				}
				if(doc.bLoc){
					tmp.bLng=doc.bLoc.lng/1000000;
					tmp.bLat=doc.bLoc.lat/1000000;
				}
				if(!doc.cp){
					tmp.e=doc.cp.elev;
					tmp.s=doc.cp.speed;
					tmp.d=doc.cp.dtAlias;

				}
				rst.push(tmp);
			});
			callback(null,rst);
		});
	}
};
module.exports = srv;