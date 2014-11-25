require.config({
    baseUrl: '/js',
        
    paths: {
        jquery: 'jquery-1.8.2.min',
        BMap: 'map/BMap',
        drawing: 'map/drawing', //鼠标绘制
        distance: 'map/distance', //测距
        rectangleZoom: 'map/rectangleZoom', //拉框放大
        TextIconOverlay: 'map/TextIconOverlay',
        MarkerClusterer: 'map/MarkerClusterer',//点聚合
        searchInfoWindow: 'map/searchInfoWindow',//搜索弹窗
        lushu : 'map/LuShu'//路书
    },
    shim: {
        jquery: {
            exports: 'jquery',
            BMap: {exports: 'BMap'},
            drawing: {deps: ['BMap'],exports: 'drawing'},
            distance: {deps: ['BMap'],exports: 'distance'},
            rectangleZoom: {deps: ['BMap'],exports: 'rectangleZoom'},
            TextIconOverlay: {deps: ['BMap'],exports: 'TextIconOverlay'},
            MarkerClusterer: {deps: ['BMap'],exports: 'MarkerClusterer'},
            searchInfoWindow: {deps: ['BMap'],exports: 'searchInfoWindow'},
            lushu : {deps: ['BMap'],exports: 'lushu' }
        }
    }
}); 
define(['jquery', 'BMap', 'drawing', 'distance', 'rectangleZoom', 'TextIconOverlay', 'MarkerClusterer','searchInfoWindow','lushu'], function($) {
    //define(['jquery', 'bmap', 'drawing', 'distance', 'rectangleZoom'], function($) {

    /* OverCar */
    function OverCar(opt) {
        var o = $.extend({
            id: null,
            position: null,
            cls: '',
            direction: 'n',
            text: null,
            status: 0,
            offset: {
                x: 0,
                y: 0
            },
            initBack: function() {},
            clickBack: function() {}
        }, opt || {});
        this.opt = o;
        this.position = o.position;
        this.id = o.id;
        this.cls = o.cls;
        this.direction = o.direction;
        this.text = o.text;
        this.status = o.status * 1;
        this.offset = o.offset;
        this.initBack = o.initBack;
        this.clickBack = o.clickBack;
        this.LH = 'overCar';
    };
    OverCar.prototype = new BMap.Overlay();
    OverCar.prototype.initialize = function(map) {
        var t = this,
            $car;
        window.console && console.log('overCar initialize');
        t._map = map;
        if (t.id && $('#' + t.id).length) {
            $car = t._car = $('#' + t.id);
            t.updateStatus(t.opt, true);
        } else {
            $car = t._car = $('<div class="overCar"></div>');
            t.id && $car.attr('id', t.id);
            t.cls && $car.addClass(t.cls);
            $car.css({
                'position': 'absolute',
                'zIndex': BMap.Overlay.getZIndex(t.position.lat)
            });
            $car.html('<div class="potIcon potIcon-' + t.status + '"><span class="pot-num">' + t.text + '</span><em class="em-de de-' + t.direction + '"></em></div>');
            $car.click(function() {
                t.clickBack(t);
            });
            this.initBack(this);

            var car = $car.get(0);
            t._map.getPanes().labelPane.appendChild(car);
            return car;

        };
    };
    OverCar.prototype.draw = function() {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this.position);
        this._car.css({
            left: pixel.x + this.offset.x,
            top: pixel.y + this.offset.y
        });
    };
    OverCar.prototype.getPosition = function() {
        return this.position;
    };
    OverCar.prototype.getMap = function() {
        return this._map;
    };
    OverCar.prototype.setPoint = function(point) {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(point);
        this._car.css({
            left: pixel.x + this.offset.x,
            top: pixel.y + this.offset.y
        });
    };

    OverCar.prototype.updateStatus = function(opt, init) {
        //  opt = {
        //     position: null,
        //     direction: 'n',
        //     text: null,
        //     status: 0,
        //     offset: {
        //         x: 0,
        //         y: 0
        //     }
        // }
        //  $car.html('<div class="potIcon potIcon-' + t.status + '"><span class="pot-num">' + t.text + '</span><em class="em-de de-' + t.direction + '"></em></div>');
        //
        var map = this._map;
        var $car = this._car;
        if (opt.position) {
            var offset = $.extend({
                x: this.offset.x,
                y: this.offset.y
            }, opt.offset || {})
            var pixel = map.pointToOverlayPixel(opt.position);
            this._car.css({
                left: pixel.x + offset.x,
                top: pixel.y + offset.y
            });
        }
        if (opt.direction) {
            $car.find('.em-de').attr('class', 'em-de de-' + opt.direction);
        };
        if (opt.text) {
            $car.find('.pot-num').text(opt.text);
        }
        if (opt.status) {
            $car.find('.potIcon').attr('class', 'potIcon potIcon-' + opt.status);
        };
        if (init) {
            this.initBack(this);
        };

    };

    var iMap = {

        /*********** 地图基本操作 *************/
        getZoom: function() { //返回当前的地图缩放级别
            return $map.getZoom();
        },
        getCenter: function() { //返回地图当前视野中心坐标
            return $map.getCenter();
        },
        getBounds: function() { //返回当前地图的经纬度范围
            return $map.getBounds();
        },
        getDistance: function(start, end) { //start:Point, end:Point
            return $map.getDistance(start, end);
        },
        getOverlays: function() { //返回地图上所有覆盖物
            return $map.getOverlays();
        },
        getOverCarById: function(id) {
            var oArr = $map.getOverlays();
            var o = null;
            $.each(oArr, function(i, v) {
                if (v.id && v.id == id) {
                    o = v;
                    return false;
                };
            });
            return o;
        },
        getOverlaysByType: function(type, non) { //根据类型返回覆盖物：(类型,是否取反)
            var $all = $map.getOverlays();
            var $back = [];
            if (type) {
                $.each($all, function(i, v) {
                    !non && (v.LH === type) && $back.push(v);
                    !!non && (v.LH !== type) && $back.push(v);
                });
            }
            return $back;
        },
        getPosition: function(marker) { //marker获得坐标位置
            return marker.getPosition();
        },
        regeocode: function(lngLat, callback) {
            var geocoder = new BMap.Geocoder();
            geocoder.getLocation(lngLat, function(data) {
            var ars = data.addressComponents;
            var address = ars.province + ars.city + ars.district + ars.street + ars.streetNumber;
                callback(data,address);
            });
        },
        zoomIn: function() {
            $map.zoomIn();
        },
        zoomOut: function() {
            $map.zoomOut();
        },
        setPosition: function(marker, pos) { //设置marker位置
            marker.setPosition(pos);
        },
        setCenter: function(lnglat) { //自适应视野到覆盖物
            $map.setCenter(lnglat);
        },
        panTo: function(lnglat) { //地图移动到指定经纬度点
            $map.panTo(lnglat);
        },
        centerAndZoom: function(center, zoom) { //center:Point, zoom:Number
            var zoom = zoom || 14;
            $map.centerAndZoom(center, zoom);
        },
        setFitView: function(o) { //overlay|overlayArr
            //window.console && console.log('当前覆盖物有：', o);
            var pointsArr = [];
            if (o instanceof Array) { //如果是多个overlay对象
                $.each(o, function(i, v) {
                    if (!v) {
                        return;
                    }
                    pointsArr = pointsArr.concat(v.getPath ? v.getPath() : ([v.getPosition()]));
                });
            } else { //单个对象
                if (!o) {
                    return false;
                }
                pointsArr = o.getPath ? o.getPath() : ([o.getPosition()]);
            };
            //window.console && console.log(pointsArr);
            $map.setViewport(pointsArr, {
                zoomFactor: -1 //设置偏移zoom缩放级别
            });
        },
        addOverlays: function(overlays) { //向地图添加覆盖物
            if (overlays instanceof Array) {
                var len = overlays.length;
                for (var i = 0; i < len; i++) {
                    $map.addOverlay(overlays[i]);
                };
            } else {
                $map.addOverlay(overlays);
            }
        },
        removeWindows : function () {
           $map.closeInfoWindow();
        },
        removeSearchWindows : function () {
            $('.BMapLib_SearchInfoWindow').remove();
        },
        removeOverlays: function(overlays) {
            if (overlays instanceof Array) {
                var len = overlays.length;
                for (var i = 0; i < len; i++) {
                    $map.removeOverlay(overlays[i]);
                };
            } else {
                $map.removeOverlay(overlays);
            }
        },
        clearOverlays: function() { //删除所有自定义覆盖物
            $map.clearOverlays();
        },
        clearOverlaysByType: function(type) { //根据类型删除覆盖物
            var $all = $map.getOverlays();
            $.each($all, function(i, v) {
                (v.LH === type) && $map.removeOverlay(v);
            });
        },
        removePotsBySid: function(sidArr) { // 根据pot的sid数组移除pots
            var len = sidArr.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    var sid = sidArr[i];
                    if (sid) {
                        var potId = sid.replace($c.sidO__O, $c.potIdO__O);
                        $('#' + potId).length && $('#' + potId).remove(); // 地图上pot存在
                    }
                }
                // var $over = $map.getOverlays();
                // var l = $over.length;
                // for (var j = 0; j < l; j++) {
                //     if ($over[j].id==) {};
                // };

            };
        },
        closeInfoWindow: function() {
            $map.closeInfoWindow();
        }
    };



    /*********** 新建地图元素组件 *************/
    iMap.born = {
        overCar: function(opt) {
            return new OverCar(opt);
        },
        geocoder: function() {
            return new BMap.Geocoder();
        },
        lngLat: function(lng, lat) { //新建一个 经纬度坐标
            return new BMap.Point(lng, lat);
        },
        size: function(w, h) { //新建一个地图宽高尺寸
            return new BMap.Size(w, h);
        },
        pixel: function(x, y) { //新建一个地图坐标像素
            return new BMap.Pixel(x, y);
        },
        icon: function(o) {
            //window.console && console.log(o);
            var anchor = $.extend({
                x: 0,
                y: 0
            }, o.anchor || {});
            var imageOffset = $.extend({
                x: 0,
                y: 0
            }, o.imageOffset || {});
            return new BMap.Icon(o.url, new BMap.Size(o.size.w, o.size.h), {
                anchor: new BMap.Size(anchor.x, anchor.y),
                imageOffset: new BMap.Size(imageOffset.x, imageOffset.y)
            });
        },
        marker: function(point, opt) { //新建一个点
            //window.console && console.log(point, opt);
            var opt = $.extend(iMap.shape.marker, opt || {});
            var marker = new BMap.Marker(point, opt);
            if (opt.hasLabel) {
                marker.setLabel(new BMap.Label(opt.title, {
                    position: point,
                    offset: new BMap.Size(-10, 36)
                }));
            };
            return marker;
        },
        polyline: function(points, opt) { //新建一条线
            var opt = $.extend(iMap.shape.polyline, opt || {});
            return new BMap.Polyline(points, opt);
        },
        polygon: function(points, opt) { //新建一个多边形
            var opt = $.extend(iMap.shape.polygon, opt || {});
            return new BMap.Polygon(points, opt);
        },
        circle: function(center, r, opt) { //新建一个圆
            var opt = $.extend(iMap.shape.circle, opt || {});
            return new BMap.Circle(center, r, opt);
        },
        infoWindow: function(content, opt) { //新建一个地图弹窗
            return new BMap.InfoWindow(content, opt);
        },
        searchInfoWindow : function (opt) {
            var opt = $.extend({
                map : $map,
                content : '',
                title : '标注',
                width  : 290, //宽度
                //height : 105, //高度
                panel : "panel", //检索结果面板
                enableAutoPan : true, //自动平移
                searchTypes : [
                    BMAPLIB_TAB_SEARCH,   //周边检索
                    BMAPLIB_TAB_FROM_HERE, //从这里出发
                    BMAPLIB_TAB_TO_HERE //到这里去
                ]
            },opt||{});
            return new BMapLib.SearchInfoWindow(opt.map, opt.content,opt);
        },
        markerClusterer: function(markers) { //新建一个点聚合
            $mouseTool.clusterer = new BMapLib.MarkerClusterer($map, {
                markers: markers,
                minClusterSize: 3
            });
        },
        // contextMenu : function (opt) {//新建右键菜单
        //  return new MMap.ContextMenu(opt);
        // },
        // circleEditor : function (map,shape) {//新建一个圆编辑对象
        //  return new MMap.CircleEditor(map,shape);
        // },
        // polyEditor : function (map,shape) {//新建一个多边形、线段编辑对象
        //  return new MMap.PolyEditor(map,shape);
        // },
        drivingRoute : function (p1,p2,resultWrapId) {//point1,point2
            $mouseTool.driving = new BMap.DrivingRoute($map, {
                renderOptions:{
                    map: $map,
                    panel: resultWrapId||'',
                    autoViewport: true,
                    enableDragging : true, //起终点可进行拖拽,
                    policy : 'BMAP_DRIVING_POLICY_LEAST_DISTANCE',
                    onResultsHtmlSet : function (results) {
                        searchComplete&&searchComplete(results);
                    }
                }
            });
            $mouseTool.driving.search(p1, p2);
        },
        inputSearch : function (opt) {
            var opt = $.extend({
                inputId : null,
                map : $map,
                completeClearVal : true,
                completeClearOvers : false,
                addMarker : true,
                aimWin : false,
                searchWin : false,
                winAddCont : '',
                //drivingRoute : null,//(point)
                completeBack : function(){}
            },opt||{});

            function autoSearch(opt) {
                this._o = opt;
                this.auto = new BMap.Autocomplete( {   //建立一个自动完成的对象
                        "input" : this._o.inputId,
                        "location" : this._o.map
                    });
                this.confirmEvent();
            };
            autoSearch.prototype = {
                confirmEvent : function () {
                    var me = this;
                    me.auto.addEventListener("onconfirm", function(e) {//鼠标点击下拉列表后的事件
                        var _value = e.item.value;
                        val = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
                        me.searchEvent(val);
                    });
                },
                searchEvent : function (val) {
                    var me = this;
                    var local = new BMap.LocalSearch(me._o.map, { //智能搜索
                      onSearchComplete: function () {
                            if (me._o.completeClearOvers) {
                                me._o.map.clearOverlays(); //清除地图上所有覆盖物
                            };
                            var poi = local.getResults().getPoi(0); //获取第一个智能搜索的结果
                            window.console && console.log(poi);
                            var point = poi.point;
                            me._o.map.centerAndZoom(point,17);
                            if (me._o.addMarker) {
                                var mw = me.addMarker(poi);
                                //me._o.map.addOverlay(new BMap.Marker(point));    //添加标注
                            };
                            me._o.completeBack(val,mw.marker,mw.win);
                      }
                    });
                    local.search(val);
                },
                addMarker : function (poi) {
                    var me = this;
                    var marker = new BMap.Marker(poi.point);
                    me._o.map.addOverlay(marker); //添加标注
                    var winPop = null;
                    var winContent = '<p class="p-poiAddress">'+poi.address+'</p>'+opt.winAddCont;

                    if (me._o.aimWin) {//使用普通弹窗
                            //var content = '<p class="p-poiAddress">'+poi.address+'</p><p class="p-toPoi"><span class="s-toPoi">到这里去</span></p>';
                            winPop = iMap.born.infoWindow(winContent,{
                                width : 200,//信息窗口宽度
                                //height: 100,//信息窗口高度
                                offset : new BMap.Size(0,-20),
                                title : poi.title ,//信息窗口标题
                            });
                            $map.openInfoWindow(winPop,poi.point); //开启信息窗口
                            marker.addEventListener("click", function(e){
                                $map.openInfoWindow(winPop,poi.point); //开启信息窗口
                            });
                            // window.console && console.log(me._o);
                            // if (me._o.drivingRoute) {//启用到此地路线
                            //      setTimeout(function () {
                            //          $('.s-toPoi').click(function () {
                            //              iMap.drivingRoute(me._o.drivingRoute,marker);
                            //          });
                            //      },200);
                            // };
                    };

                    if(me._o.searchWin){//使用搜索弹窗
                        winPop = iMap.born.searchInfoWindow({
                            map : $map,
                            title : poi.title,
                            content : winContent
                        });
                        winPop.open(poi.point);
                       marker.addEventListener("click", function(e){
                            winPop.open(poi.point);
                        });
                    }

                    return {marker:marker,win:winPop};
                }
            }
             return new autoSearch(opt);
        },
        poiSearch: function(center, key, resultPanel, callback) { //新建一个poi搜索
            $map.centerAndZoom(center, 15);
            var local = new BMap.LocalSearch($map, {
                renderOptions: {
                    map: $map,
                    panel: resultPanel
                },
                pageCapacity: 10,
                onSearchComplete: function(result) {
                    callback && callback(result);
                }
            });

            local.searchInBounds(key, $map.getBounds());
        }
    };

    iMap.draw = {
        marker: function() { //画点
            $mouseTool.open();
            $mouseTool.setDrawingMode(BMAP_DRAWING_MARKER);
        },
        polyline: function() { //画线
            $mouseTool.open();
            $mouseTool.setDrawingMode(BMAP_DRAWING_POLYLINE);
        },
        circle: function() { //画圆
            $mouseTool.open();
            $mouseTool.setDrawingMode(BMAP_DRAWING_CIRCLE);
        },
        rectangle: function() { //画矩形
            $mouseTool.open();
            $mouseTool.setDrawingMode(BMAP_DRAWING_RECTANGLE);
        },
        polygon: function() { //画多边形
            $mouseTool.open();
            $mouseTool.setDrawingMode(BMAP_DRAWING_POLYGON);
        },
        rule: function() { //鼠标测距模式
            $mouseTool.rule = new BMapLib.DistanceTool($map);
            $mouseTool.rule.open();
            $mouseTool.rule.addEventListener("drawend", function(e) {
                //window.console && console.log(e);
                $mouseTool.rule = null; //释放对象
            });
        },
        measureArea: function(shapeOpt) { //鼠标测面模式
            $mouseTool.open();
            $mouseTool.setDrawingMode(BMAP_DRAWING_POLYGON);
            iMap.draw.enableCalculate();
        },
        enableCalculate: function() { //开启绘制计算面积
            $mouseTool.enableCalculate();
        },
        disableCalculate: function() { //关闭绘制计算面积
            $mouseTool.disableCalculate();
        },
        rectZoomIn: function() { //鼠标拉框放大模式
            window.console && console.log(11);
            $mouseTool.rectangleZoom = new BMapLib.RectangleZoom($map, {
                zoomType: 0, //0为放大，1为缩小
                autoClose: true
            });
            $mouseTool.rectangleZoom.open();
        },
        rectZoomOut: function(shapeOpt) { //鼠标拉框缩小模式
            window.console && console.log(22);
            $mouseTool.rectangleZoom = new BMapLib.RectangleZoom($map, {
                zoomType: 1, //0为放大，1为缩小
                autoClose: true
            });
            $mouseTool.rectangleZoom.open();
        },
        end: function(callback) {
            $mouseTool.addEventListener("overlaycomplete", function(e) {
                callback && callback(e);
            });
        },
        close: function() { //关闭鼠标绘制
            return $mouseTool.close();
        }
    };


    iMap.edit = {
        open: function(overlay) { //开启编辑方法(只适用于 circle、Polyline和Polygon )
            return overlay && overlay.enableEditing();
        },
        close: function(overlay) { //关闭编辑方法(只适用于 circle、Polyline和Polygon )
            return overlay && overlay.disableEditing && overlay.disableEditing();
        },
        circle: function(shape, callback) {
            iMap.edit.open(shape);
            callback && callback(shape);
        },
        poly: function(shape, callback) {
            iMap.edit.open(shape);
            callback && callback(shape);
        },
        setOptions: function(shape, shapeOpt) { //设置属性（线段）
            $.each(shapeOpt, function(v, k) {
                var fn = 'set' + v.substr(0, 1).toUpperCase() + v.substr(1);
                shape[fn](k);
            });
        },
        setDraggable: function(marker, bool) { //设置一个点是否可拖动
            window.console && console.log(marker);
            marker[bool ? 'enableDragging' : 'disableDragging']();
        }
    };


    /*********** 形状参数 *************/
    iMap.shape = {
        randomId: function() {
            return Math.floor(Math.random() * 100000000000);
        },
        marker: { // 点
            icon: new BMap.Icon('/images/work/markerIcon.png', new BMap.Size(32, 34)) // 复杂图标
        },
        polyline: { // 线
            strokeColor: '#f31b72',
            strokeOpacity: 0.8,
            strokeWeight: 4
        },
        circle: { // 圆
            strokeColor: '#82189c',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#9a3cd2',
            fillOpacity: 0.4
        },
        rectangle: { // 矩形
            strokeColor: '#407CA0', // 线颜色
            strokeOpacity: 0.8, // 线透明度
            strokeWeight: 2, // 线宽
            fillColor: '#3E88C7', // 填充色
            fillOpacity: 0.4 // 填充透明度
        },
        polygon: { // 多边形
            strokeColor: '#8d1d25', // 线颜色
            strokeOpacity: 0.8, // 线透明度
            strokeWeight: 2, // 线宽
            fillColor: '#d34949', // 填充色
            fillOpacity: 0.4 // 填充透明度
        },
        getType: function(overlay) {
            return overlay.LH.toLowerCase();
        },
        getPath: function(overlay) { //适用于Polyline,Polygon
            return overlay.getPath();
        },
        getPos: function(overlay) { //适用于marker获取位置，circle获取圆心
            return overlay.getCenter ? overlay.getCenter() : overlay.getPosition();
        },
        getRadius: function(overlay) { //适用于circle获取半径
            return overlay.getRadius();
        },
        setAnimation: function(marker, close) {
            if (close) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            };
        }
    };


    iMap.render = function(opt) { //初始化地图
        var opt = $.extend({
            mapId: 'mapBox', // 地图对应盒子id
            centerPos: null, // [x,y]初始化地图坐标
            level: 14, // 默认缩放等级
           setCity : true,
            mousetool: true, // 添加鼠标工具
            toolbar: true, // 默认显示方位工具栏
            overview: true, // 默认显示鹰眼
            mapType: true, //默认显示地图类型,
           panorama : true,//全景地图
            scale: true // 默认显示比例尺
        }, opt || {});


        $map = new BMap.Map(opt.mapId); // 创建Map实例
        var pos = new BMap.Point(opt.centerPos[0], opt.centerPos[1]);
        $map.centerAndZoom(pos, opt.level); // 初始化地图,设置中心点坐标和地图级别
        opt.scale && $map.addControl(new BMap.ScaleControl()); // 左下角，添加比例尺
        opt.toolbar && $map.addControl(new BMap.NavigationControl()); //左上角，添加默认缩放平移控件
        opt.overview && $map.addControl(new BMap.OverviewMapControl({
            isOpen: true
        })); //右下角添加鹰眼控件
        opt.mapType && $map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})); //右上角添加地图类型控件
        $map.enableScrollWheelZoom(true);
        if (opt.mousetool) { // 添加鼠标工具
            $mouseTool = new BMapLib.DrawingManager($map, {
                isOpen: false, //是否开启绘制模式
                markerOptions: iMap.shape.marker, //点的样式
                circleOptions: iMap.shape.circle, //圆的样式
                polylineOptions: iMap.shape.polyline, //线的样式
                polygonOptions: iMap.shape.polygon, //多边形的样式
                rectangleOptions: iMap.shape.rectangle //矩形的样式
            });
        }
        if (opt.panorama) {
            var stCtrl = new BMap.PanoramaControl(); //构造全景控件
            stCtrl.setOffset(new BMap.Size(10, 40));
            $map.addControl(stCtrl);//添加全景控件
        };
        if (opt.setCity) {
             var geoc = new BMap.Geocoder();
            geoc.getLocation(pos, function(rs){
                var addComp = rs.addressComponents;
                $('.fn-cityNow').text(addComp.city);
            });
        };
    };

    iMap.tip = function(opt) { // 新建地图提示窗口
        var opt = $.extend({
            autoMove: true,
            content: null,
            size: {
                w: 260,
                h: 120
            }, // w,h
            offset: {
                x: 18,
                y: -42
            } // x,y
        }, opt || {});

        var infoWindow = null;

        return infoWindow;
    };
    iMap.tip.open = function(tip, opt) {
        //return tip.open($map,opt);
    };

    var firstPosArr = mapOpt.firstPos.split(',');
    mapOpt.baseLoad && iMap.render({ // 初始化地图
        centerPos: firstPosArr
    });

    return iMap;


});
