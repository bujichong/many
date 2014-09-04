var mMap = {
    carListUrl: 'js/car.json',
    map: null,
    marker: null,
    polyline: null,
    startPot: null,
    endPot: null,
    todayStr: null, //存放当前日期
    init: function() {
        var t = this;
        t.setTxtDate();
        t.map_init();
        //t.getMyPosition();
        t.toggleDetails();
        t.focusSearch();
        t.backToMap();
        t.ajaxList();
        t.searchNearByKey();
    },
    icons: { //图标参数
        baseFile: '/images/pot/',
        e: {
            text: '正东',
            file: true,
            url: 'e.png',
            size: [40, 40]
        },
        en: {
            text: '东北',
            file: true,
            url: 'en.png',
            size: [40, 40]
        },
        es: {
            text: '东南',
            file: true,
            url: 'es.png',
            size: [40, 40]
        },
        n: {
            text: '正北',
            file: true,
            url: 'n.png',
            size: [40, 40]
        },
        s: {
            text: '正南',
            file: true,
            url: 's.png',
            size: [40, 40]
        },
        w: {
            text: '正西',
            file: true,
            url: 'w.png',
            size: [40, 40]
        },
        wn: {
            text: '西北',
            file: true,
            url: 'wn.png',
            size: [40, 40]
        },
        ws: {
            text: '西南',
            file: true,
            url: 'ws.png',
            size: [40, 40]
        },
        start: {
            file: false,
            url: 'start.png',
            size: [40, 33]
        },
        end: {
            file: false,
            url: 'end.png',
            size: [40, 33]
        }
    },
    state: ['<em class="em-outline">离线</em>', '<em class="em-outcar">熄火</em>', '<em class="em-stopcar">停车</em>', '<em class="em-driving">行驶</em>'],
    setTxtDate: function() { //初始设置轨迹日期并加载日历控件
        var t = this;
        var d = mData.today || new Date();
        window.console && console.log(d);
        var m = '00' + (d.getMonth() + 1);
        m = m.substr(m.length - 2);
        var day = '00' + d.getDate();
        day = day.substr(day.length - 2);
        var dateStr = d.getFullYear() + "-" + m + "-" + day;
        t.todayStr = dateStr;
        //$('.txt-date').val(dateStr);
        $('#dtBox').DateTimePicker({
            minDate: '2014-01-03',
            maxDate: dateStr,
            buttonsToDisplay: ['HeaderCloseButton', 'SetButton'],
            titleContentDate: '选择需要查看的日期',
            setButtonContent: '查看此日轨迹',
            addEventHandlers: function() {
                var picker = this;
                $('.a-searchTrack').click(function() { //查看轨迹按钮调出日历选择器
                    picker.showDateTimePicker('.txt-selDate');
                    return false;
                });
            },
            setCallback: function(date) { //选择日期返回函数
                t.map_addTrack(date);
            }
        });
        $('#dtBox2').DateTimePicker({
            minDate: '2014-01-03',
            maxDate: dateStr,
            buttonsToDisplay: ['HeaderCloseButton', 'SetButton'],
            titleContentDate: '选择需要查看的日期',
            setButtonContent: '查看此日报警信息',
            addEventHandlers: function() {
                var picker = this;
                $('.a-showAlarm').click(function() { //查看轨迹按钮调出日历选择器
                    picker.showDateTimePicker('.txt-selDate');
                    return false;
                });
            },
            setCallback: function(date) { //选择日期返回函数
                t.map_showAlarm();
            }
        });
    },
    map_init: function() { //加载地图
        var t = this;
        // 百度地图API功能
        t.map = new BMap.Map("mapbox");
        t.map.centerAndZoom(new BMap.Point(116.384, 39.925), 14);
        t.map.addControl(new BMap.ScaleControl()); // 添加比例尺控件
        t.map.addControl(new BMap.ZoomControl()); //添加地图缩放控件
    },
    _newMarker: function(point, name, offset, state) {
        var t = this;
        var offset = offset || [0, 0];
        var icon = t.icons[name];
        file = icon.file ? (state + '/') : '';
        var iconUrl = t.icons.baseFile + file + icon.url;
        window.console && console.log(iconUrl);
        var icon = new BMap.Icon(iconUrl, new BMap.Size(icon.size[0], icon.size[1]));
        var marker = new BMap.Marker(point, {
            icon: icon,
            offset: new BMap.Size(offset[0], offset[1])
        });
        return marker;
    },
    _geocoderLocation: function(point) { //获取marker地址并赋值
        var gc = new BMap.Geocoder();
        //window.console && console.log(point);
        gc.getLocation(point, function(rs) {
            var addComp = rs.addressComponents;
            window.console && console.log(addComp);
            var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
            $('.s-addressInfo').html(address);
        });
    },
    map_addMarker: function(sid, title, info) { //向地图添加marker
        var t = this;
        t.removeAllOverlays();
        var point = new BMap.Point(info.pos.lng / 1000000, info.pos.lat / 1000000);
        t.marker = t._newMarker(point, info.dtAlias, null, info.state);
        t.map.addOverlay(t.marker);
        t.map.panTo(point);

        info.title = title;
        info.point = point;
        info.sid = sid;
        t.refreshPotInfo(info); //更新车辆详细信息
    },
    refreshPotInfo: function(info) {
        var t = this;
        window.console && console.log(info);
        $('#txt-carSid').val(info.sid);
        $('.h3-carInfo .s-t').text(info.title);
        $('.ul-carInfo .s-state').html(t.state[info.state]);
        $('.ul-carInfo .s-lnglat').html(info.pos.lng / 1000000 + ' , ' + info.pos.lat / 1000000);
        $('.ul-carInfo .em-speed').html(info.speed / 10);
        $('.ul-carInfo .em-elev').html(info.elev);
        $('.ul-carInfo .em-height').html(info.elev);
        $('.ul-carInfo .s-pos').html(t.icons[info.dtAlias].text);
        t._geocoderLocation(info.point);
    },
    map_addTrack: function(date) {
        var t = this;
        var sid = $('#txt-carSid').val();
        var url = mData.vehicleTrack + '?sid=' + sid + '&date=' + date;
        $.getJSON(url, function(data) {
            if (data && data.line && data.line.length) {
                var lineData = data.line;
                var pointArr = [];
                var len = lineData.length;
                // var pointArr = [
                //     new BMap.Point(116.399, 39.910),
                //     new BMap.Point(116.405, 39.920),
                //     new BMap.Point(116.425, 39.900)
                // ];
                $.each(lineData, function(i, v) {
                    pointArr.push(new BMap.Point(v.lng, v.lat));
                });

                t.polyline = new BMap.Polyline(pointArr, {
                    strokeColor: "blue",
                    strokeWeight: 3,
                    strokeOpacity: 0.8
                });

                t.startPot = t._newMarker(new BMap.Point(lineData[0].lng, lineData[0].lat), 'start', [5, -15]);
                t.endPot = t._newMarker(new BMap.Point(lineData[len - 1].lng, lineData[len - 1].lat), 'end', [5, -15]);
                t.removeAllOverlays();
                t.map.addOverlay(t.polyline);
                t.map.addOverlay(t.startPot);
                t.map.addOverlay(t.endPot);
                t.map.setViewport(pointArr); //自适应到折线视野
                t.intendDetails();
            }else{
                alert('对不起，没有车辆当前日期的轨迹信息记录...');
            };
        });
    },
    map_showAlarm: function() {
        var t = this;
        var $popAlarm = $('#popboxAlarmList');
        $popAlarm.show();
        $popAlarm.find('.s-close').click(function() {
            $popAlarm.hide();
        });
    },
    removeAllOverlays: function() {
        var t = this;
        t.map.clearOverlays();
        t.closeInfoWindow();
    },
    closeInfoWindow: function() {
        var t = this;
        $('.BMap_pop').remove(); //无内置方法，通过class清除地图上的window
    },
    removeMarker: function() {
        var t = this;
        t.marker && t.map.removeOverlay(t.marker);
    },
    removePolyline: function() {
        var t = this;
        t.polyline && t.map.removeOverlay(t.polyline);
    },
    backReset: function() {
        var t = this;
        $('.searchbox').removeClass('search-focus');
        $('.listbox').hide();
        $('.list-after').addClass('ul-list-b');
        t.listIx = 0;
    },
    intendDetails: function() {
        $('.detailsbox').removeClass('details-now');
    },
    toggleDetails: function() { //
        $('.h3-carInfo').click(function() {
            $('.detailsbox').toggleClass('details-now');
        });
    },
    searchNearByKey: function() { //搜索周边事件
        var t = this;
        var $popNear = $('#popboxNear');
        $('.a-around').click(function() {
            $popNear.show();
            return false;
        });
        $popNear.find('.s-close').click(function() {
            $popNear.hide();
        })
        $('.a-searchLocal').click(function() {
            var key = $('.txt-localKey').val();
            t.marker && t.searchLocal(t.marker, key);
            $popNear.hide();
            return false;
        })
    },
    searchLocal: function(point, key) { //周边搜索
        var t = this;
        //t.map_init();
        var local = new BMap.LocalSearch(t.map, {
            renderOptions: {
                map: t.map,
                autoViewport: true
            },
            onSearchComplete: function(res) {
                t.map.clearOverlays();
                t.map.addOverlay(t.marker); //清除覆盖物除了车辆点之外
                //window.console && console.log(res._pois);
                if (res._pois.length) {
                    t.intendDetails();
                } else {
                    alert('对不起，没有搜索到相关的建筑或物体！');
                }
            }
        });
        //var bounds = t.map.getBounds();
        var bounds = t._getSearchBounds();
        local.searchInBounds(key, bounds);
    },
    _getSearchBounds: function() { //获取marker附近bounds
        var t = this;
        var point = t.marker;
        var lng = point.point.lng,
            lat = point.point.lat;
        var swPoint = new BMap.Point((1000000 * lng - 10000) / 1000000, (1000000 * lat - 10000) / 1000000);
        var nePoint = new BMap.Point((1000000 * lng + 10000) / 1000000, (1000000 * lat + 10000) / 1000000);
        return new BMap.Bounds(swPoint, nePoint);
    },
    focusSearch: function() {
        var t = this;
        $('.txt-search').focus(function() {
            $('.searchbox').addClass('search-focus');
            $('.listbox').show();
        }).keyup(function(e) {
            t._keyEvent(this);
        });;
    },
    oldVal: '',
    _keyEvent: function(o) {
        var t = this;
        var $ulSearchList = $('#ul-searchList');
        var val = $.trim($(o).val());
        var oldVal = t.oldVal;
        if (val == '') {
            $ulSearchList.hide();
            t.oldVal = '';
            return;
        };
        if (val != oldVal) {
            $.getJSON(mData.searchList + val, function(data) {
                window.console && console.log(data);
                var cHtml = '';
                if (data && data.length) {
                    $.each(data, function(i, v) {
                        cHtml += '<li class="li-chi" id="' + v.id + '"><span>' + v.text + '</span></li>';
                    });
                } else {
                    cHtml = '<li class="li-noResult">暂无符合条件的车辆...</li>';
                }
                $ulSearchList.html(cHtml).show();
                t.chiLiClick($ulSearchList); //绑定li-chi事件
                t.oldVal = val;
            })
        }
    },
    backToMap: function() {
        var t = this;
        $('.s-back').click(function() {
            t.backReset();
        });
    },
    listIx: 0,
    parLiClick: function(par) {
        var t = this;
        var ix = ++t.listIx;
        if ($('#list-' + ix).length == 0) {
            $('.listbox').append(' <ul id="list-' + ix + '" class="ul-list list-after ul-list-b"></ul>');
        }
        var $ul = $('#list-' + ix);
        $(par).find('.li-par').click(function() {
            var id = $(this).attr('id').split('_')[1];
            $.getJSON(mData.vehiclesList + '?orgId=' + id, function(data) {
                window.console && console.log(data);
                var cHtml = '';
                if (data && data.length) {
                    $.each(data, function(i, v) {
                        cls = v.leaf * 1 ? 'li-chi' : 'li-par';
                        sidstr = v.sid ? 'sid="' + v.sid + '"' : '';
                        cHtml += '<li class="' + cls + '" id="' + v.id + '" ' + sidstr + '><span>' + v.text + '</span></li>';
                    });
                }
                cHtml += '<li class="li-back"><span class="s-backList">返回上一级</span></li>';

                $ul.html(cHtml).removeClass('ul-list-b');

                t.chiLiClick($ul); //绑定li-chi事件
                t.parLiClick($ul); //绑定li-par事件

                $ul.find('.s-backList').click(function() {
                    $ul.addClass('ul-list-b');
                    t.listIx--;
                });
            });
        });
    },
    chiLiClick: function(par) {
        var t = this;
        $(par).find('.li-chi').click(function() {
            var id = $(this).attr('id').split('_')[1];
            var sid = $(this).attr('sid');
            var text = $(this).text();
            $.getJSON(mData.vehicleInfo + id, function(data) {
                var data = data.data;
                t.backReset();
                t.intendDetails();
                window.console && console.log(data);
                if (data && data.length) {
                    $('.detailsbox').addClass('details-show');
                    var markerInfo = data[0];
                    t.map_addMarker(sid, text, markerInfo);
                } else {
                    alert('暂无对应车辆位置信息！');
                }
            });

        });
    },
    ajaxList: function() {
        var t = this;
        $.getJSON(mData.vehiclesList, function(data) {
            window.console && console.log(data);
            if (data && data.length) {
                var pHtml = '';
                $.each(data, function(i, v) {
                    cls = v.leaf * 1 ? 'li-chi' : 'li-par';
                    sidstr = v.sid ? 'sid="' + v.sid + '"' : '';
                    pHtml += '<li class="' + cls + '" id="' + v.id + '" ' + sidstr + '><span>' + v.text + '</span></li>';
                });
                $('#list-0').html(pHtml);
                t.parLiClick($('#list-0')); //绑定li-par事件
                t.chiLiClick($('#list-0')); //绑定li-chi事件
            }
        });
    }
}
mMap.init();
