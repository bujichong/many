require.config({
	//baseUrl: '/js',
	paths: {
		jquery : 'jquery-1.8.2.min',
		config : 'config',
		sobox : 'plugin/jquery.sobox',
		jqExtend : 'plugin/jquery.extend',// cookie,color,soChange
		md5:'md5'
	},
	shim: {
		jquery : {exports : 'jquery'},
		config : {exports : 'config'},
		md5:{exports : 'md5'},
		sobox : ['jquery'],
		jqExtend : ['jquery']
	}
});
 
define(['jquery','tools','config','sobox','jqExtend','md5'], function($,$T) {
var popO = {
	$pop : null,// 暂存当前pop对象
	/* 以下为设置弹窗自定义参数 */
	tm:{// 终端管理
		pointOp : {// 终端参数
			cls:'contPad0',
			showTitle:false,
			width : 980 , height : Math.floor($.winH*9/10)
		},
		bb808:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:Math.floor($.winH*9/10)
		},
		pic:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:Math.floor($.winH*9/10)
		}
	},
	oil:{
		tank:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:Math.floor($.winH*9/10)
		},
		oilDetail:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:Math.floor($.winH*9/10)
		},
		oilStat:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:Math.floor($.winH*9/10)
		},
		realOilLevel:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:Math.floor($.winH*9/10)
		}
	},
	rpt:{
		/**-----------行驶分析------------**/
		speedCurve:{//速度曲线
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		speedStat:{//超速统计
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		accidentData:{//事故疑点
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		/**-----------报警分析------------**/
		alarmStat:{//告警统计
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		alarmQuery:{//告警查询
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		/**-----------运行分析------------**/
		offDetail:{//离线明细
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		stopDetail:{//停车明细
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		track:{//历史轨迹
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		locDetail:{//位置明细
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		inOutAreaDetail:{//进出区域停车
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		fireUpStopDetail:{//未熄火停车
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		accDetail:{//acc分析
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		driveDetail:{//行车明细
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},

		oilQuantity:{
			cls:'contPad0',
			showTitle:false,
			width :Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
		},
		tmOnOff:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:500
		},
		/**-----------里程分析------------**/
		dayMileage:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:500
		},
		realMileage:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:500
		},
		mileageDetail:{
			cls:'contPad0',
			showTitle:false,
			width :980,height:500
		},
		showGallery : {// 查看照片
			cls : 'pop-showGallery',
			width :Math.floor($.winW*98/100),height:Math.floor($.winH*96/100),
			showTitle : false,
			offset:[0,10]
		}
	},
	sideBar:{// 右边工具栏
		newDevice : {
			cls :  'pop-newDevice',
			width:330,
			btn :[{removePop: false,callback : function ($wrap) {
				var form = $wrap.find('form');
				form.submit();
			}}]
		},
		showTrack : {// 查看车辆历史轨迹
			cls : 'contPad0',
			width :Math.floor($.winW*98/100),height:Math.floor($.winH*96/100),
			showTitle : false,
			offset:[0,10]
		}
	}
};

return popO;

});
