var opt = require("./config").redis;
var redis = require("redis");
var client = redis.createClient(opt.port, opt.host, {});
client.auth(opt.auth_pass, function (err) {
    if(err)console.log(err);
});
module.exports=client;