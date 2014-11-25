var $util = require("../lib/util");
var $db=require('../lib/db_mysql');
var $mg=require('../lib/db_mongo').db;
var express = require('express');
var router = express.Router();
var ccap = require('ccap');

/* GET home page. */
router.get(['/','/index.html'], function(req, res) {
    var pm={nav_index:true};
    if(req.session.user){
      pm.user=req.session.user;
      res.render('work', pm);
  }else{
        res.render('index',pm);
  }
});

/**
 * 注册,传递随机数,用于加密密码
 */
router.get(/^\/(reg|login).html/, function(req, res) {
    var from = req.params[0];
    var rand=$util.rand(4);
    req.session.rand=rand;
    res.render(from, { rand: rand});
});

/**
 * 提交注册
 */
router.post('/reg.html', function(req, res) {
    if(req.body.r!= req.session.rand){
        res.json({state:false,msg:"请刷新页面,重新提交注册"});
    }else{
        var username=req.body.username||'';
        var password=req.body.password||'';
        if(username.length<4||password.length<6){
            res.json({state:fale,msg:"用户名或密码长度不够!"});
        }else{
            $db.query("insert into sys_user set ?",{
                user_type:5,
                user_code:username,
                user_name:username,
                create_date:new Date(),
                password:password
            },function(){
                res.json({state:true,msg:"注册成功!"});
            });
        }
    }
});

/**
 * 提交登录
 */
router.post("/login.html",function(req, res){
    if(req.body.r!= req.session.rand){
        res.json({state:false,msg:"请刷新页面,重新登录！"});
    }else{
        var username=req.body.username||'';
        var password=req.body.password||'';
        if(username.length<4||password.length<6){
            res.json({state:fale,msg:"用户名或密码不对！"});
        }else{
            var r=req.session.rand;
            $db.query("SELECT user_id userId,org_id orgId,password,user_code userCode FROM sys_user WHERE user_code=?",[username],function(err,results){
               console.log(results);
                var rst=results.length>0,msg="OK";
                if(rst){
                    rst=$util.md5((r+results[0].password).toUpperCase()).toUpperCase()==password;
                    if(!rst){
                       msg="密码错误!";
                    }else{
                        var user=results[0];
                        user.password=null;
                        req.session.user=user;
                    }
                }else{
                    msg="用户不存在!";
                }
                res.json({state:rst,msg:msg});
            });
        }
    }
});

router.get("/ccap.jpg",function(req, res){
    var captcha = ccap();
    var ary = captcha.get();
    req.session.ccap=ary[0];
    res.end(ary[1]);
});

//添加留言
router.post("/contcat.html",function(req, res){
    var pm=req.body;
    pm.createTime=new Date();
    $mg.collection("ZnGuestBook").insert(pm,function(err){
        res.json({state:true});
    });
});


router.get(/(contact|faq|app|work|rule)/, function(req, res) {
    var from = req.params[0];
    var pm={user: req.session.user};
    pm['nav_'+from]=true;
    res.render(from, pm);
});

router.get('/logout', function (req, res) {
    req.session.user=null;
    var rand=$util.rand(4);
    req.session.rand=rand;
    res.render("login", { rand: rand});
});

module.exports = router;
