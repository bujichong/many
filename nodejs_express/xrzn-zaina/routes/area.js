var $srv=require('../lib/GpsService');
var express = require('express');
var router = express.Router();

router.post('/saveMarker.htm', function(req, res) {
    var user=req.session.user;
    var point={
        mapType:'bmap',
        userId:user.userId,
        orgId:user.orgId,
        name:req.body.as_name,
        ad:req.body.ad,
        lng:req.body.lng*1,
        lat:req.body.lat*1
    };
    $srv.saveMarker(point,function(err,rst){
        console.log('saveMarker rst :',rst);
        res.json({
			state:true,
            data:point
		})
    });
});

router.post('/delMarker.htm', function (req, res) {
    $srv.delMarker(req.body.id, function (err) {
        res.json({
            state:true
        })
    })
});


module.exports = router;
