var express = require('express');
var moment = require('moment');
var router = express.Router();
router.get("/showStatOn.htm", function (req,res) {
    res.render("rpt/stat_on.html",{startTime:moment().format("YYYY-MM-DD")+" 00:00"});
});
router.post("/getStatOn.htm", function (req,res) {
    var pm=req.body;
    if(!pm.num)pm.num=1;
    var startTime=pm.startTime||(moment().format("YYYY/MM/DD")+" 00:00");
    pm.startTime=new Date(startTime);
    var endTime=pm.endTime||'';

    if(!pm.startTime){
        pm.startTime=new Date(moment().format("YYYY/MM/DD")+" 00:00");
    }else{
        pm.startTime=new Date(moment().format("YYYY/MM/DD")+" 00:00");
    }
    if(!pm.endTime){
        pm.endTime=moment(pm.startTime).add('days', 1);
    }
    res.json([]);
});


module.exports = router;