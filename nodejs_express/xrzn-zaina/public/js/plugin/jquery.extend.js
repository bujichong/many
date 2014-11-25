//jQuery.cookie
jQuery.cookie=function(a,b,c){var d,e,f,g,h,i,j,k,l;if("undefined"==typeof b){if(i=null,document.cookie&&""!=document.cookie)for(j=document.cookie.split(";"),k=0;k<j.length;k++)if(l=jQuery.trim(j[k]),l.substring(0,a.length+1)==a+"="){i=decodeURIComponent(l.substring(a.length+1));break}return i}c=c||{},null===b&&(b="",c.expires=-1),d="",c.expires&&("number"==typeof c.expires||c.expires.toUTCString)&&("number"==typeof c.expires?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*c.expires)):e=c.expires,d="; expires="+e.toUTCString()),f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"",document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")};

//jQuery.color
(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

/* soChange 1.6.2 - simple object change with jQuery */
!function(a){a.fn.extend({soChange:function(b){function j(){f!=g&&(b.thumbObj&&a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass),b.slideTime<=0?(c.eq(f).hide(),c.eq(g).show()):("fade"==b.changeType&&(c.eq(f).fadeOut(b.slideTime),c.eq(g).fadeIn(b.slideTime)),"slide"==b.changeType&&(c.eq(f).slideUp(b.slideTime),c.eq(g).slideDown(b.slideTime))),b.callback&&b.callback(f,g),f=g),b.alwaysback&&b.alwaysback(f,g)}function k(){g=(f+1)%e,j()}var c,d,e,f,g,h,i;b=a.extend({thumbObj:null,btnPrev:null,btnNext:null,changeType:"fade",thumbNowClass:"now",thumbOverEvent:!0,slideTime:1e3,autoChange:!0,clickFalse:!0,overStop:!0,changeTime:5e3,delayTime:300,callback:function(){},alwaysback:function(){}},b||{}),c=a(this),e=c.size(),f=0,c.hide().eq(0).show(),b.thumbObj&&(d=a(b.thumbObj),d.removeClass(b.thumbNowClass).eq(0).addClass(b.thumbNowClass),d.click(function(){return g=d.index(a(this)),j(),b.clickFalse?!1:void 0}),b.thumbOverEvent&&d.hover(function(){g=d.index(a(this)),i=setTimeout(j,b.delayTime)},function(){clearTimeout(i)})),b.btnNext&&a(b.btnNext).click(function(){return c.queue().length<1&&k(),!1}),b.btnPrev&&a(b.btnPrev).click(function(){return c.queue().length<1&&(g=(f+e-1)%e,j()),!1}),b.autoChange&&(h=setInterval(k,b.changeTime),b.overStop&&c.hover(function(){clearInterval(h)},function(){h=setInterval(k,b.changeTime)}))}})}(jQuery);

/* tabChange */
$.fn.extend({
	"tabChange":function (o) {
		o= $.extend({
			thumbObj:null,//导航对象
			thumbNowClass:'now',//导航对象当前的class,默认为now
			eventClass:'eventStat',
			defaultEvent:function(){},
			callback:function () {},
			oneback:function(){}
		}, o || {});
		var _self = $(this);
		var size = _self.size();
		var thumbObj = $(o.thumbObj);
		_self.removeClass(o.eventClass).eq(0).addClass(o.eventClass);
		thumbObj.eq(0).addClass(o.thumbNowClass);
		o.defaultEvent();

		thumbObj.click(function () {
			var indx = thumbObj.index($(this));
			thumbObj.removeClass(o.thumbNowClass);
			$(this).addClass(o.thumbNowClass);
			_self.removeClass(o.eventClass).eq(indx).addClass(o.eventClass);
			return o.callback(indx);
		});
		thumbObj.each(function (i) {
			if (i>0) {
				$(this).one('click',function () {
					return o.oneback(i);
				});
			}
		});
	}
});


(function () {
	function gridF(opt) {
		this.$contain = $(opt.contain);
		this.o = opt;
		this.$box = $('<div class="infoListContain"></div>');
		this.$title = $('<h3 class="infoListHead"></h3>');
		this.$search = $('<span class="infoListSearch"></span>');
		this.$page = $('<span class="infoListPage"></span>');
		this.$body = $('<div class="infoListBody"></div>');
		this.totalW = 0;
		this.nowPage = opt.pageStart;
	}

	gridF.prototype = {
		init : function () {
			var t = this;
			var headHtml = t.bulidHead();
			t.$title.append(headHtml);//载入title的html
			if (t.o.sr.hasSr) {
				var srHtml = t.bulidSearch();
				t.$search.append(srHtml);
				t.o.sr.cls&&t.$search.addClass(cls);
				t.$title.append(t.$search);
				t.doSearch();
			}
			var len = $('.infoListContain').length+1;
			t.$box.append(t.$title).attr('id',(t.o.id?t.o.id:('infoListContain-'+len)));
			t.$box.append(t.$body);
			t.$box.append(t.bulidMore());
			t.$box.append(t.bulidReload());
			t.$contain.append(t.$box);

			t.o.url&&t.updateList(t.o.url);
		},
		bulidHead : function () {
			var t = this;
			var headHtml ='';
			$.each(t.o.columns,function (i,v) {
				var v = $.extend({display:'',name:'',width:80,align:'center' ,hide:false,cls:'',style:''},v);
				headHtml += '<span class="s-iItem s-iItem-'+v.name+' '+v.cls+'" style="width:'+v.width+'px;padding:0 '+t.o.padding+'px;'+(v.hide?'display:none;':'')+'text-align:'+v.align+';'+v.style+'">'+v.display+'</span>';
				t.totalW += v.width*1+t.o.padding*2;
				t.o.columns[i] = v;//扩展置换columns中的参数
			});
			return headHtml;
		},
		bulidSearch : function () {
			var t = this;
			if (t.o.sr.url===null) {
				t.o.sr.url = t.o.url;
			}
			return $.format('<form method="post" action="{url}"><input type="text" class="txt {txtCls}" name="{srName}" placeholder="{placeholder}" /><input type="submit" class="btn btn-submit btn-mi{btnCls}" name="btnSubmit" value="搜索" /></form>',t.o.sr);
		},
		bulidMore : function () {
			var t = this;
			if (t.o.moreUrl) {
				var $more= $('<a class="a-more" href="'+t.o.moreUrl+'" target="_blank">更 多</a>');
				if (t.o.morePop) {
					$more.click(function () {
						$.sobox.pop({
							type : 'iframe',
							iframe : opt.moreUrl,
							showTitle : false,
							width : Math.floor($.winW*19/20),height:Math.floor($.winH*9/10)
						});
						return false;
					});
				}
				return $more;
			}else {
				return '';
			}
		},
		bulidReload : function () {
			var t = this;
			if (t.o.hasReload) {
				var $reload= $('<span class="s-soGridReload" target="_blank">更 新</span>');
				$reload.click(function () {
					t.updateList(t.o.url);
				});
				return $reload;
			}else {
				return '';
			}
		},
		bulidList : function (url,loadback,data) {
			var t = this;
			if(!url) return;
			var t = this;
			if (typeof(url)=='string') {//请求地址
				if (t.o.page.hasPage) {
					var data = $.extend({page:t.nowPage,pagesize:t.o.page.pageSize},data||{});
				}
				$.getJSON(url,data,function (data) {
					if (data.rows) {
						var listHtml = t.bulidRowsByData(data.rows);
						if (t.o.page.hasPage) {
							t.doPage(data.total);
						}//添加page

						loadback(listHtml,data.rows);
					}else {
						loadback('<p class="p-noResult">暂无数据...</p>',null);
					}
				});
			}else {//直接为数据
				var rowsData = url;
				if(rowsData.length){
					var listHtml = t.bulidRowsByData(rowsData);
					loadback(listHtml,rowsData);
				}else {
					loadback('<p class="p-noResult">暂无数据...</p>',null);
				}
			}
		},
		bulidRowsByData: function (rows) {
			var t = this;
			var listHtml = '';
			$.each(rows,function (i,v) {
				var that = this;
				var even = i%2;
				listHtml += '<p class="p-iItem'+(even?' p-iItem-even':'')+'">';
				$.each(t.o.columns,function (i,v) {
					var name = that;
					var nameArr = v.name.split('.');
					var i,l = nameArr.length;
					for (i = 0; i < l; i++) {name = name[nameArr[i]];}
					name = v.render?v.render(name,that):name;
					name = name!==undefined?name:'';
					listHtml += '<span class="s-iItem s-iItem-'+v.name+' '+v.cls+'" style="width:'+v.width+'px;padding:0 '+t.o.padding+'px;'+(v.hide?'display:none;':'')+'text-align:'+v.align+';'+v.style+'">'+name+'</span>';
				});
				listHtml += '</p>';
			});
			return listHtml;
		},
		bulidPage : function (opt) {//返回分页html
			var pageHtml = $.format('<span class="s-everyItem">共<em class="red">{total}</em>条</span><span class="s-totalPage"><em class="em-nowPage red">{nowPage}</em>/<em class="em-totalPage red">{allPage}</em>页</span><span class="s-prevPage"></span><span class="s-nextPage"></span><em class="em-extendSearch"></em>',opt);
			return pageHtml;
		},
		doPage : function (total) {//添加分页及分页事件
			var t = this;
			var total = total;
			var pageSize = t.o.page.pageSize;
			var allPage = Math.ceil(total/pageSize);

			t.$page.html(t.bulidPage({
				total : total,
				pageSize : pageSize,
				allPage : allPage,
				nowPage : t.nowPage
			}));

			if (t.$title.find('.infoListPage').length==0) {
				t.$title.append(t.$page);
			}
			t.exInSearch('in');

			var $prev = t.$page.find('.s-prevPage');
			var $next = t.$page.find('.s-nextPage');
			var $ex = t.$page.find('.em-extendSearch');
			$prev.bind('click.page',function () {
				t.nowPage--;
				t.updateList(t.o.url);
			});
			$next.bind('click.page',function () {
				t.nowPage++;
				t.updateList(t.o.url);
			});
			$ex.bind('click',function () {
				t.exInSearch();
			});

			if (t.nowPage<=1) {
				$prev.unbind('click.page').addClass('unPageClick');
			}
			if (t.nowPage>=allPage) {
				$next.unbind('click.page').addClass('unPageClick');
			}
		},
		doSearch : function () {
			var t = this;
			var $btn = t.$search.find('.btn');
			var $txt = t.$search.find('.txt');
			$btn.bind('click',function () {
				if ($.trim($txt.val())!=='') {
					var vals = t.$search.vals();
					t.updateList(t.o.sr.url,vals);
					t.o.url = t.o.sr.url;
				}
				return false;
			});

		},
		exInSearch : function (type) {
			var t = this;
			var sw = 245;
			var $ex = $('.em-extendSearch');
			if (!$ex.hasClass('em-intendSearch')||type === 'in') {
				$ex.addClass('em-intendSearch');
				t.$search.animate({'right':-sw+'px'});
			}else {
				$ex.removeClass('em-intendSearch');
				t.$search.animate({'right':'0px'});
			}
		},
		updateList : function (url,data) {
			var t = this;
			t.$body.addClass('infoListLoading');
			t.bulidList(url,function (updateHtml,data) {
				t.$body.html(updateHtml);
				t.$body.removeClass('infoListLoading');
				t.eachClick(t.$body,data);
			},data);
		},
		addList : function (url) {
			var t = this;
			t.$body.addClass('infoListLoading');
			t.bulidList(url,function (updateHtml,data) {
				var $setion = $('<div class="setion"></div>').append(updateHtml);
				t.$body.prepend($setion);
				t.$body.removeClass('infoListLoading');
				t.eachClick($setion,data);
				$setion.animate({backgroundColor : 'white'},800,function () {
					t.$body.find('.p-iItem').removeClass('p-iItem-even');
					t.$body.find('.p-iItem:even').addClass('p-iItem-even');
				});
			},data);
		},
		eachClick : function ($par,data) {
			var t = this;
			var $item = $par.find('.p-iItem');
			$item.click(function () {
				t.$body.find('.p-iItem').removeClass('p-iItem-now');
				$(this).addClass('p-iItem-now');
				var ix = $item.index(this);
				//window.console && console.log(this);
				t.o.clickRow(ix,$(this),data[ix],data);
			});
			$item.dblclick(function () {
				var ix = $item.index(this);
				t.$body.find('.p-iItem').removeClass('p-iItem-now');
				$(this).addClass('p-iItem-now');
				//window.console && console.log('dblclick',ix);
				t.o.dblClickRow(ix,$(this),data[ix],data);
			});
		}
	}

	$.fn.extend({
		soGrid : function (o) {
			var o= $.extend({
				id : null,//定义单独的id
				url : null, //ajax json url
				padding: 3,//列左右padding即左右间距
				page : {},//page参数
				sr : {},//搜索参数
				moreUrl : null,//查看更多url
				morePop : true,//是否以pop的方式打开 “更多”
				hasReload : false, //是否有更新按钮
				columns : [{
					cls:'',//自定义列class
					display : '', name : '' ,//display:列标题,name:列数据名称
					width : 120 , align : 'center' , hide : false
				}], //数据列
				clickRow : function (i,$row,rowData,allData) {//单击单行，返回(i:当前指针,$row:当前行,$rowData:当前行数据,allData:当前更新的所有数据)

				},
				dblClickRow : function (i,$row,rowData,allData) {//双击单行

				}
			},o||{});

			o.contain = $(this);
			o.page = $.extend({//page 配置
				hasPage : false, //是否有分页
				pageStart : 1,
				pageSize : 10 //默认列表条数
			},o.page);

			o.sr = $.extend({ //search配置
				hasSr : false, //是否有搜索
				url:null , width:null,
				cls:null , txtCls:null , btnCls:null,
				placeholder:null , srName:'searchTxt'
			},o.sr);

			var grid = new gridF(o);
			grid.init();
			return grid;
		}
	});
})(jQuery);


(function($) {
	$.extend({
		/**
		 * 获取存放在meta里面上下文变量
		 */
		ctx : function(name) {
			var vl = $p[name];
			if (!vl) {
				vl = $("meta[name=" + name + "]").attr("content") || '';
				$p[name] = vl;
			}
			return vl;
		},
		/**
		 * 地址转换 tree:dept -> /base/treeUrl?_code=dept
		 */
		url : function(url) {
			var rst = '';
			if (url.indexOf('/') == -1) {
				var ar = url.split(":");
				rst+=$p[ar[0] + "Url"];
				if(ar[1]) rst+= "?_code=" + ar[1];
			} else {
				rst = url;
			}
			return rst;
		},
		/**
		 * 统一的后台ajax请求
		 */
		reqUrl : function(url, data, success,maskOpt) {
			var ajaxLoading = null;
			$.ajax({
				url:url,
				type:'post',
				beforeSend:function(jqXHR, settings){
					maskOpt = $.extend({showMask:false},maskOpt||{});
					ajaxLoading = $.sobox.loading(maskOpt);
					//显示"操作中"提示
				},
				complete:function(jqXHR, textStatus){
					//根据textStatus修改提示
					//2秒后去掉提示
				},
				data:data,
				dataType:'json',
				success:function (rst) {
					ajaxLoading.close();
					success&&success(rst);
				},
				error : function (XMLHttpRequest, textStatus, errorThrown) {
					ajaxLoading.close();
					$.sobox.pop({
						cls : 'so-popError',
						title : '错误提示',
						width : 310,
						showTitle : false,
						content : '<p class="p-popError">对不起，数据请求失败！</p>请检查网络或联系管理员...',
						btn :[{text:'确定'}]
					});
				}
			});
			return ajaxLoading;
		},
		/**
		 * 统一的后台ajax请求增强版,增加确认提示技术后台交互提示
		 */
		reqUrlEx : function(url, data, sucess, msg,noConfirm) {
			data=data||{};
			var ajaxLoading = null;
			if (noConfirm) {
				ajaxEvent();
			}else {
				$.sobox.confirm("提示",msg||$p.submitTip,function(){
					ajaxEvent();
				});
			}
			function ajaxEvent() {
				$.ajax({
					url:url,
					type:'post',
					beforeSend:function(jqXHR, settings){
						ajaxLoading = $.sobox.loading({cls:'so-ajaxLoading',width:158,content : '提交中，请稍候...'});
						//显示"操作中"提示
					},
					complete:function(jqXHR, textStatus){
						//根据textStatus修改提示
						//2秒后去掉提示
					},
					data:data,
					dataType:'json',
					success:function(rst){
						if(rst){
							var msg="信息提交成功",stayTime=1200;
							if(rst.tip==1){
								msg=rst.msg;
								stayTime=-1;
							}
							ajaxLoading.close();
							if(rst.state){
								ajaxLoading = $.sobox.loading({cls:'so-ajaxSuccess',width:143,maskClick:true,content : msg,stayTime : stayTime});
							}else{
								$.sobox.pop({
									cls : 'so-popError',
									title : '错误提示',
									width : 310,
									showTitle : false,
									content : '<p class="p-popError">对不起，提交数据失败！</p>'+msg,
									btn :[{text:'确定'}]
								});
							}
							//提示操作成功
						}
						if(sucess)sucess(rst);
					},
					error : function (XMLHttpRequest, textStatus, errorThrown) {
						ajaxLoading.close();
						$.sobox.pop({
							cls : 'so-popError',
							title : '错误提示',
							width : 310,
							showTitle : false,
							content : '<p class="p-popError">对不起，提交数据失败！</p>请检查网络或联系管理员...',
							btn :[{text:'确定'}]
						});
					}
				});
			}
		},
		/**
		 * 默认值赋值
		 * @param o 目标对象
		 * @param c 默认值
		 * @returns
		 */
		applyIf : function(o, c) {
			if (o && c) {
				for ( var p in c) {
					if (typeof o[p] == "undefined") {
						o[p] = c[p];
					}
				}
			}
			return o;
		},
		dragO : function(obj, handler) {
			$(obj).ligerDrag({
				handler : handler,
				proxy:false,
				animate:false,
				onStartDrag : function(current) {
					$(obj).css({
						'margin' : '0',
						'left' : current.left,
						'top' : current.top
					});
				}
			});
		},
		getFullDate : function (date,type) {// Date,'long/short'
			var that = this;
			if (!(date instanceof Date)) {
				date = new Date(date);
			}
			var year = date.getFullYear();
			var month = date.getMonth()+1;
			var day = date.getDate();
			var hh = date.getHours();// 时
			var mm = date.getMinutes();// 分
			 var ss = date.getSeconds();//秒

			month = ('0'+month).slice(-2);
			day = ('0'+day).slice(-2);
			hh = ('0'+hh).slice(-2);
			mm = ('0'+mm).slice(-2);
			ss = ('0'+ss).slice(-2);
			if (type=='short') {
				//return year+'-'+month+'-'+day;
				return month+'-'+day+' '+hh+':'+mm+':'+ss;
			}else if(type=='long'){
				return year+'-'+month+'-'+day+' '+hh+':'+mm+":"+ss;
			}else {
				return year+'-'+month+'-'+day+' '+hh+':'+mm;
			}
		},
		arrHasVal : function (arr,val) {
			var l = arr.length;
			for (i = 0; i < l; i++) {
				if (arr[i] === val) {
					return i;
				}
			}
			return -1;
		},
		getLocalTime :function (nS) {// 转时间戳为本地时间
			return new Date(nS*1).toLocaleString().replace(/年|月/g, "-").replace(/日/g," ");
		},
		getFullDate : function (date,type) {// Date,'long/short'
			var that = this;
			if (!(date instanceof Date)) {
				date = new Date(date);
			}
			var year = date.getFullYear();
			var month = date.getMonth()+1;
			var day = date.getDate();
			var hh = date.getHours();// 时
			var mm = date.getMinutes();// 分
			var ss = date.getSeconds();//秒

			month = returnD(month);
			day = returnD(day);
			hh = returnD(hh);
			mm = returnD(mm);
			ss = returnD(ss);
			if (type=='short') {
				//return year+'-'+month+'-'+day;
				return month+'-'+day+' '+hh+':'+mm+':'+ss;
			}else if(type=='long'){
				return year+'-'+month+'-'+day+' '+hh+':'+mm+":"+ss;
			}else {
				return year+'-'+month+'-'+day+' '+hh+':'+mm;
			}

			function returnD(n) {// 小于10，+"0"
				var n = n;
				if (n<10) {
					n = '0'+n;
				}
				return n;
			}
		},
		getTimeLong : function (s) {
			var h = Math.floor(s/3600);
			h = h>9?h:('0'+h);
			var m = Math.floor(s%3600/60);
			m = m>9?m:('0'+m);
			var s = Math.floor(s%3600%60);
			s = s>9?s:('0'+s);
			return h==0?(m+':'+s):(h+':'+m+':'+s);
		},
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
		winW : $(window).width(),
		winH :$(window).height(),
		getWinW : function () {
			return $(window).width();
		},
		getWinH : function () {
			return $(window).height();
		},
	});

	/**
	 * 扩充方法
	 */
	$.fn.extend({
		hoverClass:function(b){var a=this;a.each(function(c){a.eq(c).mouseenter(function(){$(this).addClass(b)});a.eq(c).mouseleave(function(){$(this).removeClass(b)})});return a},
		switchTab:function(cls,scope,nowCls){
			var _self = $(this);
			var nowCls = nowCls?nowCls:'now';
			$(this).click(function(){
				var $scope=scope?$(scope):$("body");
				$scope.find(cls).hide();
				var vl=$(this).val()||$(this).attr("data-value");
				$scope.find(cls+"_"+vl).show();
				_self.removeClass(nowCls);
				$(this).addClass(nowCls);
			});
			return _self;
		},
		/**
		 * 取ID范围内所有值 $('#id').vals(空或true) -->{xx:yy} $('#id').vals(flase)
		 * -->xx=yy 赋值 $('#id').vals({xx:yy})
		 */
		vals : function(param) {
			if (typeof (param) == 'boolean' || param === undefined) {
				var c = {};// 暂存checkbox,选中的值用逗号隔开
				this.each(function() {
					if(/input/i.test(this.tagName)){
						var key = this.name || this.id;
						if (/checkbox/i.test(this.type)) {
							var val = this.checked ? (this.value || 'on') : '';
							if(val!=''){
								if (c[key]) {
									c[key] = c[key] + "," + val;
								} else {
									c[key] = val;
								}
							}
						} else if (/radio/i.test(this.type)) {
							if (this.checked){
								c[key] = $.trim($(this).val());
							}
						} else {
							c[key] = $.trim($(this).val());
						}
					} else if (/select/i.test(this.tagName)) {
						var key = this.name || this.id;
						c[key] = $.trim($(this).val()) + "";
					} else if ($(this).has(":input").length) {
						var sub = $(":input", this).vals();
						$.extend(c, sub);
					} else {
						var key = this.name || this.id;
						c[key] = $.trim($(this).val());
					}
					//console.timeEnd(xx);
				});
				return param !== false ? c : $.param(c);
			} else if (typeof (param) == 'object') {
				this.each(function() {
					if (/div|span|table|form|ul|li/i.test(this.tagName)) {
						$(":input,label,b", this).vals(param);
					} else {
						var nm = this.name || this.id;
						if(nm){
							var vl    = param[nm],
						      arr  = nm.match(/(\w*)\[(\d*)\]/),
						      obj  = nm.match(/(\w*)\.(\w*)/);
						if(arr&&arr.length==3){
							vl=param[arr[1]][arr[2]];
						}
						if(obj&&obj.length==3){
							vl=param[arr[1]][arr[2]];
						}
						if (vl !== undefined && vl !== null) {
							if (/label|b/i.test(this.tagName)) {
								$(this).text(vl);
							}else if(/checkbox/i.test(this.type)){
								if(vl===true) {
									$(this).attr("checked","checked");
								}else{
									$(this).removeAttr("checked");
								}
							}else if(/radio/i.test(this.type)){
								if(vl===true){
									if($(this).val()==='true'||$(this).val()==='1'){
										$(this).attr("checked","checked");
									}
								}else{
									if($(this).val()==='false'||$(this).val()==='0'){
										$(this).attr("checked","checked");
									}
								}
							}else  {
								$(this).val(vl);
							}
						}
						}
					}
				});
			}
		},
		clear : function(data) {
			$(":input:not(:submit)", this).val("");
			if (data)
				$(this).vals(data);
		},
		combo : function(cfg) {// 单个下拉框初始化
			var params = cfg.params || {};
			if ($.isFunction(params)) {
				params = params();
			}
			params.muti = false;
			this.html("");
			var cmb = this[0];
			var head = cfg.head;
			if (head) {
				if (typeof (head) == 'string') {
					cmb.options[0] = new Option(head, "");
				} else {
					if (head.length) {
						cmb.options[0] = new Option(head[1], head[0]);
					}
				}
			}
			if (cfg.textTo) {
				this.unbind("change");
				this.change(function() {
					$('#' + cfg.textTo).val($("option:selected", this).text());
				});
			}
			$.reqUrl($.url("select:" + cfg.code), params, function(rst) {
				if (rst.state) {
					var data = rst.data;
					for ( var i = 0; i < data.length; i++) {
						var d = data[i];
						var opt = new Option(d.text, d.id);
						if (d.id == cfg.initValue || d.checked) {
							opt.selected = true;
						}
						//opt.attrs = d;
						$.each(d,function(k,v){
							$(opt).attr('data-'+k,v);
						});
						cmb.options[cmb.length] = opt;
					}
					var tail=cfg.tail;
					if (tail) {
						if (typeof (tail) == 'string') {
							cmb.options[cmb.length] = new Option(tail, "");
						} else {
							if (tail.length) {
								cmb.options[0] = new Option(tail[1], tail[0]);
							}
						}
					}
					if (cfg.textTo) {
						$('#' + cfg.textTo).val(
								$("option:selected", cmb).text());
					}
				} else {
					alert("页面下拉框数据初始化出错!");
				}
			});
			return $(this);
		},
		chart:function(cfg,url){
			var myChart = new FusionCharts({
				 swfUrl:"/chart/swf/"+cfg.type+".swf",
				 chartId:cfg.chartId||('chart_'+this.id),
				 width:cfg.width||'96%',
				 height:cfg.height||400
			 });
			$(this).data({"_chart":myChart,"_chartUrl":cfg.url});
			return $(this);
		},
		href:function(params){
			var url=$(this).attr('href'),arr=url.split('?'),temp=arr[1];
			params=params||{};
			$.each(params,function(k,v){
				var rex=new RegExp("&?"+k+"=[^&]*");
				temp=temp.replace(rex,"");
				temp=k+"="+v+"&"+temp;
			});
			var newUrl=arr[0]+"?"+temp;
			$(this).attr('href',newUrl);
		},
		tip:function(cfg){
			cfg=cfg||{};
			var param={width:cfg.width||200},setTemp;
			$(this).live({
				mouseenter:function(){
					var that = this;
					setTemp = setTimeout(function () {
						var containHtml = '<div id="mbb_pops" class="mbb_pop_default" style="width:{width}px"><span class="span_leftsq"></span><div id="mbb_popcont"></div></div>';
						if ( $('#mbb_pops').length<1) {
							$('body').append($util.format(containHtml,param));
						}

						if(cfg.render){
							cfg.render.call(that,$('#mbb_popcont'));
						}else{
							if(cfg.url|| $(that).attr("data-url") ){
								var url=cfg.url||$(that).attr("data-renderUrl");
								$.ajax(url).done(function( html ) {
									$('#mbb_popcont').empty().append(html);
								});
							}
						}
					},200);

				},
				mouseleave:function(){
					clearTimeout(setTemp);
					$('#mbb_pops').remove();
				}
			});
		},
		tipPosition:function (cfg) {
			cfg = cfg||{};//popbox:泡泡盒子; x:水平偏移设置; y:垂直偏移设置
			var popbox = cfg.popbox,poX = (cfg.x)||0,poY = (cfg.y)||0;
			var that  = $(this),popbox = $(popbox);
			var thisT =parseInt( that.offset().top),thisL =parseInt(that.offset().left);
			var hh = parseInt($(window).height());
			var bh = popbox.height();
			//console.info("thisT="+thisT+",hh="+hh+",bh="+bh)
			var tt=thisT*(1-bh/hh)
			if (thisT>hh) {
				popbox.addClass('pop_bottom').css({left:(thisL+30+poX),top:tt>0?tt:10});
			}else {
				popbox.removeClass('pop_bottom').css({left:(thisL+30+poX),top:tt>0?tt:10});
			}
			popbox.show();
			return that;
		},
		xRemove:function(){
			$(this).find(":input").each(function(){
				var tipId=$(this).attr("ligertipid");
				if(tipId)$('#'+tipId).remove();
			});
			$(this).remove();
			return $(this);
		},
		selecText:function(start,end){
			if(start==-1){
				start=$(this).val().length;
				end=$(this).val().length;
			}
			var tg=$(this).get(0);
			if (tg.setSelectionRange) {
			    tg.focus();
			    tg.setSelectionRange(start, end);
			 }else if (tg.createTextRange) {
			    var range = tg.createTextRange();
			    range.collapse(true);
			    range.moveEnd('character', end);
			    range.moveStart('character', start);
			    range.select();
			  }
		}
	});
})(jQuery);
