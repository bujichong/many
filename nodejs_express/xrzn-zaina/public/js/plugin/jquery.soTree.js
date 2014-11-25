;(function ($) {
	$.fn.extend({
		'soTree':function (o) {
			var o= $.extend({
				type : 'json',//json,stepJson,html
				data : null,//直接赋值data,而非getJson获取，适用于json模式
				style : 'html',//html,append,
				id : null,
				cls : null,//自定义class
				url : null,//当url不为空，则tree以json格式调入数据，否则tree为html格式
				rootId:'0',//根节点id，只在stepJson方式中开启
				rootText:'根节点',//根节点文本，只在stepJson方式中开启
				rootHide:false,//根节点是否隐藏，只在stepJson方式中开启
				rootExpand:true,//根节点是否默认展开，只在stepJson方式中开启
				slide : false,//是否开启收缩动画
				expand : true,//默认展开
				liExtendHtml : '', //每个节点扩充的html内容
				checkbox : false,//默认不带选择框
				checked : false,//默认不处于选择状态
//				forceChecked : false,//强制勾选
//				forceUnChecked : false,//强制都不勾选
				dataSet : true,//是否接收数据对节点状态的控制
				hideId:[],//设置隐藏节点，以id为标识，数组的形式分开，如[10,22],表示当前id为10与22的节点被隐藏
				collapsePar:[],//默认单独收缩的父节点
				expandPar:[],//默认单独展开的父节点
				onSuccess : function () {},//数据加载成功事件
				onStepSuccess : function () {},//分步时数据加载成功事件
				onRenderAfter : function (){},//树渲染完成后执行事件
				onChecked : function () {},//被选中事件
				onCancelChecked : function () {},//取消选中事件
				onCheck : function () {},//选中事件
				onExpand : function () {},//节点展开事件
				onCollapse : function () {},//节点收缩事件
				onSelect : function () {},//被点选事件
				onClick : function () {}//点击事件（所有节点）
			}, o || {});

			var $this=$(this),url = o.url;
			var treeId = o.id ||'ul_soTree_'+Math.floor(Math.random()*10e12);

			var $E = {
				afterLoadData : function (obj,parChecked,topObj) {//加载tree表现及事件函数
					var that = this;
					//obj = obj.tagName;
					//alert();
					var $allLi = $('li',obj);
					$allLi.data('isleaf',true);
					var $lipar = $('li',obj).filter(function () {
						return $('ul',this).length||$(this).data('leaf')==0;
					});
					//$('li:has(ul)',obj)
					$lipar.addClass('li_par').data('isexpand',true).data('isleaf',false).data('incomplete',false);//有ul子节点添加 li_par 类名标识
					$('li.li_par>.em_op',obj).addClass('em_par');//有ul子节点的li对应em添加class，添加加减号操作图标
					$('li.li_par>.span_t',obj).addClass('span_par');//有ul子节点的li对应span添加class，添加文件夹图标
					if (o.type != 'stepJson') {
						$('li:last',obj).addClass('li_last');
					}//末尾li添加 li_last 类名标识
					$('ul',obj).each(function () {
						//if (o.type != 'stepJson') {
							$(this).find('li:last').addClass('li_last');//每个ul末尾li添加 li_last 类名标识
						//}
						if ($('>li:last',this).hasClass('li_par')) {//查找到有子节点ul的末尾li，添加class，采用不同图标，去除虚线背景
							$('>li:last',this).addClass('li_parLast');//采用不同图标
							$('>li:last>ul',this).addClass('ul_chiLast');//去除虚线背景
						}
					});

					$('.em_par',obj).bind('click',function () {//点击十字图标，切换操作图标、文件夹图标、子ul状态
						var $lipar = $(this).parent();
						if (!$(this).hasClass('em_in')) {
							$lipar.data('isexpand',false);
							$(this).addClass('em_in').siblings('.span_par').addClass('span_in');
							if (o.slide) {$(this).siblings('ul').slideUp('fast');}else {$(this).siblings('ul').hide();}
						}else {
							$lipar.data('isexpand',true);
							$(this).removeClass('em_in').siblings('.span_par').removeClass('span_in').siblings('ul');
							if (o.slide) {$(this).siblings('ul').slideDown('fast');}else {$(this).siblings('ul').show();}
						}
					});

					$('.span_t',obj).bind('click',function () {
						var $lipar = $(this).parent();
						$allLi.data('isselected',false);
						$lipar.data('isselected',true);
						$('.span_t',obj).removeClass('span_t_selected');
						$(this).addClass('span_t_selected');
					});


					if (!o.expand) {//如果设置菜单为整体收缩
						$('.em_par',obj).addClass('em_in');
						$('.span_par',obj).addClass('span_in');
						$('.li_par',obj).data('isexpand',false);
						$('ul',obj).hide();
						if (o.expandPar.length) {//默认单独展开的父节点
							$.each(o.expandPar,function (i,v) {
								if ($('#'+v,obj).length) {
									$('#'+v,obj).data('isexpand',true);
									$('#'+v+'>.em_par:first',obj).removeClass('em_in');
									$('#'+v+'>.span_par:first',obj).removeClass('span_in');
									$('#'+v+'>ul',obj).show();
								}
							});
						}
					}else {
						if (o.collapsePar.length) {//默认单独收缩的父节点
							//window.console && console.log(o.collapsePar);
							$.each(o.collapsePar,function (i,v) {
								if ($('#'+v,obj).length) {
									$('#'+v,obj).data('isexpand',false);
									$('#'+v+'>.em_par:first',obj).addClass('em_in');
									$('#'+v+'>.span_par:first',obj).addClass('span_in');
									$('#'+v+'>ul',obj).hide();
								}
							});
						}
					}

					if (o.checkbox) {//如果有选择框
						var $b_chk = $('.b_chk',obj);
						$b_chk.css('display','inline');
						if (parChecked) {$b_chk.addClass('b_checked');}//如果父节点已勾选
						$b_chk.bind('click',function () {//选择框事件
							var $lipar = $(this).parent();
							if ($(this).hasClass('b_checked')) {
								$lipar.data('ischecked',false);
								$(this).removeClass('b_incomplete').removeClass('b_checked');
								$lipar.find('ul .b_chk').removeClass('b_checked');
								$lipar.find('li').data('ischecked',false);
							}else {
								$lipar.data('ischecked',true);
								$(this).addClass('b_checked');
								$lipar.find('ul .b_chk').removeClass('b_incomplete').addClass('b_checked');
								$lipar.find('li').data('ischecked',true);
							}
							//巡检选择状态 start
							var parU = $(this).parents('ul');
							that.setUlCheckState(parU);
							//巡检选择状态 over
						});
					}

					$(obj).click(function (e) {
						var topObj = topObj?topObj:obj;//是否设定了顶级操作ul
						var oo = (e.target || e.srcElement);
						//console.log(oo.nodeName.toLowerCase());
						var cellInfo  = that.funReturnInfo(oo,topObj);
						return false;
					});
				},
				setUlCheckState : function (ul) {//判断父节点的选中状态
					var $ul = ul?$(ul):$('ul',$this);
					$ul.each(function () {
						var $that = $(this);
						var cLen = $that.find('.b_chk').length;
						var dLen = $that.find('.b_checked').length;
						if (cLen == dLen) {//比较 b_chk与b_checked长度以获得状态
							$that.siblings('.b_chk').removeClass('b_incomplete').addClass('b_checked');
							$that.parent().data('incomplete',false);
						}else if (dLen>0&&cLen != dLen) {
							$that.siblings('.b_chk').removeClass('b_checked').addClass('b_incomplete');
							$that.parent().data('incomplete',true);
						}else if (dLen==0){
							$that.siblings('.b_chk').removeClass('b_checked').removeClass('b_incomplete');
							$that.parent().data('incomplete',false);
						}
					});
				},
				funReturnInfo : function (obj,topObj) {//点击事件返回数据函数
					var that = this;
					var $obj = $(obj);
					var pLi = $obj.parent('li');
					pLi = (pLi.length)?pLi : $obj;//顶级li无父节点情况就为自身
					var cellInfo = $.extend({
						childInfo : null
					},pLi.data()||{});

					if (!cellInfo.isleaf) {//非叶子节点，获得子对象信息并存于数组中
						var childInfo = [];
						//var $thisUl = $('>ul',pLi);
						var $thisULi = $('li',pLi);
						cellInfo.isexpand = !($('>em.em_par',pLi).hasClass('em_in'));
						$thisULi.each(function () {
							childInfo.push($(this).data());
						});
						cellInfo.childInfo = childInfo;
					}

					if ($obj.hasClass('b_chk')) {//当前节点为b
						if (cellInfo.ischecked) {
							o.onChecked(obj,cellInfo);
						} else {
							o.onCancelChecked(obj,cellInfo);
						}
						o.onCheck(obj,cellInfo);
					}

					if ($obj.hasClass('span_t')) {//当前节点为span
						o.onSelect(obj,cellInfo);
					}

					if ($obj.hasClass('em_par')) {//当前节点为em
						if ($obj.hasClass('em_in')) {
							o.onCollapse(obj,cellInfo);
						}else {
							o.onExpand(obj,cellInfo);
						}
					}
					o.onClick(obj,cellInfo);
					return cellInfo;
				},
				checkAexpend : function (obj) {
					var that = this;
					if (o.hideId.length>0) {
						$.each(o.hideId,function () {$('#'+this).hide();});
					}
					if (o.dataSet) {
						$('li',obj).each(function () {
							$(this).attr('data-ischecked')=='true'?($('.b_chk',this).addClass('b_checked')):($('.b_chk',this).removeClass('b_checked'));
							$(this).attr('hide')=='true'&&($(this).hide());
							if ($(this).attr('data-isexpand')=='true') {
								$('>.em_par',this).removeClass('em_in');
								$('>.span_par',this).removeClass('span_in');
								$('>ul',this).show();
							}else if ($(this).attr('data-isexpand')=='false') {
								$('>.em_par',this).addClass('em_in');
								$('>.span_par',this).addClass('span_in');
								$('>ul',this).hide();
							}
						});
					}

					that.setUlCheckState();//初始化判断父节点的选中状态
				},
				renderByData : function (data) {
					var data = data;
					var tempData = [];
					var len  = data.length;
					var ul_tree = $('<ul class="ul_tree"></ul>');
					ul_tree.attr('id',treeId);
					o.cls&&ul_tree.addClass(o.cls);
					var checked = o.checked;
					o.onSuccess(data);
					for (var i = 0; i < len; i++) {
						var dataCell = {
							id:data[i].id,
							pid:data[i].pid,
							text:data[i].text,
							state : data[i].state,
							//ischecked:data[i].ischecked,
							//isexpand:data[i].isexpand,
							isHide:data[i].hide
						};
						var dataHtml = '';
						for (k in data[i]) {
							dataHtml += 'data-'+k+'="'+data[i][k]+'" ';
						}
						dataHtml += 'data-isselected=false ';
						var ulLi = $(ul_tree).find('li'),lkey =1;
						var isHideS = '',liStateCls='',sStateCls = '';
						//console.log(dataCell.ischecked=='false');
						isHideS = dataCell.isHide===true?' style="display:none;"':'';
						liStateCls = 'li_'+state[dataCell.state];
						sStateCls = 'span_'+state[dataCell.state];
						var liLen = tempData.length;
						for (var j = 0; j < liLen; j++) {
							if ( dataCell.pid == tempData[j]) {//是否有父节点pid，如果有，添加到对应父节点下
								var liId = tempData[j];
								var $li = ul_tree.find('#'+liId);
								if ($li.find('>ul').length) {//如果已经有了ul
									$li.find('>ul').append('<li id="'+dataCell.id+'" pid="'+dataCell.pid+'"'+isHideS+dataHtml+' class="'+liStateCls+'"><em class="em_op"></em><b class="b_chk"></b><span class="span_t '+sStateCls+'">'+dataCell.text+'</span>'+o.liExtendHtml+'</li>');
								}else {
									$li.append('<ul><li id="'+dataCell.id+'" pid="'+dataCell.pid+'"'+isHideS+dataHtml+' class="'+liStateCls+'"><em class="em_op"></em><b class="b_chk"></b><span class="span_t '+sStateCls+'">'+dataCell.text+'</span>'+o.liExtendHtml+'</li></ul>');
								}
								lkey = 0;//添加到已有节点下则lkey = 0
							}
						}
						if (lkey) {//如果没有找到父节点pid，添加到根节点下
							ul_tree.append('<li id="'+dataCell.id+'" pid="'+dataCell.pid+'"'+isHideS+dataHtml+' class="'+liStateCls+'"><em class="em_op"></em><b class="b_chk"></b><span class="span_t '+sStateCls+'">'+dataCell.text+'</span>'+o.liExtendHtml+'</li>');
						}
						tempData.push(data[i].id);
					}//循环判断生成树
					tempData = null;

					/*<ul class="ul_tree">
						<li><em class="em_op"></em><span class="span_t">节点1</span></li>
					</ul> json生成树的基元结构*/
					$E.afterLoadData(ul_tree,checked);
					if (o.style=='html') {
						$this.html(ul_tree);
					}else {
						$this.append(ul_tree);
					}
					$E.checkAexpend($this);
					o.onRenderAfter(data);
				},
				getNodesData : function (opt) {//返回对应类型节点(checked,unchecked,selected,all)(justleaf?)对应的属性数组(attr)
					if (typeof(opt) === 'string') {
						opt = {
							node : 'checked',
							justleaf : true,
							data : opt
						};
					}
					var o = $.extend({
						node : 'checked',//checked,unchecked,all,selected
						justleaf : true,
						data : 'all'
					},opt||{});
					var $li = $('li','#'+treeId);

					if (!(o.node == 'all')) {
						if (o.node == 'selected') {
							$li = $('.span_t_selected','#'+treeId).parent();
						}else {
							$li = $li.filter(function () {
								var ed = $('>.b_chk',this).hasClass('b_checked');
								return (o.node=='unchecked')?!ed:ed;
							});
						}
					}
					if ($li.length&&o.justleaf) {
						$li = $li.filter(function () {
							return !$(this).hasClass('li_par');
						});
					}
					var backData = [];
					if ($li.length) {
						$li.each(function () {
							if (o.data=='all') {
								backData.push($(this).data());
							}else {
								backData.push($(this).data(o.data));
							}
						});
					}
					return backData;
				},
				getNodesDataByAttr : function (attr) {
//					var o = $.extend({
//						attr : {},// key : value
//						data : 'all'
//					},opt||{});
					var $li=$('#'+treeId).find('li');
					$.each(attr,function (k,v) {
						$li = $li.filter(function () {
							return $(this).data(k)==v;
						});
					});
					var backData = [];
					if ($li.length) {
						$li.each(function () {
//							if (o.data=='all') {
							backData.push($(this).data());
//							}else {
//								backData.push($(this).data(o.data));
//							}
						});
					}
					return backData;
				},
				showCheckbox : function (has) {
					var $b_chk = $('.b_chk','#'+treeId);
					$b_chk.css('display',has?'inline':'none');
				}
			}

			var state = {
				'0' : 'off',//失联
				'1' : 'out',//熄火
				'2' : 'stop',//停车
				'3' : 'runing'//行驶
			}
			//加载tree数据
			if (o.type== 'json') {//json格式数据
				if (o.data) {//有data数据，优先直接赋予data
					$E.renderByData(o.data);
				}else {//否则异步获取
					$.getJSON(url, function(data) {
						$E.renderByData(data);
					});
				}
			}else if (o.type == 'stepJson') {//分布json格式数据载入
				o.expand = false;
				var checked = o.checked;
				var ul_tree,rootBox;
				if (o.rootHide) {//根节点隐藏，则tree父盒子不同
					ul_tree = $('<ul class="ul_tree"></ul>');
					ul_tree.attr('id',treeId);
					o.cls&&ul_tree.addClass(o.cls);
					rootBox = $(ul_tree);
				}else {
					ul_tree = $('<ul class="ul_tree"></ul>');
					var rootHtml = '<li id='+o.rootId+' class="li_par"><em class="em_op em_par"></em><b class="b_chk"></b><span class="span_t span_par">'+o.rootText+'</span><ul></ul></li>';
					ul_tree.append(rootHtml);
					rootBox = $('ul',ul_tree);
				}

				var rootUrl = url+'?id='+o.rootId;
				$.getJSON(rootUrl, function(data) {//初次加载
					var data = data;
					var len  = data.length;
					o.onSuccess(data);
					for (var i = 0; i < len; i++) {
						var dataCell = {
							id:data[i].id,
							pid:data[i].pid,
							text:data[i].text,
							nodetype:data[i].nodetype,
							ischecked:data[i].ischecked,
							isHide:data[i].hide
						};
						var nodeClass = dataCell.nodetype?'class="li_par"':'';
						var ischeckedS = '',isHideS = '';
						//if (dataCell.ischecked===true) {ischeckedS = ' ischecked="true"';}else if(dataCell.ischecked===false){ischeckedS = ' ischecked="false"';}
						if (dataCell.isHide===true) {isHideS = ' style="display:none;"';}
						rootBox.append('<li id="'+dataCell.id+'" pid="'+dataCell.pid+'" '+nodeClass+ischeckedS+isHideS+'><em class="em_op"></em><b class="b_chk"></b><span class="span_t">'+dataCell.text+'</span></li>');
					}
					$E.afterLoadData(ul_tree,checked);
					$this.append(ul_tree);
					$E.checkAexpend(ul_tree);
					if ((!o.rootHide)&&o.rootExpand) {//如果节点收缩并且根节点不隐藏
						rootBox.show();
						$('.em_op:first',ul_tree).removeClass('em_in');
					}
					$('.em_par',ul_tree).live('click',function () {//点击可扩展节点，进行异步请求数据
						var loadLi = $(this).parent();
						if (loadLi.find('ul').length==0) {//如果未加载过，进行加载
							var checked = o.checked,topUl = ul_tree;
							if ($('.b_chk:first',loadLi).hasClass('b_checked')) {checked = true;}//判断当前可扩展节点是否被勾选，如果是，扩展后的子对象也被勾选
							var stepUrl = o.url +'?id='+loadLi.attr('id');//对应当前节点json链接
							$.getJSON(stepUrl, function(stepData) {//请求json数据
								var stepData = stepData;
								var stepLen = stepData.length;
								var stepTree = $('<ul></ul>');
								o.onStepSuccess(stepData);
								for (i = 0; i < stepLen; i++) {
									var dataCell = {
										id:stepData[i].id,
										pid:stepData[i].pid,
										text:stepData[i].text,
										nodetype:stepData[i].nodetype,
										ischecked:stepData[i].ischecked,
										isHide:data[i].hide
									};
									var nodeClass = dataCell.nodetype?' class="li_par"':'';
									var ischeckedS = '',isHideS = '';
									if (dataCell.ischecked===true) {ischeckedS = ' ischecked="true"';}else if(dataCell.ischecked===false){ischeckedS = ' ischecked="false"';}
									if (dataCell.isHide===true) {isHideS = ' style="display:none;"';}
									stepTree.append('<li id="'+dataCell.id+'" pid="'+dataCell.pid+'"'+nodeClass+ischeckedS+isHideS+'><em class="em_op"></em><b class="b_chk"></b><span class="span_t">'+dataCell.text+'</span></li>');
								}//生成ul树
								$E.afterLoadData(stepTree,checked,topUl);//加载新添加节点树所有事件
								$(stepTree).hide();//先隐藏，以便slide动画执行
								loadLi.append(stepTree);
								$E.checkAexpend(stepTree);
								if (o.slide) {$(stepTree).slideDown('fast');}else {$(stepTree).show();}
							});
						}
					});
					o.onRenderAfter(data);
				});
			}else if (o.type == 'html') {//页面已有html dom结构
				/*<ul>
					<li><span>节点1</span></li>
				</ul> html树的基元结构*/
				if ($('span',$this).length>0) {
					$('ul',$this).addClass('ul_tree');
					$('span',$this).addClass('span_t').before('<em class="em_op"></em><b class="b_chk"></b>');
					$E.afterLoadData($('.ul_tree',$this),o.checked);
					$E.checkAexpend($this);
				}else {
					alert('html树结构不正确，参考结构：<ul><li><span>节点1</span></li></ul>');
				}
			}
			return {getNodesData:$E.getNodesData , getNodesDataByAttr : $E.getNodesDataByAttr , showCheckbox : $E.showCheckbox};
		},
		'soDropTree' : function (o) {// 下拉菜单树
			var o =$.extend({
				id : null,
				treeId : null,
				cls : null,
				url : null,//url
				data : null,//data
				treeW : 200,//树盒子宽
				treeMaxH : 300,//树盒子高
				offset : [0,25],//相对对其元素偏移量
				slide : true,//是否slide显示树下拉
				expand : false,//是否默认展开
				valOpt : 'sid',//value取对应树的值
				txtOpt : 'text',//text取对应树的值
				defaultVal : null,//默认选择值
				//checkbox : true,//是否显示checkbox
				checked : false,
				dataSet : true,
				//selectHide : true,//点选隐藏树下拉菜单
				//mergeSelChk : false,//是否合并点选和勾选事件
				multiCheck : true,//是否多选，ture为返回多选结果，false为返回单选结果，此时check事件合并到select事件里

				onRenderAfter : function(){},//点击节点自定义事件
				onSelect : function(){},//点击节点自定义事件
				onCheck : function(){},//选择节点自定义事件

				onSuccess : function () {},//数据加载成功事件
				onChecked : function () {},//被选中事件
				onCancelChecked : function () {},//取消选中事件
				onExpand : function () {},//节点展开事件
				onCollapse : function () {},//节点收缩事件
				onClick : function () {}//点击事件（所有节点）
			},o||{});
			$(this).each(function () {
				var _self  = $(this);
				var url = o.url || _self.attr('data-url');
				var $sTxt = $('<span class="s-treeTxt"></span>');
				var treeboxId = o.id||'dropTreeBox_'+Math.floor(Math.random()*10e12);
				var $treebox = $('<div id="'+treeboxId+'" class="dropTreeBox" style="width:'+o.treeW+'px;max-height:'+o.treeMaxH+'px;_height:'+o.treeMaxH+'px;"></div>');
				var $close = $('<span class="s-treeClose"></span>');
				_self.hide().after($sTxt);
				$treebox.append($close);
				$('body').append($treebox);
				$treebox.hide();
				var treeId = o.treeId ||'ul_soTree_'+Math.floor(Math.random()*10e12);
				var st = null;
				if (o.data||url) {
					var v = o.defaultVal || _self.val();
					if (v==='') {$sTxt.text('请选择...');}
					var selTree = $treebox.soTree({
						id : treeId,
						style : 'append',
						cls : o.cls,
						url:url,
						data:o.data,
						checked: o.checked,
						expand:o.expand,
						dataSet : o.dataSet,
						checkbox : o.multiCheck,//多选时才有checkbox，单选时隐藏checkbox
						onRenderAfter : function (data) {
							if (v!=='') {// 有默认值时trigger点击默认值的节点
								window.console && console.log(v);
								$('li[data-'+o.valOpt+'="'+v+'"]').find('.span_t').trigger('click');
							}
							o.onRenderAfter(data);
						},
						onCheck : function (node,nodeData) {
							if (o.multiCheck&&selTree) {//只有多选时存在checkbox，也就只有多选时有onCheck事件
								var selSid = multiBack();
								o.onCheck(node,nodeData,selSid);
							}
						},
						onSelect : function (node,nodeData) {
							if (o.multiCheck) {//多选时合并select和check事件
								$(node).siblings('.b_chk').trigger('click');
							}else if(nodeData.isleaf){
								$sTxt.text(nodeData.text);
								_self.val(nodeData.sid);
								$treebox.hide();
							}
							o.onSelect(node,nodeData);
						},
						onSuccess : function (data) {o.onSuccess(data)},//数据加载成功事件
						onChecked : function (node,nodeData) {o.onChecked(node,nodeData)},//被选中事件
						onCancelChecked : function (node,nodeData) {o.onCancelChecked(node,nodeData)},//取消选中事件
						onExpand : function (node,nodeData) {o.onExpand(node,nodeData);},//节点展开事件
						onCollapse : function (node,nodeData) {o.onCollapse(node,nodeData)},//节点收缩事件
						onClick : function (node,nodeData) {o.onClick(node,nodeData)}//点击事件（所有节点）
					});

					$sTxt.click(function () {
						$treebox.setOffset(this,o.offset);
						st&&clearTimeout(st);
						if (o.slide) {
							$treebox.slideDown('fast');
						}else {
							$treebox.show();
						}
					});
					$close.click(function () {
						$treebox.hide();
					});
					// 不选择，自动隐藏树
					$treebox.mouseenter(function () {
						clearTimeout(st);
					}).mouseleave(function () {
						st = setTimeout(function () {
							$treebox.hide();
						},1000);
					});

				}

				function multiBack() {
					var selData = selTree.getNodesData();
					var selText=[],selSid=[];
					if (selData.length) {
						$.each(selData,function (i,v) {
							selText.push(v.text);
							selSid.push(v.sid);
						});
					}
					var text = selText.join(',');
					text = text==''?'请选择...':text;
					$sTxt.text(text).attr('title',text);
					_self.val(selSid.join(','));
					return selSid;
				}

				return _self;
			});

		},
		'setOffset' : function (obj,offset) {// 元素绝对定位到 位置对象 的位置，obj: 位置对象 , offset : 偏移量 [left,top]
			var _self = $(this);
			var $o = $(obj);
			var ss = offset || [0,0];
			var os = {l:$o.offset().left,t:$o.offset().top};
			_self.css({
				'position':'absolute',
				'left':(os.l+ss[0]*1)+'px',
				'top':(os.t+ss[1]*1)+'px'
			});
			return _self;
		},
		'soDropbox' : function (o) {
			var o =$.extend({
				id : null,
				offset : [0,0],
				content : null,
				hasClose : true,
				callback : function () {}
			},o||{});
			var _self = $(this);
			var $box = $('<div class="so-dropbox hide"></div>');
			var $close = $('<span class="s-dropClose"></span>');

			var timestamp =Date.parse(new Date());
			var boxId = o.id || 'soDropbox_'+timestamp+'_'+$('.dropbox').length;
			$box.attr('id',boxId);
			$('body').append($box);
			$box.append(o.content).setOffset(_self,o.offset).hide();

			if (o.hasClose) {
				$box.append($close);
				$close.click(function () {
					$box.hide();
				});
			}

			var st = null;
			_self.click(function () {
				st&&clearTimeout(st);
				$box.show();
			});

			// 不选择，自动隐藏树
			$box.mouseenter(function () {
				clearTimeout(st);
			}).mouseleave(function () {
				st = setTimeout(function () {
					$box.hide();
				},1000);
			});

			o.callback($box);

			return $box;
		}
	});

})(jQuery);







