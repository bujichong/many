require.config({
	//baseUrl: '/js',
    paths: {
		jquery : 'jquery-1.8.2.min',
		param : 'param',
		jqExtend : 'plugin/jquery.extend',//cookie,color,soChange
		pub : 'plugin/pub',
		sobox : 'plugin/jquery.sobox',
		soTree : 'plugin/jquery.soTree',
		my97 : 'my97/WdatePicker'
    },
	shim: {
		jquery : {exports : 'jquery'},
		param : {exports : 'param'},
		sobox : ['jquery'],
		soTree : ['jquery'],
		my97 : ['jquery'],
		jqExtend : ['jquery'],
		pub: ['jquery','validate']
	}
});

define(['jquery','map.base','map.ext','tools','param','my97','jqExtend','sobox','soTree'], function($,iMap,eMap,$T) {
	var oil = {
		init : function () {
			var that = this;
			that.base();
			that.initTree();
			that.changeEditArea();
			that.loadChart();
		},
		base : function () {
			$('.fn_type').switchTab('.sType',null,'type_now');
			$('.fn_type:first').click();
		},
		initTree : function () {
			var $tree=$('#sid').soDropTree({
				//cls : 'tree_carList',
				url : $p.vehiclesTreeUrl,
				offset :[0,25],
				dataSet : false,
				multiCheck : false//单选
			}); // 初始化下拉树
		},
		changeEditArea : function () {
			var rr = false;
			var $emArea = $('#em-oilArea'),$txtArea = $('#txt-oilArea');
			$('#btn-oilRepair').click(function () {
				if($(this).val()=="确定"){//修改油箱大小
					//var plateNum= $tree.getNodesData({node : 'selected',data : 'plateNum'});
					var plateNum= $(".s-treeTxt").text().split("/")[1];
					$.reqUrlEx($p.oilTankAcreage,{plateNum:plateNum, areaNum:$('#txt-oilArea').val()});	
				}
				if (!rr) {
					$emArea.hide();
					$txtArea.show().val($emArea.text());
					$(this).val('确定');
					rr = true;
				}else {
					$emArea.show().text($txtArea.val());
					$txtArea.hide();
					$(this).val('修改');
					rr = false;
				}
			});
		},
		loadChart : function () {
			var $lastTime=0,events=[],$lastEventId;
			var wH = $(window).height()-56;
			$('#search').click(function(){
				var ps=$('.tableBox').vals();
				if(!ps.sid){
					$.sobox.alert('提示','请选择车辆!');
					return;
				}
				$('#oilSideBox').animate({'width':'200px','overflow':'auto'});
				Highcharts.setOptions({global:{useUTC : false}});
				$.reqUrl($p.oilGetLevel , ps, function(rst) {
					   var data=rst.data,qty=data.qty;
					   if(!data||data.length==0){
						   $.sobox.alert('提示','该时间段无油位数据!');
						   return;
					   }
					   var points=data.points,c=[];
					   if(points){
						   for(var i=0;i<points.length;i++){
								var p=points[i];
								c.push('<li><span class="s-1">'+p.date+'</span><span class="s-2">'+p.desc+'</span></li>');
						   }
						   $("#fn_expoints").html(c.join(""));
					   }
					   
					   $(".h3-sidebar").text($(".s-treeTxt").text());
					   
					   var statInfo=data.statInfo||{};
					   $("#mil").text(statInfo.mileage);
					   $("#fuelTotal").text(statInfo.fuelTotal);
					   $("#fuelAvg").text(statInfo.fuelTotal);
					   var vehicleInfo=data.vehicleInfo||{};
					   $("#driver").text(vehicleInfo.driver);
					   $("#em-oilArea").text(vehicleInfo.tank_area);
					   
					   
						var title=qty?"油位曲线(单位:升)":"油位曲线(单位:厘米)";
						$('#stockBox').highcharts('StockChart', {
							lang:{
								printChart:'打印图像',
								weekdays:['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
							},
							rangeSelector : {buttons:[{ type: 'hour', count: 1, text: '时' },{ type: 'day', count: 1, text: '天' },{type:'all',text:'全'}],inputEnabled: false,selected : 2},
							title : {text : title},
							chart : {height:wH},
							yAxis:{min:0,max:60*7},
							plotOptions:{
								series:{
									connectNulls:false,
									dataGrouping:{
										dateTimeLabelFormats:{
											minute:['%m.%e %H:%M', '%m.%e %H:%M', '-%H:%M'],
											hour: ['%m.%e %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],
											day: ['%Y.%m.%e', '%m.%e', '%Y.%m.%e']
										}
									}
								}
							},
							xAxis:{
								dateTimeLabelFormats:{
									millisecond: '%H:%M',
									second: '%H:%M',
									day:'%m.%e',
									month: '%y.%m',
								},
								min:1,
								showEmpty:false
							},
							tooltip:{
								headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
								pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
								style:{
									height:'300px'
								},
								useHTML:true,
								formatter:function(a){
									var txt=a.defaultFormatter.call(this,a),x=this.x;
									/*
									$lastTime=this.x;
									clearTimeout($lastEventId);
									$lastEventId=setTimeout(function(){
										if(x==$lastTime){
											$.reqUrl("/oil/getLocInfo",{sid:$('#sid').val(),time:x},function(rst){
												if(rst){
													console.info(rst.data);
													var data=rst.data;
													//ACC,经度，维度，方向,实时速度，平均速度,
													$('#t'+$lastTime).text('行驶速度:'+data.cp.speed);
												}
												//console.info($('.highcharts-tooltip').eq(1).html());
											})
										}
									},2*1000);
									*/
									return "<span id='pop-highStock' style='display:block;height:100px;'>"+txt+"<b id='t"+x+"'></b>"+"</span>";
								}
							},
							series : [{
								name : '油量(升)',
								data : data.oils,
								tooltip : {valueDecimals : 2,valueSuffix: 'L'},
								gapSize:1
							},{
								name : '速度',
								tooltip : {valueDecimals : 2,valueSuffix: '公里/小时'},
								data : data.speeds,
								gapSize:1
							}]
						});
				});
			});
		}
	}

	return oil;

});
