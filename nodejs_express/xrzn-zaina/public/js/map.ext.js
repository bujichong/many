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
            config: {
                exports: 'config'
            },
            jsrender: {
                exports: 'jsrender'
            },
            sobox: ['jquery'],
            soTree: ['jquery'],
            validate: ['jquery'],
            jqExtend: ['jquery', 'sobox']
        }
    }
}); 
define(['jquery', 'map.base','tools','jsrender'], function($, iMap,$T) {

    var eMap = {
        status : {
            shape: null,//存放当前显示对象
            shapeId: null,//存放当前显示对象自定id
            shapeType: null,//存放当前显示对象自定类型 , pt | ln | c | r | p
            editor: null,
            switchEdit: false,
            mouseType: null, // 'measure','add',
            mapStyle: 'main', // 'main','track'
            drawing: false,
        },
        clear : function (o) {
            var status = eMap.status;
            var logTxt = '清除：';
            var allE = {
                overlays : function () {
                    iMap.clearOverlays();
                    logTxt += ' [清除地图所有覆盖物] ';
                },
                endEdit : function () {
                    status.editor&&iMap.edit.close(status.shape);
                    logTxt += ' [结束当前鼠标绘制] ';
                },
                endDraw : function () {
                    $mouseTool.close();
                    logTxt += ' [结束地图绘制] ';
                },
                listCls : function () {
                    $('.ul-overlayList li').removeClass('li-now');
                    logTxt += ' [移除列表存在当前样式] ';
                },
                otherOverlays : function () {
                    var $other = iMap.getOverlaysByType('overCar',true);
                    iMap.removeOverlays($other);
                     logTxt += ' [清除当前地图非车辆覆盖物] ';
                },
                allCar : function () {
                    var $car = iMap.getOverlaysByType('overCar');
                    iMap.removeOverlays($car);
                    logTxt += ' [清除当前地图所有车辆覆盖物] ';
                }
            }

            if (typeof(o)==='string'&&allE[o]) {
                allE[o]();
            }
            if (o instanceof Array) {
                $.each(o,function (i,v) {
                    allE[v]&&allE[v]();
                });
            }
            window.console && console.log(logTxt);
        },
        getPotState: function(sid) { //获得pot的状态
            return $('li[data-sid="' + sid + '"]').data('state'); // 车辆状态
        },
        getPotsPos: function(sidString, notFitView, callback) { //返回pots的位置到地图上
            var that = this;
            if (sidString) {
                var fitView = true && !notFitView;
                $.reqUrl($c.vehiclePos, {
                    sid: sidString
                }, function(rst) {
                    var pots = [];
                    if (rst.data && rst.data.length > 0) {
                        $.each(rst.data, function() {
                            var sid = this.sid;
                            var nowState = that.getPotState(sid);
                            var potData = $.extend({
                                nowState: nowState, // 车辆状态
                                fitView: fitView
                            }, this);
                            pots.push(potData);
                        });
                        eMap.potsCallback(pots);
                        if (callback) {
                            callback(rst.data);
                        }
                    } else {
                        $T.popTip({
                            tips: [{
                                type: 'normal',
                                content: '暂无 <b class="red">' + $T.switchSid(sidString) + '</b> 位置信息...'
                            }],
                            width: 250,
                            playType: 'normal'
                        });
                        window.console && console.log('暂无对应的车辆数据！');
                    }
                });
            } else {
                window.console && console.log('车辆sid信息为空！');
            }
        },
        potsCallback: function(potsData) {
            var that = this;
            //window.console && console.log(potsData);
            var potsLen = potsData.length;
            var pots = [];
            for (i = 0; i < potsLen; i++) {
                var data = potsData[i];
                var sid = data.sid;
                //window.console && console.log(sid,$treeInfo.chkedSid);
                if ($treeInfo.chkedSid.indexOf(data.sid) > -1) { // 判断传过来的单元是否在树上被选中，执行显示/不显示在地图上
                    var carTitle = '未知车辆';
                    $.each($treeInfo.data, function(i, v) { // 循环出车辆名称
                        if (v.sid === sid) {
                            carTitle = v.text;
                            return false;
                        }
                    });
                    window.console && console.log(data);
                    var pot = $.extend(data,{
                        title: carTitle, // 车辆标题信息
                    });
                    pots.push(pot);
                }
            }
            if (pots.length > 0) {
                eMap.addPots(pots, {
                    fitView: data.fitView
                });
            }
        },
        addPots: function(potsArr, opt) { // 参数 : map对象 , 点坐标数组[x,y] , 添加点参数
          var that = this;
            var potsArr = potsArr,
                arrLen = potsArr.length;
            var carArr = [];
            var opt = $.extend({ // 添加点对应参数
                offset: iMap.born.pixel(-8, -8), // 相对于基点的偏移量
                fitView: false,
                initBack: function() {},
                clickBack: function() {}
            }, opt || {});
            for (i = 0; i < arrLen; i++) {
                var pot =potsArr[i];
                // 添加覆盖点
                //var sta = true;
                var car = iMap.born.overCar({
                    id: pot.sid, // marker id
                    position: iMap.born.lngLat((pot.bLoc.lng/mapOpt.N), (pot.bLoc.lat/mapOpt.N)), // 位置
                    //icon: opt.icon,
                    direction: pot.cp.dtAlias,// pot 方向
                    text: pot.title,// pot title
                    status: pot.nowState,// 车辆状态 '0-3,0:off,1:out,2:stop,3:live|on'
                    offset: opt.offset,
                    initBack: function(car) {
                        window.console && console.log('仅操作显示一辆车：'+arrLen == 1);
                        //if (sta) {
                        arrLen == 1 && that.showPotsInfo(pot); //[固定显示] 或 [已经显示] 且 [更新数据长度为1]
                        //sta = false;
                   // };
                    },
                    clickBack: function(car) {
                        that.showPotsInfo(pot);
                    }
                });
                carArr.push(car);
               // if($('#'+tId).length){$('#'+tId).remove();};
            }
            //window.console && console.log(carArr);
            var linePot = potsArr[0];
            iMap.addOverlays(carArr); // 添加所有 pot到地图
            opt.fitView && iMap.setFitView(carArr); // 视野自动适应所有点
        },
        showPotsInfo: function(data) {
            window.console && console.log(data);
            var pData = {
                sid: data.sid, // sid
                lat: data.bLoc.lat / mapOpt.N, // 纬度
                lng: data.bLoc.lng / mapOpt.N, // 经度
                speed: data.cp.speed / 10, // 速度(公里/小时)
                dt: data.cp.dt, // 角度(0-359)
                direction: $T.direction[data.cp.dtAlias], // 方向
                elev: data.cp.elev, // 海拔(米)
                address : data.ad,
                time : $.getFullDate(data.time,'long'),
                state: $T.state[data.nowState] // 车辆状态 '0-3,0:off,1:out,2:stop,3:live|on'
            };
            var infoHtml = $('#temDeviceInfo').render(pData);
            var pos = iMap.born.lngLat(pData.lng , pData.lat);
            winPop = iMap.born.searchInfoWindow({
                width : 320,
                title : data.title,
                content : infoHtml
            });
            winPop.open(pos);
        },
        getPotAddress: function(lngLat, callback) {
            var gc = iMap.born.geocoder();
            //window.console && console.log(point);
            gc.getLocation(lngLat, function(rs) {
                var addComp = rs.addressComponents;
                var address = '服务器连接失败，暂无位置信息...';
                if (addComp) {
                    address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber + '附近';
                };
                window.console && console.log(address);
                callback(address);
            });
        },
        showShape : function (data,type,callback) {//显示形状  [ type : c | r | p | pt ]
            iMap.edit.close(eMap.status.editor);//关闭可编辑状态
            eMap.clear(['allowEdit','endDraw','otherOverlays','toolCls','listCls']);//清除事件
            //window.console && console.log(data);
            var itemShape = null; // 定义形状
            var itemShapeId = type+$c.shapeO__O+data.id;// 定义形状Id

            switch (type) {
                case 'c' : // 圆
                    itemShape = iMap.born.circle(iMap.born.lngLat(data.ctLon/mapOpt.N,data.ctLat/mapOpt.N),data.radius);
                    break;
                case 'r' :// 矩形
                case 'p' :// 多边形
                    var pathArr = [];
                    $.each(data.points,function (i,v) {
                        pathArr.push(iMap.born.lngLat(v.lng/mapOpt.N,v.lat/mapOpt.N));
                    });
                    itemShape = iMap.born.polygon(pathArr);
                    break;
                case 'pt' :// 点
                    itemShape = iMap.born.marker(iMap.born.lngLat(data.lng/mapOpt.N,data.lat/mapOpt.N),{title : data.name,hasLabel:true});
                    break;
                default :
                    window.console && console.log('这丫是什么形状？暂不存在！');
            }
            callback&&callback(itemShape);
            eMap.status.shape = itemShape; // 形状全局到use空间下
            eMap.status.shapeType = type; // 形状全局到use命名空间下
            eMap.status.shapeId = itemShapeId; // 形状id全局到use命名空间下

            // 添加覆盖物
            iMap.addOverlays(itemShape);
            iMap.setFitView([itemShape]);
        },
        addShape : function ($overlay,overType) {
            var params={},popTitle='保存围栏区域';
            var tgBox='#sideBar_saveArea';
            var url = $c.shapeSaveUrl[overType];
            var popW = 340;
            if (overType === 'marker') {// 点
                var pos = iMap.shape.getPos($overlay);
                params.lng=Math.floor(pos.lng*mapOpt.N);
                params.lat=Math.floor(pos.lat*mapOpt.N);
                popTitle = '保存兴趣点';
                tgBox='#sideBar_saveMarker';
                popW = 480;
                iMap.regeocode(pos,function (data,address) {
                    $('#newMarkerAddress').val(address);
                });
            }else if(overType === 'circle'){// 圆
                var center = iMap.shape.getPos($overlay);
                var radius = iMap.shape.getRadius($overlay);
                params.ctLon= Math.floor(center.lng*1000000);
                params.ctLat=Math.floor(center.lat*1000000);
                params.radius= Math.floor(radius*1);
            }else{// polygon || rectangle
                var path = iMap.shape.getPath($overlay);
                var points=[];
                $.each(path,function () {
                    points.push({
                        lng:Math.floor(this.lng*mapOpt.N),
                        lat:Math.floor(this.lat*mapOpt.N)
                    });
                });
                params.points=JSON.stringify(points);
            };

            var $tgbox = $(tgBox);
            var $itemTip = $tgbox.find('.p-itemTip');
            $.sobox.pop({
                title:popTitle,
                type :'target',
                target:tgBox,
                width: popW,
                maskClick:false,
                beforePop : function () {
                    $tgbox.find('.txt').val('');
                },
                closePop : function () {
                    $itemTip.removeClass('red').hide();
                    eMap.clear('otherOverlays');
                },
                btn:[{
                    text:'保存',removePop:false,callback:function(){
                        var fs = 1;
                        $tgbox.find('.txt').each(function () {
                            if ($.trim(this.value)==='') {
                                fs = 0;
                                return false;
                            }
                        });
                        if (fs===1) {
                            var ps=$tgbox.vals();
                            params.name=ps.as_name;
                            $.extend(params,ps);
                            $.reqUrlEx(url,params,function(data){
                                var shapeInfo = data.data;
                                var $li = '';
                                $li = $('#pointTem').render(shapeInfo);//调用js模板引擎render
                                var $liPar = null;
                                switch (shapeInfo.type) {
                                    case 'c' :
                                    case 'r' :
                                    case 'p' :
                                        $liPar = $('.ul-areaList');
                                        break;
                                    case 'ln' :
                                        $liPar = $('.ul-lineList');
                                    case 'pt' :
                                        $liPar = $('.ul-markerList');
                                        break;
                                    default :
                                        window.console && console.log('这丫是什么形状？暂不存在！');
                                }
                                $liPar.prepend($li);// 添加dom到列表
                                 eMap.dealShapeLi($liPar.find('li:first'),'pt');// 绑定点击事件
                            },null,true);
                            return true;
                        }else {
                            $itemTip.addClass('red').text('请填写完整的数据信息！').show();//提示填写信息不完整
                        }
                    }
                },{
                    text:'取消',cls:'a-sopop-cancel'}
                ]
            });
            return;
        },
        dealShapeLi : function ($li,type) {
            $li.find('.s-overlay').click(function() {
                var data =$(this).data();
                eMap.showShape(data,type);
                window.console && console.log(data);
            });
            $li.find('.em-del').click(function() {
                var _self = $(this);
                var id = _self.data('id');
                $.reqUrlEx($c.shapeDelUrl.marker,{id : id},function (data) {
                    if (data.state) {
                        _self.parent('.li-overlay').remove();
                    };
                },'你确定要删除此兴趣点吗？');
            });
        }
    };


    eMap.draw = {
        mask : 0,
        ingTip : null,
        addMask : function () {// 添加地图绘制时非地图区域遮罩
            var maskHtml = '<div class="drawMask"></div>';
            $('.noMapBox').append(maskHtml);
        },
        enter : function () { //进入draw处理
            var that = this;
            eMap.status.drawing = true;
            if (that.mask == 0) {
                that.addMask();
                that.mask = 1;
            }
            $('.drawMask').show();
            that.ingTip = $.sobox.tip({
                width : 240,
                content : '<b>提示：</b>释放或双击鼠标左键结束绘制，<em class="red">ESC键</em> 取消绘制',
                stayTime : 0
            });
            window.console && console.log('进入鼠标操作~');
        },
        out : function (clearAll) {//结束draw处理， false || true
            var that = this;
            eMap.status.drawing = false;
            $('.drawMask').hide();
            eMap.clear(['endDraw']);
            if (clearAll) {
                eMap.clear('otherOverlays');
            }
            that.ingTip&&that.ingTip.removePop();
            that.ingTip = null;
            window.console && console.log('退出鼠标操作~');
        },
        escOut : function () {//esc键退出draw
            $(document).keydown(function (e) {
                var e = window.e || e;
                if (eMap.status.drawing == true && e.keyCode == 27) {
                    eMap.draw.out(true);
                }
            });
        },
        end : function () {
            iMap.draw.end(function (e) {// 绑定绘制结束事件
                window.console && console.log(e);
                // window.console && console.log(eMap.status.mouseType);
                var $overlay = eMap.status.shape = e.overlay;
                //eMap.status.shapeId = e.id;
                eMap.status.shapeId = e.Q;//暂无id这个属性
                eMap.draw.out(false);
                // 存放全局变量
                if (eMap.status.mouseType == 'add') {// 如果是'增加'类型
                    //var e = window['pop_draw_e'];
                    var overType = e.drawingMode;
                    eMap.addShape($overlay,overType);
                }
            });
        }
    };



    return eMap;


});
