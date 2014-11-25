require.config({
    //baseUrl: '/js',
        paths: {
        jquery: 'jquery-1.8.2.min',
        config: 'config',
        sobox: 'plugin/jquery.sobox',
        soTree: 'plugin/jquery.soTree',
        jqExtend: 'plugin/jquery.extend',
        jsrender: 'jsrender',
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
define(['jquery','map.base','map.ext','tools','jsrender','config','jqExtend','soTree'], function($,iMap,eMap,$T) {
    var loadList = {
        init : function () {
            var me = this;
            me.loadOvercarList();
            me.loadPointList();
        },
        treeData : [{"id":"p0","leaf":0,"pid":"0","sid":null,"text":"我的设备"}],
        loadOvercarList : function () {
            var me = this;
            $.get($c.vehicleList,function (data) {
                if (data.length) {
                    $.each(data,function (i,v) {
                        me.treeData.push({
                            id : 'c'+i,
                            leaf : 1,
                            pid : 'p0',
                            sid : v.sid,
                            state : v.state,
                            plateNum : v.plateNum,
                            text : v.vehicleNo+'/'+v.plateNum
                        });
                    });
                    me.loadTree();
                };
            });
        },
        loadPointList : function () {
            $.get($c.pointList,function (data) {
                if (data.state&&data.data.length) {
                    $('.ul-markerList').html(
                        $('#pointTem').render(data.data)
                    );
                    var $li = $('.ul-markerList').find('li');
                    eMap.dealShapeLi($li,'pt');
                };
            });
        },
        loadTree : function () {
            var me = this;
            var inPar = $T.getCookie('inParNode'); //获取cookie中 树上收缩的父节点id
            var inParIdArr = (inPar && inPar.length > 0) ? inPar.split($c.cookieO__O) : []; //排除 inParNodeIdArr = [''];
            var $soTree = $('#loadTree').soTree({
                data : me.treeData,
                checkbox : true,
                collapsePar: inParIdArr,
                onRenderAfter: function(data) {
                    $treeInfo.data = data; //缓存树的列表数据到全局
                },
                onSelect: function(node, nodeData) {
                    var sid = nodeData.sid;
                    var $liNow = $('#' + nodeData.id);
                    $treeInfo.selectedSid = sid;
                    $('.s-tool-track').attr('href', ($c.showTrack + sid)); //给跟踪赋值sid

                    if (nodeData.isleaf) {
                        var $chk = $(node).siblings('.b_chk');
                        if ($chk.hasClass('b_checked')) {
                            eMap.getPotsPos(sid);
                        } else {
                            $chk.trigger('click'); //合并模拟勾选事件
                        }
                    }
                },
                onCheck: function(node, nodeData) {
                    var chkedSidArr = $soTree.getNodesData('sid'); //被选中车辆sid数组
                    var unChkedSidArr = $soTree.getNodesData({
                        node: 'unchecked',
                        data: 'sid'
                    }); //被选中车辆sid数组
                    $treeInfo.chkedSid = chkedSidArr.join(','); //更新被勾选车辆列表字符串
                    iMap.removePotsBySid(unChkedSidArr);//移除map上不被勾选的车辆pot
                    $.reqUrl($c.checkTmListUrl, {
                        checkedList: $treeInfo.chkedSid
                    }); //向服务器端更新被勾选的列表

                },
                onChecked: function(node, nodeData) {
                    //if (data.isleaf&&data.isselected) {//既是叶子节点，也被选中(这样就处理了被当前选中和点击的节点临时显示在地图上)
                    if (nodeData.isleaf) {
                        var potId = nodeData.sid;
                        if ($('#' + potId).length > 0) {
                            var $o = iMap.getOverCarById(potId);
                            //window.console && console.log($o);
                            iMap.setFitView($o);
                        } else {
                            eMap.getPotsPos(nodeData.sid);
                        }
                    } else {
                        var childInfo = nodeData.childInfo;
                        var childSidArr = [];
                        $.each(childInfo, function() {
                            childSidArr.push(this.sid);
                        });
                        var childSidStr = childSidArr.join(','); //获得子节点sid str
                        eMap.getPotsPos(childSidStr);//将子节点显示在地图上
                    }
                },
                onCancelChecked: function(node, nodeData) {
                    iMap.removeSearchWindows();
                },
                onCollapse: function(node, nodeData) {
                    //往cookie里插入收缩父节点
                    $treeInfo.inParNode.push(nodeData.id);
                    var inParNodeStr = $treeInfo.inParNode.join($c.cookieO__O);
                    $T.setCookie('inParNode', inParNodeStr);
                    //window.console && console.log($treeInfo.inParNode);
                },
                onExpand: function(node, nodeData) {
                    //移除cookie里展开父节点
                    $.each($treeInfo.inParNode, function(i, v) {
                        if (v === nodeData.id) {
                            $treeInfo.inParNode.splice(i, 1); //移除展开节点
                            return false;
                        }
                    });
                    var inParNodeStr = $treeInfo.inParNode.join($c.cookieO__O);
                    $T.setCookie('inParNode', inParNodeStr);
                    //window.console && console.log($treeInfo.inParNode);
                }
            });
        }

    }
    return loadList;


});
