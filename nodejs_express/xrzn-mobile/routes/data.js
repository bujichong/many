var express = require('express');
var router = express.Router();
var db=require('../lib/db_mysql');
var mgDb=require("../lib/db_mongo").db;
var async = require('async');

var sql1="SELECT CONCAT('G_',org_id) \"id\", simple_name \"text\", false leaf  FROM sys_org WHERE parent_id=?",
    sql2="SELECT CONCAT('V_',t1.vehicle_id) \"id\", t1.plate_num \"text\", true leaf,t2.tm_sid sid  FROM base_vehicle t1 left join tm_setup_info t2 on t1.vehicle_id = t2.vehicle_id WHERE org_id=?",
    sqlSearch="SELECT CONCAT('V_',t1.vehicle_id) \"id\", t1.plate_num \"text\", true leaf,t2.tm_sid sid  FROM base_vehicle t1 left join tm_setup_info t2 on t1.vehicle_id = t2.vehicle_id WHERE t1.plate_num LIKE CONCAT('%',?,'%')";

router.get('/data/getVehicleList', function(req, res) {
    var orgId=req.query.orgId;
    if(!orgId){
        orgId=req.session.user.orgId;
    }
    var data=[];
    db.query(sql1,[orgId],function(rows){
        data=data.concat(rows);
        db.query(sql2,[orgId],function(rows){
            data=data.concat(rows);
            res.json(data);
        });
    });
});

router.get('/data/getSearchList', function(req, res) {
    db.query(sqlSearch,[req.query.key],function(rows){
        res.json(rows);
    });
});

router.get('/data/getVehicleInfo', function(req, res) {
    var sid=req.query.sid;
    mgDb.TmRealInfo.find({sid:sid},function(err,docs){
        if(err||docs.length==0){
            res.json({state:false});
            return;
        }
        var doc=docs[0];
        res.json({
            state:true,
            id:vehicleId,
            data:[{
                pos:{lng:doc.loc.lng,lat:doc.loc.lat},
                dt:doc.cp.dt,
                dtAlias:doc.cp.dtAlias,
                elev:doc.cp.elev,
                speed:doc.cp.speed,
                state:doc.state
            }]
        });
    });
});

router.get('/data/getVehicleTrack', function(req, res) {
    var sid=req.query.sid;
    var start=(req.query.date||'').replace(/-/,'/');
    var end=start+60*60*24;
    var rst={state:true,sid:sid,line:[]};
    mgDb.TmBaseInfo.find({sid:sid,time:{$gte:start,$lte:end}},{loc:1,time:1}).limit(1000).forEach(function(err,doc){
        rst.push({lng:doc.loc.lng,lat:doc.loc.lat,time:doc.time});
    });
    res.json(rst);
});

module.exports = router;