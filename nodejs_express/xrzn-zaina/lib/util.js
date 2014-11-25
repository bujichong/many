var crypto = require('crypto');
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var util={
    rand:function(n){
        var res = "";
        for(var i = 0; i < n ; i ++) {
            var id = Math.ceil(Math.random()*35);
            res += chars[id];
        }
        return res;
    },
    md5:function(str){
        var md5 = crypto.createHash('md5');
        md5.update(str);
        return md5.digest('hex').toUpperCase();
    },
    incr:function(mg,coll,cb){
        mg.IdEntity.findAndModify({
            query: { name:coll},
            update: { $inc: { id:1 } },
            new: true
        },cb);
    }
};
module.exports = util;