var $srv=require('../lib/GpsService');
var express = require('express');
var router = express.Router();
router.post("/searchTrack.htm", function (req,res) {
    var sid=req.body.sid;
    var start=new Date(req.body.start.replace("-","/"));
    var end=new Date(req.body.end.replace("-","/"));
    $srv.searchTrack(sid,start,end, function (err,arr) {
        res.json({
            state:true,
            data:{roadArr:arr}
        });
    });
});
module.exports = router;