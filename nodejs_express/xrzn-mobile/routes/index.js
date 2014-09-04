var express = require('express');
var router = express.Router();
var db=require('../lib/db_mysql');

var crypto = require('crypto');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.get('/login.html', function(req, res) {
  res.render('login', { SESSION_RANDOM: 'xrzn_mobile' });
});

router.get('/index.html', function(req, res) {
  res.render('index',{today:Date.parse(new Date())});
});


router.post('/doLogin', function(req, res) {
  var userCode=req.body.user_code,pw=req.body.s;
    db_mysql.query("select user_id,org_id,password from sys_user where user_code = ?",[userCode],function(rows){
        if(rows&&rows.length>0){
            var user=rows[0];
            var md5 = crypto.createHash('md5');
            md5.update(user.password.toUpperCase()+"xrzn_mobile");
            var d = md5.digest('hex').toUpperCase();
            if(d==pw){
                req.session.user={userId:req.body.user_id,orgId:req.body.org_id};
                res.json({state:true});
            }else{
                res.json({state:false,msg:'用户名或密码不匹配!'});
            }
        }else{
            res.json({state:false,msg:'该用户不存在!'});
        }
    });
});



module.exports = router;
