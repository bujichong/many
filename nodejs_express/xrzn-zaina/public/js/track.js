require.config({
    paths: {
		BMap: 'map/BMap',
		drawing: 'map/drawing', //鼠标绘制
		distance: 'map/distance', //测距
		rectangleZoom: 'map/rectangleZoom', //拉框放大
		TextIconOverlay: 'map/TextIconOverlay',
		MarkerClusterer: 'map/MarkerClusterer',//点聚合
		searchInfoWindow: 'map/searchInfoWindow',//点聚合
		lushu : 'map/LuShu',//路书
		jquery : 'jquery-1.8.2.min',
		param : 'param',
		jqExtend : 'plugin/jquery.extend',//cookie,color,soChange
		pub : 'plugin/pub',
		jsrender : 'jsrender',
		sobox : 'plugin/jquery.sobox',
		soTree : 'plugin/jquery.soTree',
		jqExtend : 'plugin/jquery.extend',
		jqExtend : 'plugin/jquery.extend',
		my97 : 'my97/WdatePicker'
    },
	shim: {
		BMap: {exports: 'BMap'},
		drawing: {deps: ['BMap'],exports: 'drawing'},
		distance: {deps: ['BMap'],exports: 'distance'},
		rectangleZoom: {deps: ['BMap'],exports: 'rectangleZoom'},
		TextIconOverlay: {deps: ['BMap'],exports: 'TextIconOverlay'},
		MarkerClusterer: {deps: ['BMap'],exports: 'MarkerClusterer'},
		searchInfoWindow: {deps: ['BMap'],exports: 'searchInfoWindow'},
		lushu : {deps: ['BMap'],exports: 'lushu' },
		jquery : {exports : 'jquery'},
		param : {exports : 'param'},
		jsrender : {exports : 'jsrender'},
		sobox : ['jquery'],
		soTree : ['jquery'],
		my97 : ['jquery'],
		jqExtend : ['jquery'],
		pub: ['jquery','validate']
	}
});
 
define(['jquery','map.base','map.ext','tools','jsrender','config','my97','jqExtend','sobox','soTree'], function($,iMap,eMap,$T) {

var track = {
	init : function () {
		var that = this;
		$('.tabListBox').soChange({
			thumbObj : '.s-tabTitle',
			thumbNowClass : 's-tabTitle-now',
			slideTime : 0,
			thumbOverEvent : false,
			autoChange : false
		});

		that.setTxtDate();//设置日期时间
		that.loadOvercarList();//初始化树
		that.controlToFilter();//绑定列表选择事件
		that.controlSelect();//绑定列表选择事件
		that.controlDel();//绑定列表删除事件
	},

	/*************  初始化事件***************/
	setTxtDate : function () {
		var that = this;
		$('.hk_trackTime').addClass('Wdate');
		$('#trackStartTime').click(function () {
			WdatePicker({dateFmt:'yyyy-MM-dd HH:mm',readOnly:true,maxDate:'#F{$dp.$D(\'trackEndTime\',{m:-15});}',isShowClear:false,onpicked : function () {
				checkTime('trackStartTime','trackEndTime',2);
			}});
		});
		$('#trackEndTime').click(function () {
			WdatePicker({dateFmt:'yyyy-MM-dd HH:mm',readOnly:true,minDate:'#F{$dp.$D(\'trackStartTime\',{m:15});}',isShowClear:false,onpicked : function () {
				checkTime('trackEndTime','trackStartTime',-2);
			}});
		});

		function checkTime(a,b,gap) {

			var d = $dp.$D(a,{d:gap});
			var newD = d.y+'-'+('0'+d.M).slice(-2)+'-'+('0'+d.d).slice(-2)+' '+('0'+d.H).slice(-2)+':'+('0'+d.m).slice(-2);
			var newN = newD.replace(/\D/g,'');

			var ed = $('#'+b).val();
			var newE = ed.replace(/\D/g,'');

			var p = gap>0?(newE-newN)>0:(newN-newE)>0;

			p&&$('#'+b).val(newD);
			$T.setCookie('tTime_'+$('#'+a).attr('name'),$('#'+a).val());//cookie选择的时间
			p&& $T.setCookie('tTime_'+$('#'+b).attr('name'),newD);//cookie选择的时间
		}

		var now = new Date();
		var yesterday = new Date();
		var yesterday_milliseconds=now.getTime()-1000*60*60*24;
		yesterday.setTime(yesterday_milliseconds);

		var nowStr = $.getFullDate(now);
		var yesterdayStr = $.getFullDate(yesterday);
		$('input[name="start"]').val(yesterdayStr);//设置为上一天
		$('input[name="end"]').val(nowStr);//设置为今天

		var cookieStart = $T.getCookie('tTime_start');
		var cookieEnd = $T.getCookie('tTime_end');
		cookieStart&&$('input[name="start"]').val(cookieStart);//恢复时间为cookie中的时间
		cookieEnd&&$('input[name="end"]').val(cookieEnd);

	},

	/*************  列表选择车辆事件***************/
	selCar : [],
	treeWrap : $('#loadTree'),
	carWrap : $('.ul-filterCarList'),
	selectTreeNodes : null,
	treeData : [{"id":"p0","leaf":0,"pid":"0","sid":null,"text":"我的设备"}],
	loadOvercarList : function () {
		var that = this;
		$.get($c.vehicleList,function (data) {
			if (data.length) {
				$.each(data,function (i,v) {
					that.treeData.push({
						id : 'c'+i,
						leaf : 1,
						pid : 'p0',
						sid : v.sid,
						state : v.state,
						plateNum : v.plateNum,
						text : v.vehicleNo+'/'+v.plateNum
					});
				});
				$treeInfo.data = that.treeData;//缓存树的列表数据到全局
				that.loadTree();
				that.initAddCarItem();
			};
		});
	},
	carTree : null,
	loadTree : function () {
		var that = this;
		that.carTree = that.treeWrap.soTree({
			data : that.treeData,
			dataSet : false,
			//hideId:[9,22],
			//liExtendHtml : '<em class="em_track" title="轨迹跟踪"></em>',
			checkbox : true,
			onRenderAfter : function (data) {
			},
			onSelect:function (node,nodeData) {
				that.carWrap.find('.span_t').removeClass('span_t_selected');//清除筛选列表里的当前
				that.showTrack(nodeData.sid,nodeData.text);
			},
			onClick : function () {
				that.selectTreeNodes = that.carTree.getNodesData();
				if (that.selectTreeNodes.length) {
					$('.treeOp').animate({'bottom':'0px'});
				}else {
					$('.treeOp').animate({'bottom':'-30px'});
				}
			}
		});
	},
	initAddCarItem : function () {
		var that = this;
		var checkedSid = window.location.href.split('?sid=')[1];
		if (checkedSid!=='') {
			var chkedData = that.carTree.getNodesDataByAttr({sid:checkedSid});
			chkedData.length&&that.addCarItem(chkedData);
		}
	},
	addCarItem : function (nodes) {
		var that = this;
		$('.s-filterTitle').trigger('click');
		$('.ul_tree .li-noResult').hide();
		$.each(nodes,function () {
			var node = this;
			if ($.arrHasVal(that.selCar,node.sid)==-1) {
				that.selCar.push(node.sid);
				var $item = $.format('<li data-text="{text}" data-sid="{sid}" class="li-car"><b class="b_chk"></b><span class="span_t">{text}</span></li>',{
					sid : node.sid,
					text : node.text
				});
				that.carWrap.prepend($item);
				var $itemLi = that.carWrap.find('li:first');
				that.carItemEvent($itemLi);
				$itemLi.animate({backgroundColor : 'white'},1000);
			}else {
				var $li = $('.li-car[data-sid="'+node.sid+'"]');
				$li.css({background:'#fad383'}).animate({backgroundColor : 'white'},1000);
			}
		});
		$('.filterOp').animate({'bottom':'0px'});
		window.console && console.log(that.selCar);
	},
	removeCarItem : function () {
		var that = this;
		var $chked = that.carWrap.find('.b_checked');
		$.each($chked,function () {
			var $li = $(this).parent('.li-car');
			var sid = $li.data('sid');
			var i =$.arrHasVal(that.selCar,sid);
			if (i >-1) {
				that.carWrap.find('li[data-sid="'+sid+'"]').remove();
				that.selCar.splice(i,1);
			}
		});
		if (that.selCar.length==0) {
			$('.filterOp').animate({'bottom':'-30px'});
			$('.ul_tree .li-noResult').show();
		}
	},
	carItemEvent : function ($item) {
		var that = this;
		var sid = $item.attr('data-sid');
		var text = $item.attr('data-text');
		$item.find('.b_chk').click(function () {
			$(this).toggleClass('b_checked');
		});
		$item.find('.span_t').click(function () {
			$('.span_t').removeClass('span_t_selected');
			$(this).addClass('span_t_selected');
			that.showTrack(sid,text);
		});
	},
	controlToFilter : function () {
		var that = this;
		$('.s-controlToFilter').click(function () {
			var selectNodes = that.carTree.getNodesData();
			that.addCarItem(selectNodes);
		});
	},
	controlSelect : function () {
		var that = this;
		$('.s-controlSelAll').click(function () {
			if (that.carWrap.find('.b_chk').length!==that.carWrap.find('.b_checked').length) {
				that.carWrap.find('.b_chk').addClass('b_checked');
			}else {
				that.carWrap.find('.b_chk').removeClass('b_checked');
			}
		});
	},
	controlDel : function () {
		var that = this;
		$('.s-controlDel').click(function () {
			that.removeCarItem();
		});
	},

	during : {//间隔时间
		s10 : 10,//10s
		s30 : 30,//30s
		m1 : 60,//1min
		m2 : 120,//2min
		m5 : 300,//5min
		m10 : 600,//10min
		m15 : 900,//15min
		m20 : 1200,//20min
		m30 : 1800,//30min
		h1 : 3600//1hour
	},
	carName : null,
	sendData : null,
	sePos : null,//起始终止pots
	roadPos : null,//运动轨迹数组
	roadPosLen :null,//运动轨迹数组长度
	resetTrack : function () {///
		var that = this;
		that.sendData = null;
		that.sePos = null;
		that.roadPos = null;
		that.roadPosLen = null;
		eMap.clear('overlays');
	},
	showTrack : function (sid,carName,start,end) {///
		var that = this;

		that.resetTrack();//重置现场
		var params = {
			sid : sid,
			start : start||$('input[name="start"]').val(),
			end : end||$('input[name="end"]').val()
		};
		//window.console && console.log(params);
		that.sendData = params;
		$.reqUrl($c.searchTrack,params,function(rst){//远程请求符合条件的轨迹
			//console.info(rst.data.roadArr);
			//var rst = trackData;
			if (rst.data.roadArr.length>0) {
				that.addDetailsTrack(rst.data.roadArr);
				if (pagePos=='track') {
					//$('.trackBox').css({bottom:'58px'});
					//$('.playerbox').animate({'bottom':'0px'},300);
				}
			}else{
				//$.sobox.alert('提示','没有搜索到此时间段内有历史运行轨迹！');
				$T.popTip({
					tips : [{type:'normal',content:'<b class="red">'+$T.switchSid(sid)+'</b> 此时间段内没有历史运行轨迹！'}],
					width : 320
				});
			}
		});
	},

	addDetailsTrack : function (roadArr) {///
		//window.console && console.log('addDetailsTack',roadArr);
		var that = this;
		var scRoadsArr = that.getRoadlineByGap(roadArr , that.during.m15);//获得带时间间隔的路段数组
		var lines= that.addLines(scRoadsArr);//添加路段返回 {lineArr : line对象数组, posArr: 所有途径点lnglat数组，做轨迹播放路径 , timeArr : 所有位置点对应的时间戳 }
		//window.console && console.log(lines);
		var overlaysArr = lines.lineArr;//添加路径线
		that.roadPos = lines.posArr;//赋值轨迹路径点
		that.addStartEndPots(that.roadPos,overlaysArr);//添加始末点
		//window.console && console.log(that.playerTime,that.startTime);
		iMap.addOverlays(overlaysArr);
		iMap.setFitView(overlaysArr);
	},
	getRoadlineByGap : function (arrs,gapTime) {///
		var that = this;
		var arrLen = arrs.length;
		var backArr = [];
		var gapSum = 0,gap = [0];//间断点和间断位
		for (var i = 0; i < arrLen-1; i++) {
			var duringS = (arrs[i+1].time-arrs[i].time)/1000;//相邻2个点的时间间隔，单位:s
			if (duringS>gapTime) {//如果大于预设间隔
				gap.push(i+1);
				gapSum++;
			}
		};

		gap.push(arrLen);
		var gapLen = gap.length;
		for (var i = 0; i < gapLen-1; i++) {
			backArr.push(arrs.slice(gap[i],gap[i+1]));//返回分段pots数组
		}
		return backArr;
	},
	addLines : function (arrs) {//根据pots数组返回多条分段线///
		var that = this;
		var sl = arrs.length;
		var lineArr = [],posArr = [],breakArr = [];
		var dataLen = 0;
		for (var j = 0; j < sl; j++) {
			var roadPos = [];
			$.each(arrs[j],function (i,v) {
				var pos = iMap.born.lngLat(v.bLng,v.bLat);
				roadPos.push(pos);
				posArr.push(pos);
				if (v.alarm) {
					window.console && console.log('a');
					this.no = dataLen;
					breakArr.push(this);
					//breakNo++;
				}
				dataLen++;
			});
			var roadLine = iMap.born.polyline(roadPos,$.extend(iMap.shape.polyline,{
				id:'roadLine_'+j,
				strokeColor : $T.color[2]
			}));
			lineArr.push(roadLine);
		}
		window.console && console.log('共有报警点：',breakArr.length,'个');
		var breakArr = that.addBreakPots(breakArr);
		lineArr = lineArr.concat(breakArr);

		//window.console && console.log(lineArr);
		return {lineArr:lineArr,posArr:posArr};
	},
	addBreakPots : function (breakArr) {//
		var that = this;
		var breakPotsArr=[];
		if (breakArr.length) {
			$.each(breakArr,function (i,v) {
				var breakPot = iMap.born.marker(iMap.born.lngLat(v.lng,v.lat),{
					offset: iMap.born.size(0,-8),
					icon : iMap.born.icon({
						url : '/images/work/i-break.png',
						size : {w:23,h:23}
					}),
					title : v.time
				});
				breakPotsArr.push(breakPot);
			});

		}
		return breakPotsArr;
	},
	addStartEndPots : function (roadPos,overlaysArr) {//添加始末pot
		var that = this;
		var roadPosLen = roadPos.length-1;
		that.roadPosLen = roadPosLen;
		that.sePos = [roadPos[0],roadPos[roadPosLen]];
		var startIcon = iMap.born.marker(roadPos[0],{
			//id:'pot'+$p.potIdO__O+'0',
			offset: iMap.born.size(-16,-28),
			icon : iMap.born.icon({
				url : '/images/work/linepotse.png',
				size : {w:40,h:33},
				imageOffset  : {x:0,y:0}
			}),
			title : '起点'
		});
		var endIcon = iMap.born.marker(roadPos[roadPosLen],{
			//id:'pot'+$p.potIdO__O+'0',
			offset: iMap.born.size(-16,-28),
			icon : iMap.born.icon({
				url : '/images/work/linepotse.png',
				size : {w:40,h:33},
				imageOffset  : {x:0,y:-34}
			}),
			title : '终点'
		});

		overlaysArr.push(startIcon);
		overlaysArr.push(endIcon);
	}


}

return track;
//track.init();

});
