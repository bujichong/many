require.config({
	baseUrl: '/js',
    paths: {
		jquery : 'jquery-1.8.2.min',
		param : 'param',
		jqExtend : 'plugin/jquery.extend',//cookie,color,soChange
		pub : 'plugin/pub',
		sobox : 'plugin/jquery.sobox',
		soTree : 'plugin/jquery.soTree',
		my97 : 'my97/WdatePicker',
		highstock : 'highstock.src',
		exporting : 'exporting'
	    },
	shim: {
		jquery : {exports : 'jquery'},
		param : {exports : 'param'},
		sobox : ['jquery'],
		soTree : ['jquery'],
		my97 : ['jquery'],
		jqExtend : ['jquery'],
		pub: ['jquery','validate'],
		highstock: {exports : 'highstock'},
		exporting : ['highstock']
	}
});

require(['jquery','jqExtend','soTree','sobox','highstock'],function($){
	//初始化下来树
	var $treeInfo={},$tree=$('#sid').soDropTree({
		url : '',
		offset :[0,25],
		dataSet : false,
		multiCheck : false,//单选
		onRenderAfter : function (data) {
			$treeInfo.data = data;
		}
	});
	
	$("#search").click(function(){
		var ps=$('.tableBox').vals();
		if(!ps.sid){
			$.sobox.alert('提示','请选择车辆!');
			return;
		}
		$.reqUrl("/rpt/getGpsSpeeds",ps,function(rst){
			var data=rst.data.gpsSpeeds;
		   if(!data||data.length==0){
			   $.sobox.alert('提示','该时间段无速度数据!');
			   return;
		    }
			
			$util.initStockChart({
				el:'#container',
				title:'速度曲线',
				series:[{
					name : 'GPS速度',
					data :data,
					tooltip : {valueDecimals : 2,valueSuffix: '公里/小时'},
					gapSize:1
				}]
			});
		})
	});
});