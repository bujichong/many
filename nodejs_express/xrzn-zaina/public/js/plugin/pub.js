/**
 * 存放页面公用变量
 */
var $ctx = {
	cmp:'湖南祥瑞智能机器有限公司',
	treeUrl : "/cmn/tree.htm",
	comboUrl : "/cmn/combo.htm",
	selectUrl : "/cmn/select.htm",
	gridUrl : "/cmn/grid.htm",
	printUrl : "/cmn/print.htm",
	printTplUrl : "/cmn/printTpl.htm",
	exportMax : 6000,
	submitTip : '您确定要提交吗?'
};
//存放页面弹出的控件
var $pop={};

var $render = {
	yesOrNo : function(rec, num, value) {
		return value ? '是' : '否';
	},
	noOrYes : function(rec, num, value) {
		return value ? '否' : '是';
	},
	/**
	 * render:$render.link("<a href='del.do?id={0}&name={1}'>删除</a>","id","name")
	 *
	 * @param url
	 *            转换的地址
	 * @param keys
	 *            参数名
	 * @returns {Function}
	 */
	link : function(url, keys) {
		if (arguments.length > 2 && keys.constructor != Array) {
			keys = $.makeArray(arguments).slice(1);
		}
		if (keys.constructor == String) {
			keys = [ keys ];
		}
		return function(r, n, v) {
			var params=[];
			for(var i=0;i<keys.length;i++){
				params[i]=r[keys[i]]||'';
			}
			return $util.format(url, params);
		};
	}
};

/**
 * 表格工具类
 */
var $grid = {
	newGrid:function(gridSelector,cfg){
		var gridDiv=$(gridSelector);
		if(gridDiv.length>1){
			$util.alert("找到"+grid.length+"个选择符为"+gridSelector+"表格,请确保唯一!");
			return;
		}
		if(cfg.isSort===false){
			$.each(cfg.columns,function(inx,col){
				col.isSort=false;
			});
		}
		if(cfg.topBar){
			cfg.toolbar={items:[]};
			$(cfg.topBar).each(function(i,item){
				var newItem={};
				$.applyIf(newItem,item);
				if(item.cls)newItem.icon=item.cls.replace("a_grid","");
				if(item.url){
					$.applyIf(newItem,{click:function(icfg){
						var url=icfg.url;
						var gm = $(gridSelector).ligerGetGridManager();
						if(icfg.rowNullMsg){
							var row=cfg.checkbox?gm.getSelecteds():gm.getSelected();
							if(row==null||row.length==0){
								$.sobox.alert('提示',icfg.rowNullMsg);
								return;
							}
							url=$util.format(url,row);
						}
						if(icfg.ajax){
							$.reqUrlEx(url, null, function(rst) {
								if (rst && rst.state)gm.loadData(true);
							}, '您确定要操作吗?');
						}else{
							$util.pop(url,icfg.text,null,null,function(){
								window.console && console.log(gm);
								gm.loadData(true);
							});
						}
					}});
				}else{
					var tmp=item.click;
					newItem.click=function(icfg){
						var gm = $(gridSelector).ligerGetGridManager(),row=cfg.checkbox?gm.getSelecteds():gm.getSelected();
						if(icfg.rowNullMsg&&(row==null||row.length==0)){
							if(icfg.rowNullMsg===true)icfg.rowNullMsg="请选择你要处理的记录!";
							$.sobox.alert('提示',icfg.rowNullMsg);
						}else{
							tmp(gm,row);
						}
					};
				}
				if(newItem.text)cfg.toolbar.items.push(newItem);
			});
			if(cfg.toolbar.items.length==0) delete cfg.toolbar;
		}
		$.applyIf(cfg,{rownumbers:true,columnWidth: 80,onSuccess:function(rst){
			if(rst.state==0&&rst.msg){
				$.sobox.alert("获取表格数据出错:"+rst.msg);
			}
		},onError:function(a,b,c){
			$.sobox.alert("提示","获取表格数据出错:请刷新该页面.");
		}});
		delete cfg.topBar;
		return gridDiv.ligerGrid(cfg);
	},
	changeParam : function(params) {
		if ($.isFunction(params)) {
			params = arguments.callee(params());
		} else if (!$.isArray(params)) {
			var tmp = [];
			$.each(params, function(k, v) {
				tmp.push({
					name : k,
					value : v
				});
			});
			params = tmp;
		}
		return params;
	},
	// 载入表格数据
	load : function(gridId, params, opt) {
		opt = opt || {};
		if (gridId) {
			var gm = $("#" + gridId).ligerGetGridManager();
			if(gm){
				gm.options.newPage=1;
				if (params)
					opt.parms = this.changeParam(params);
				gm.setOptions(opt);
				gm.loadData();
			}
		}
	},
	// 删除表格行记录
	deleteRow : function(a) {
		var url = $(a).attr("href");
		var pos = url.indexOf('#');
		var gridId = (pos > -1 ? url.substring(pos + 1) : 'gridBox')||'gridBox';
		$.reqUrlEx(a.rel, null, function(rst) {
			if (rst && rst.state)
				$grid.load(gridId);
		}, 'del');
	},
	// 获取行数据
	getData : function(gridId) {
		var gm = $("#" + gridId).ligerGetGridManager();
		return gm.getData();
	},
	addRow : function(gridId, data,filterPk) {
		var gm = $("#" + gridId).ligerGetGridManager();
		if(filterPk){
			var temp=gm.getData()||[];
			for(var i=0;i<temp.length;i++){
				if(temp[i][filterPk]==data[filterPk])return false;
			}
		}
		gm.addRow(data);
	},
	deleteSelectedRow:function(gridId){
		var manager = $(gridId).ligerGetGridManager();
		manager.deleteSelectedRow();
	},
	getRow:function(gridId,num){
		var manager = $("#"+gridId).ligerGetGridManager();
		if(!num){

		}else{
			return manager.getSelectedRow();
		}
	},
	selectRow:function(gridId,num){
		$('.l-grid-row[rowindex='+num+']',gridId).click();
	}
};
/**
 * 树工具类
 */
var $tree = {};
/**
 * 利用页面的样式作为钩子,绑定一些功能
 */
var $hook = {
	/**
	 * 页面表格查询功能绑定
	 */
	search : function(btnCls) {
		var cls = btnCls || '.hk_search';
		if ($(cls).length) {
			$(cls).click(function() {
				var data = $util.data(this);
				var scope = data.scope;
				var param=$('#' + scope).vals();
				var gId = data.grid||$('#'+data.tab+" .eventStat").attr("id");
				$grid.load(gId,param);
			});
		}
	},
	/**
	 * 页面控件初始化
	 */
	widget : function() {
		if ($('.required').length) {
			$('.required').each(function () {
				if ($(this).hasClass('hk_time')||$(this).hasClass('txt_date')) {
					$(this).addClass('txt_requireDate');
				}
				if ($(this).hasClass('hk_choice')||$(this).hasClass('txt_choice')) {
					$(this).addClass('txt_requireChoice');
				}
			});
		}
		if ($('.hk_time').length) {
			$('.hk_time').addClass('Wdate').css('width',140).each(function(){
				$(this).click(function(){
					var data = $util.data(this)||{};
					$.applyIf(data,{dateFmt:'yyyy-MM-dd HH:mm',readOnly:true});
					WdatePicker(data);
				});
			});
		}

		if($(".hk_form .btn-cancel").length){
			$(".hk_form .btn-cancel").click(function(){
				$util.closePop();
			});
		}


		if ($('.hk_date').length) {
			$('.hk_date').addClass('Wdate').each(function(){
				$(this).click(function(){
					var data = $util.data(this)||{};
					$.applyIf(data,{dateFmt:'yyyy-MM-dd',readOnly:true});
					WdatePicker(data);
				});
			});
		}

		// 下拉框初始化
		if ($("select.hk_select").length) {
			var codes = [], params = {muti:true};
			var ss = $("select.hk_select");
			ss.each(function() {
				var _sel=this;
				var data = $util.data(this);
				if (data.textTo) {
					$(this).change(
							data.textTo,
							function(e) {
								$("#" + e.data + ",[name=" + e.data + "]").val(
										$("option:checked", this).text());
							});
				}
				if(data.params){
					$.extend(params,data.params);
				}
				codes.push(data.code);
				if(data.add){
					if(data.code.indexOf('_')==0){
						$util.alert("不支持新增选项");
						return;
					}
					var add=$("<a href='#' class='a_add_param' title='新增'>新增</a>");
					$(this).after(add);
					add.click(function(){
						var html="";
						if(data.add.same===false){
							html="<div>编码:<input type='text' id='"+data.code+"_p_code' class='txt'/></div>";
						}
						html+="<div>名称:<input type='text' id='"+data.code+"_p_name' class='txt' value='"+(data.add._p_name||'')+"'/></div>";
						$util.showBox({
							boxId:'param_'+data.code,
							html:html,
							width:200,
							title:data.add.title||'参数维护',
							btns:[{text:'新增',click:function(){
								$.reqUrl("/cmn/addParam.do",{
									_p_code:$('#'+data.code+"_p_code").val(),_p_name:$('#'+data.code+"_p_name").val(),_p_desc_code:data.code
								},function(rst){
									if(rst.state){
										_sel.options[_sel.length] = new Option(rst.data.name,rst.data.code);
										_sel.options[_sel.length-1].selected=true;
									}else{
										$utile.alert(rst.msg);
									}
								});
							}}]
						});
					});
				}
			});
			$.reqUrl($.url("select:" + codes.join(',')),params, function(rst) {
				if (rst.state) {
					var data = rst.data;
					ss.each(function() {
						var mdata = $util.data(this);
						var list = data[mdata.code];
						for ( var i = 0; i < list.length; i++) {
							var d = list[i];
							var opt = new Option(d.text, d.id);
							if (d.id == mdata.initValue)
								opt.selected = true;
							$.each(d,function(k,v){
								$(opt).attr('data-'+k,v);
							});
							//opt.attrs = d;
							this.options[this.length] = opt;
						}
					});
				} else {
					alert("页面下拉框数据初始化出错!");
				}
			});
		}

		// 下拉树初始化
		if ($('.hk_combo').length) {
			$('.hk_combo').each(function() {
				var data = $util.data(this);
				data.selectBoxWidth = data.selectBoxWidth || 500;
				data.selectBoxHeight = data.selectBoxHeight || 240;
				data.width = data.width || 180;
				// data.slide===undefined&& (data.slide=false);
				if (data.tree && data.tree.code) {
					data.tree.url = $.url("tree:" + data.tree.code);
					delete data.tree.code;
				}
				if (data.code) {
					data.url = $.url("combo:" + data.code);
					if (data.isMultiSelect == true) {
						data.isShowCheckBox = true;
					}
					delete data.code;
				}
				$(this).ligerComboBox(data);
			});
		}
		// 树初始化
		if ($('.hk_tree').length > 0) {
			$('.hk_tree').each(function() {
				var data = $util.data(this);
				if (data.code) {
					data.type='json';
					data.url = $.url("tree:" + data.code);
					delete data.code;
				}
				$(this).soTree(data);
			});
		}

		// 树初始化
		if ($('.hk_tree1').length > 0) {
			$('.hk_tree1').each(function() {
				var data = $util.data(this);
				if (data.code) {
					data.url = $.url("tree:" + data.code);
					delete data.code;
				}
				$(this).ligerTree(data);
			});
		}
		// grid导出功能
		//$('.fnExport').live('click',function() {
		$('.fnExport').on('click',function() {
			var data = $(this).data("excel")||{};
			var tmp=$(this).data("load-param")||[];
			var param = {
				_export_title:data.title||''
			};
			$.each(tmp,function(k,v){
				param[v.name]=v.value;
			});
			$.applyIf(param,data.init||{});
			$util.excel(data.url, data.displays, data.names, param);
		});
	},
	/**
	 * 页面表单验证
	 */
	validate : function(formCls) {
		formCls = formCls || ".hk_form";
		if ($(formCls).length > 0) {
			$(formCls).validate(
					{
						errorPlacement : function(lable, element) {
							element.ligerTip({content: lable.html()});
						},
						success : function(lable,element) {
							element.ligerHideTip();
						},
						submitHandler : function(vform) {
							var msg = $(this.submitButton).attr("tip")|| $ctx.submitTip;
							var action = $(this.submitButton).attr("action")|| vform.action;
							$(".hk_form .txta,:input").ligerHideTip();
							var data = $util.data(vform),params;
							if (typeof (data.params) == 'function') {
								params = data.params();
							} else {
								params = data.params || {};
							}
							if ($('.hk_editor').length)DoProcess();
							$.applyIf(params, $(vform).vals());
							$.reqUrlEx(action, params, data.callback,msg);
							return false;
						}
					});
		}
	},

	/**
	 * 弹出选择页面
	 */
	pop : function(cls) {
		cls = cls || '.hk_pop';
		if($(cls).length){
			$(cls).live("click",function() {
				var data = $util.data(this);
				$pop[data.boxId]=$.sobox.pop({
					title:'请选择',
					type:'target',
					target:'#'+data.boxId,
					width:data.width||800,
					height:data.height||400
				});
				if(data.type=='grid')$grid.load(data.boxId);
				return false;
			});
			$(cls).attr("readonly","readonly");
		}
	},
	tab:function(o){
		o = o||{};
		var cls = o.cls || '.mainTabBox';
		var oneback = o.oneback || function () {};
		var callback = o.callback || function () {};
		var defaultEvent = o.defaultEvent || function () {};
		if ($(cls).length) {
			$(cls).each(function () {
				var tabCont = $('>div.tabcont_a1',this);
				var tabTitleHtml = '<h3 class="h3_tabtitle">';
				tabCont.each(function (i) {
					//alert(this.title);
					var style = $(this).attr('class');
					if (style.indexOf('style_')>-1) {
						var k = style.indexOf('style');
						var sClass = style.substring(k,(k+7));
					}else {
						var sClass = 'style_'+(i+1);
						$(this).addClass(sClass);
					}
					tabTitleHtml +='<strong class="strong_'+sClass+'"><em>'+this.title+'</em></strong>';
				});
				tabTitleHtml +='</h3>';
				//alert(tabTitle);
				$(this).prepend(tabTitleHtml);
				var tabTitle = $('.h3_tabtitle strong',this);
				tabCont.tabChange({
					thumbObj:tabTitle,
					defaultEvent:function () {defaultEvent();},
					oneback:function (index) {oneback(index);},
					callback:function (index) {callback(index);}
				});
			});
		}
	},
	tabLoad:function (o) {
		var o = o|| {};
		var cls = o.cls || '.mainTabLoad';
		$hook.tab({
			cls:cls,
			callback:function (index) {
				var id=$(cls+">div.tabcont_a1").get(index).id;
				o.clicks[id]();
			},
			defaultEvent:function () {
				var id=$(cls+">div.tabcont_a1").get(0).id;
				o.clicks[id]();
			}
		});
	},
	chart:function(cls){
		cls=cls||'.hk_chart';
		var that=$(cls);
		$(".chartSearch",that).append('<input type="button" value="搜索" class="btn" id="search">');
		$('<div id="chartbox"></div>').appendTo('body');
		$('.h3_tabtitle strong',that).click(function () {
			var kind=$(this).data("kind");
			$('.h3_tabtitle strong',that).removeClass('now');
			$(this).addClass('now');
			$('.span_s',that).hide();
			$('.span_s'+kind,that).show();
			that.data({
				kind:kind,
				chartTitle:$(this).data("title"),
				chartType:$(this).data("chart")
			});
			$('.span_s .rad:first').click();
			$('#search').click();
		});
		$('.span_s .rad').click(function(){
			var type=$(this).attr('data-chart'),title=$(this).attr('data-title');
			if(type) that.data("chartType",type);
			if(title)that.data("chartTitle",title);
		});
		$('#search').click(function(){
			var chartType=that.data("chartType"),url=that.data("url");
			$('#chartbox').chart({type:chartType,url:url});
			var param=$('#frm').vals();
			param.kind=that.data("kind");
			param.charttitle=that.data("title");
			$util.chart('#chartbox',param);
		});
		$('.h3_tabtitle strong:first',that).click();
	}
};
/**
 * 工具类
 */
var $util = {
	chart:function(target,param,url){
		var charData=$(target).data(),myChart=charData._chart,fUrl=url||charData._chartUrl;
		if(!myChart){
			this.alert("请选初始化图表");
		}else{
			var tmp=fUrl.indexOf("?")>0?"&":"?";
			myChart.setJSONUrl(fUrl+tmp+$.param(param));
			myChart.render($(target).attr("id"));
		}
		return myChart;
	},
	initStockChart:function(cfg){
		Highcharts.setOptions({global:{useUTC : false}});
		var wH =cfg.height||($(window).height()-56);
		var series=cfg.series;
		$(cfg.el).highcharts('StockChart', {
			lang:{printChart:'打印图像',weekdays:['星期日','星期一','星期二','星期三','星期四','星期五','星期六']},
			rangeSelector : {buttons:[{ type: 'hour', count: 1, text: '时' },{ type: 'day', count: 1, text: '天' },{type:'all',text:'全'}],inputEnabled: false,selected : 2},
			title : {text : cfg.title},
			chart : {height:wH},
			yAxis:{min:0},
			plotOptions:{
				series:{
					connectNulls:false,
					dataGrouping:{
						dateTimeLabelFormats:{second:['%m.%e %H:%M:%S', '%m.%e %H:%M:%S', '-%H:%M:%S'],minute:['%m.%e %H:%M', '%m.%e %H:%M', '-%H:%M'],hour: ['%m.%e %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],day: ['%Y.%m.%e', '%m.%e', '%Y.%m.%e']}
					}
				}
			},
			xAxis:{dateTimeLabelFormats:{millisecond: '%H:%M',second: '%H:%M',day:'%m.%e',month: '%y.%m'},min:1,showEmpty:false},
			tooltip:{
				headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
				style:{
					height:'300px'
				},
				useHTML:true,
				formatter:function(a){
					var txt=a.defaultFormatter.call(this,a),x=this.x;
					return "<span id='pop-highStock' style='display:block;height:100px;'>"+txt+"<b id='t"+x+"'></b>"+"</span>";
				}
			},
			series : series
		});
	},
	popTree:function(opt){
		opt=opt||{};
		var code=opt.dataSrc,treeId="popTree_"+code;
		if(!$('#'+treeId).length){
			$('body').append('<div id="'+treeId+'" style="display:none"/>');
			window['tree_'+treeId]=$('#'+treeId).soTree({
				checkbox:true,single:false,
				url:"/cmn/tree.htm?_code=@"+code,
				onClick:function(){

				}
			});
		}
		$.sobox.pop({
			title:opt.title||"请选择",
			type:'target',
			target:'#'+treeId,
			btn:opt.btn
		});
		return window['tree_'+treeId];
	},
	pop:function(url,title,width,heigth,closePop){
		var popI = $.sobox.pop({
			cls : 'pop-iframePage',
			showTitle : false,
			type:'iframe',
			title:title,
			width:width||$(window).width(),
			height:heigth||$(window).height(),
			offset:[0,12],
			iframe:url,
			drag : false,
			closePop:closePop
		});
		var str= url;
		if(str.indexOf("/")!=0){
			str=location.pathname.replace(/\/[^/]*$/,"/")+url;
			$pop[str]=popI;
		}
		if(width==null){
			$(window).resize(function(){
				var w = $(window).width(),h = $(window).height();
				popI.mask.css({width:w,height:(h-25)});
				popI.wrap.css({width:w,height:h+5,marginLeft:-w/2,marginTop:-h/2});
			});
		}
		$('body').data('popI',popI);
		//window.console && console.log($('body').data('popI'));
	},
	goTo:function(url){
		try{
			$('<a href="'+url+'"></a>').appendTo($('body')).get(0).click();
		}catch(e){
			window.location.href=url;
		}
	},
	reload:function(){
		window.location.reload();
	},
	debug : function(msg) {
		window.console && console.error(msg);
	},
	data : function(el, attrName) {
		attrName = attrName || 'data-opt';
		var data = "{}";
		var m = /({.*})/.exec($(el).attr(attrName));
		if (m)
			data = m[1];
		if (data.indexOf('{') < 0)
			data = "{" + data + "}";
		data = eval("(" + data + ")");
		return data;
	},
	/**
	 * 用于生成页面元素Id
	 */
	id : function(prefix) {
		$ctx._id = ($ctx._id || 1000) + 1;
		return (prefix || '') + $ctx._id;
	},
	/**
	 * 数组去重复
	 */
	unique : function(array) {
		for ( var i = 0; i < array.length; i++) {
			for ( var j = i + 1; j < array.length; j++) {
				if (array[j] === array[i]) {
					array.splice(j, 1);
					j--;
				}
			}
		}
	},
	opener:function(type){
		var gCallerId="_opener_"+type;
		return window[gCallerId];
	},
	showGridBox : function(cfg){$pp.showGridBox.call(this,cfg);},
	showBox : function(cfg){$pp.showBox.call(this,cfg);},
	format : function(tpl, params) {
		if (arguments.length > 2 && params.constructor != Array) {
			params = $.makeArray(arguments).slice(1);
		}
		if (params.constructor == String || params.constructor == Number) {
			params = [ params ];
		}
		function _replace(m, word) {
			var rst;
			if (Boolean(word.match(/^[0-9]+$/)) && params.constructor == Array) {
				rst = params[word * 1];
			} else {
				rst = params[word];
			}
			return rst === undefined ||rst===null ? "" : rst;
		}
		return tpl.replace(/#?\{([A-Za-z_0-9]+)\}/g, _replace);
	},
	printHtml:function(html,auto){
		var num=0,LODOP=$util.getLodop();
		LODOP.SET_PRINT_STYLE("FontSize",18);
		LODOP.SET_PRINT_STYLE("Bold",1);
		LODOP.ADD_PRINT_HTM(0,0,'210mm','297mm',html);
		if (auto){
			num=LODOP.PRINT();
		}else{
			num=LODOP.PREVIEW();
		}
		return num;
	},
	print : function(typeCode, data, auto,callback) {
		if($.isFunction(auto)){
			callback=auto;
			auto=false;
		}
		var params={typeCode : typeCode};
		if($.isPlainObject(data)){
			params.stationId=data.station_id;
			$.reqUrl($.url("printTpl"),params, function(rst) {
				var strArr = rst.data.codes.split(';');
				var newStr = $.map(strArr, function(str) {
					return str.replace(/(.*)\{(.*)\}(.*)".*"(.*)/, function(v0, v1,
							v2, v3, v4) {
						return (v1 + v3 + '"' + (data[v2]||'') + '"' + v4);
					});
				});
				var LODOP = $util.getLodop();
				eval(newStr.join(';'));
				var num=0;
				var printer=rst.data.printer;
				if(printer){
					LODOP.SET_PRINTER_INDEXA(printer);
				}
				if (auto){
					num=LODOP.PRINT()?1:0;
				}else{
					num=LODOP.PREVIEW();
				}
				if(callback)callback(num,data);
			});
		}else{
			params.dataId=data;
			$.reqUrl($.url("print"),params, function(rst) {
				var strArr = rst.data.printBills[0].codes.split(';');
				var param = rst.data.printDatas!=null?rst.data.printDatas[0]:data;
				var newStr = $.map(strArr, function(str) {
					return str.replace(/(.*)\{(.*)\}(.*)".*"(.*)/, function(v0, v1,
							v2, v3, v4) {
						return (v1 + v3 + '"' + (param[v2]||'') + '"' + v4);
					});
				});
				var LODOP = $util.getLodop();
				eval(newStr.join(';'));
				var num=1;
				var printer=rst.data.printBills[0].printer;
				if(printer){
					LODOP.SET_PRINTER_INDEXA(printer);
				}
				if (auto){
					num=LODOP.PRINT()?1:0;
				}else{
					num=LODOP.PREVIEW();
				}
				if(callback)callback(num,data);
			});
		}
	},
	excel : function(url, displays, names, param) {
		param = param || {};
		$.applyIf(param, {
			_start : '0',
			_pagin : 1,
			_limit : $ctx.exportMax,
			_export : true,
			_export_displays : displays.join(","),
			_export_names : names.join(",")
		});
		var frame = $("#export_frame");
		if (frame.length == 0) {
			frame = $("<iframe id='export_frame' class='hide' name='export_frame'></iframe>");
			$('body').append(frame);
		}
		// if (Ext.isIE) frame.src = Ext.SSL_SECURE_URL;
		var form = $("#export_form");
		if (form.length == 0) {
			form = $("<form method='post' id='export_form' target='export_frame' class='hide'></form>");
			$('body').append(form);
			if ($.browser.msie)
				document.frames["export_frame"].name = "export_frame";
		}
		form.attr("action", url);
		$.each(param, function(k, v) {
			form.append($util.format(
					"<input type='hidden' name='#{name}' value='#{value}'>", {
						name : k,
						value : v
					}));
		});
		form.submit().html("");
	},
	fmtDate:function(format,date){
			date=date||new Date();
		 	if(typeof(date)=='number'){
		 		date=new Date(date);
	        }
			var o = {
				"M+" : date.getMonth()+1, //month
				"d+" : date.getDate(), //day
				"h+" : date.getHours(), //hour
				"m+" : date.getMinutes(), //minute
				"s+" : date.getSeconds(), //second
				"q+" : Math.floor((date.getMonth()+3)/3), //quarter
				"S" : date.getMilliseconds() //millisecond
			} ;
			if(/(y+)/.test(format)) {
				format = format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
			}

			for(var k in o) {
				if(new RegExp("("+ k +")").test(format)) {
					format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
				}
			}
			return format;
	},
	getLodop:function(oOBJECT,oEMBED){
		var oOBJECT=oOBJECT||$('#LODOP').get(0),oEMBED = oEMBED||$('#LODOP_EM').get(0);
		var strHtml1 = "<div id='unInstall' class='catchTip'>未安装打印控件！点击 <a href='/down/install_lodop.exe'>这里下载打印控件</a> ，安装后刷新页面或重新进入。</div>";
		var strHtml2 = "<div id='updatePrint' class='catchTip'>打印控件需要升级!点击这里<a href='/down/install_lodop.exe'>执行升级</a>,升级后请重新进入。</div>";
		var strHtml3 = "<div class='catchTip'>注意：<br>1：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它;<br>2：如果浏览器表现出停滞不动等异常，建议关闭其“plugin-container”(网上搜关闭方法)功能;</div>";
		var LODOP = oEMBED;
		try {
			if (navigator.appVersion.indexOf("MSIE") >= 0)
				LODOP = oOBJECT;
			if ((LODOP == null) || (typeof (LODOP.VERSION) == "undefined")) {
				if (navigator.userAgent.indexOf('Firefox') >= 0) {
					if($('#unInstall').length<1)$('body').prepend(strHtml1);
				} else {
					if($('#unInstall').length<1) $('body').prepend(strHtml1);
					return LODOP;
				}
			} else if (LODOP.VERSION < "6.0.4.6") {
				if($('#updatePrint').length<1) $('body').prepend(strHtml2);
				return LODOP;
			}
			LODOP.SET_LICENSES($ctx.cmp, "956677782747490857294958093190","", "");
			return LODOP;
		} catch (err) {
			if($('#unInstall').length<1)$('body').prepend(strHtml1);
			return LODOP;
		}
	},
	fmtNum:function(num){
		if(!$.isNumeric(num)) return 0;
		var arr=(num+"").split("."),len=arr[0].length;
		if(len<4) return num;
		var all="000".substr(0,Math.ceil(len/3)*3-len)+arr[0];
		var rst=all.replace(/(\d{3})/g,"$1,").replace(/(,$)|(^0*)/g,"");
		arr[1]&&(rst+="."+arr[1]);
		return rst;
	},
	formatDate:function(currDate){
		 var xYear=currDate.getFullYear();
		 var xMonth=currDate.getMonth()+1;
		 if(xMonth<10){
		    xMonth="0"+xMonth;
		 }
		 var xDay=currDate.getDate();
		 if(xDay<10){
		    xDay="0"+xDay;
		 }
		 return xYear+"-"+xMonth+"-"+xDay;
	},
	closePop:function(fn){
		parent.window.execFn(function(p){
			var tt=location.pathname+(location.search||'');
			if(p.$pop[tt])p.$pop[tt].removePop();
		});
		if(fn)parent.window.execFn(fn);
	}
};


if($.validator){
	$.validator.addMethod("cn",function(value, element){
		return  value.match(/^[\u0391-\uFFE5]+$/);
	},"请输入中文!");
	$.validator.addMethod("nm",function(value, element){
		return  value.match(/^[\u0391-\uFFE5A-Za-z0-9]+$/);
	},"请输入合法的值!");
	$.validator.addMethod("ip",function(value, element){
		return  value.match(/^[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]\.[0-2]?[0-9]?[0-9]$/);
	},"请输入合法的IP!");
}
/*------页面初始化---------*/
$(function(){
	$hook.widget();//存放比较零碎的
	$hook.validate();
	$hook.search();
	$hook.pop();
	$hook.tab();
});
//
function execFn(fn){fn(window);}