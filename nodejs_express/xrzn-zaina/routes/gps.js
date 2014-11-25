var $srv=require('../lib/GpsService');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/vehicle/list', function(req, res) {
    var user=req.session.user;
    $srv.getVehicles(user.userId,function(err,rst){
        res.json(rst)
    });
});
/**
 * 获取用户兴趣点
 */
router.get('/point/list', function(req, res) {
    var user=req.session.user;
    $srv.getPoints(user.userId,function(err,doc){
        res.json({
            state:!err,
            data:doc||[]
        });
    });
});
/**
 * 车辆实时位置
 */
router.post('/realinfo', function(req, res) {
    var sid=req.body.sid||req.query.sid;
    $srv.getRealInfo(sid.split(","),function(err,doc){
        console.log("[]",doc);
        if(err)console.log(err);
        res.json({
            state:!err,
            data:doc||[]
        });
    });
});
/**
 * 提交选择车辆
 */
router.all("/checkTmList", function (req, res) {
    var tmList=(req.body.sid||req.query.sid||'').split(",");
    var sessionId=req.session.id;
    $srv.checkTmList(sessionId,tmList);
    res.json({state:true});
});

router.all("/saveLoc",function(req, res){
    var lat=req.body.lat,lng=req.body.lng;
    var pos=lng+","+lat;
    var userId=req.session.user.userId;
    $srv.saveLoc(pos,userId,function(err){
        res.json({
            state:true
        });
    });
});

router.get("/getStatInfo", function (req,res) {
    //int userId=req.session.user.userId;
});
module.exports = router;
