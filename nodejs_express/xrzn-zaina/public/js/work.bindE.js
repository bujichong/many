require.config({
    //baseUrl: '/js',
        paths: {
        jquery: 'jquery-1.8.2.min',
        config: 'config',
        sobox: 'plugin/jquery.sobox',
        soTree: 'plugin/jquery.soTree',
        jqExtend: 'plugin/jquery.extend',
        jsrender: 'jsrender'
    },
    shim: {
        jquery: {
            exports: 'jquery',
            config: {exports: 'config' },
            jsrender: {exports: 'jsrender'},
            sobox: ['jquery'],
            soTree: ['jquery'],
            validate: ['jquery'],
            jqExtend: ['jquery', 'sobox']
        }
    }
}); 
define(['jquery', 'map.base','map.ext','tools','jsrender','config','jqExtend','sobox','soTree'], function($, iMap,eMap,$T) {
    var bindE = {
        bindMapEvent : function (obj,mouseType,callback) {// 通用鼠标绘制toggle函数 (绑定对象，开启工具事件，mouse事件类型[ 测量 | 添加覆盖物 ] )
            $(obj).bind('click',function () {
                if (mouseType=='add') {
                     eMap.clear(['forbidEdit','listCls','otherOverlays']);
                    eMap.draw.enter();
                }
                callback();
                eMap.status.mouseType = mouseType;
                window.console && console.log('鼠标工具事件~');
            });
        },
        clearAll : function (obj) {// 清除所有鼠标绘制痕迹
            var that = this;
            $(obj).bind('click',function () {
                eMap.clear(['otherOverlays']);
            });
        },
        marker : function (obj) {// 画点
            var that = this;
            that.bindMapEvent(obj,'add',function(){
                eMap.status.shapeType = 'pt';
                iMap.draw.marker();
            });
        },
        rule : function (obj) {// 测距
            var that = this;
            that.bindMapEvent(obj,'measure',function(){
                iMap.draw.rule();
            });
        },
        ruleArea : function (obj) {// 测面积
            var that = this;
            that.bindMapEvent(obj,'measure',function(){
                eMap.status.shapeType = 'p';
                iMap.draw.measureArea();
            });
        },
        rectZoomIn : function (obj) {// 画矩形拉框放大
            var that = this;
            that.bindMapEvent(obj,'zoom',function(){
                eMap.status.shapeType = 'p';
                iMap.draw.rectZoomIn();
            });
        },
        rectZoomOut : function (obj) {// 画矩形拉框缩小
            var that = this;
            that.bindMapEvent(obj,'zoom',function(){
                iMap.draw.rectZoomOut();
            });
        },
        zoomToChina : function (obj) {//缩放到中国地图范围
            var that = this;
            that.bindMapEvent(obj,'zoom',function(){
                var center = iMap.born.lngLat(103.41349,35.536489);
                iMap.centerAndZoom(center,5);
            });
        },
        saveCenterPos : function (obj) {//上传地图中心坐标
            var that = this;
            $(obj).click(function () {
                var pos = iMap.getCenter();
                $.reqUrl($c.saveLoc,{lng:pos.lng , lat:pos.lat},function () {

                    var geoc = iMap.born.geocoder();
                    geoc.getLocation(pos, function(rs){
                        var addComp = rs.addressComponents;
                        $('.em-saveLocation').text(addComp.province +  addComp.city + addComp.district +  addComp.street + addComp.streetNumber);//更新面版上的当前保存地址
                    });

                    mapOpt.firstPos = [pos.lng , pos.lat].join(',');//更新全局变量里的firstPos
                    $T.popTip({
                        tips : [{type:'normal',content:'保存成功，下次刷新页面首先自动定位到当前保存位置！'}],
                        width : 350
                    });
                });
            });
        }
    };
    return bindE;


});
