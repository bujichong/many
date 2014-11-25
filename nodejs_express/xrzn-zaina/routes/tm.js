var express = require('express');
var router = express.Router();
router.get("/showTrack.htm", function (req,res) {
    res.render("tm/showTrack.html");
});
module.exports = router;