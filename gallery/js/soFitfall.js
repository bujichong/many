(function(a){a.fn.extend({soLazy:function(h){h=a.extend({type:"scroll",imgTag:"src2",defHeight:40,defDelay:4000},h||{});var b=a(this);var d=b.find("img"),f=h.imgTag;if(h.type=="scroll"){var c=function(){return document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop)-h.defHeight};var g=function(){d.each(function(){if(a(this).offset().top<=c()){var i=a(this).attr(f);if(i){a(this).attr("src",i).removeAttr(f)}}})};g();a(window).bind("scroll",function(){g()})}if(h.type=="delay"){var e=setTimeout(function(){d.each(function(){var i=a(this).attr(f);if(i){a(this).attr("src",i).removeAttr(f)}})},h.defDelay)}return b}})})(jQuery);

$g = {
	container : '.container',
	blankUrl : 'images/blank.png',
	firstUrl : 'js/demo.json',
	moreUrl : 'js/demoMore.json',
	gap : 5,//间距
	loadDistance : 80, //距离底边多少开始再次加载数据
	allData : [],
	hasLastTem : false,
	lastTemData : [],
	curWinW : null,
	curWidthArr : [],
	curH :null,
	imgType : null,
	init : function () {
		var that = this;

		var $moreBtn = $('<span class="s-moreGallery">取得更多图片...</span>');
		$('body').append($moreBtn);//插入更多图片按钮
		$(that.container).css({paddingTop:that.gap+'px',paddingBottom:that.gap+'px'});

		that.loadData({//初载数据
			url :that.firstUrl,
			callback : function (data) {
				that.appendCell(data,'add');
				that.appendCell(data);
			}
		});

		$(window).resize(function () {//视窗尺寸变化重载所有数据
			that.appendCell(that.allData);
		});

		setTimeout(function () {//绑定滚动到底部加载更多事件
			that.moreLoad();
		},2000);
//		$('.s-moreGallery').click(function () {
//			that.loadData({
//				url :'js/demoMore.json',
//				callback : function (data) {
//					window.console && console.log(that.allData.length);
//					console.time('timeName');
//					that.appendCell(data,'add');
//					console.timeEnd('timeName');
//				}
//			});
//		});
	},
	setBaseH : function () {//根据浏览器宽度，获取列表基准高度和在数据中所取的图片类型
		var that = this;
		var baseH = 340 , t = 'l';
		var wW = that.curWinW = $(window).width();
		if (wW<= 3280) {h = 320;t = 'l';}
		if (wW<= 2880) {h = 300;t = 'c';}
		if (wW<= 2400) {h = 280;t = 'c';}
		if (wW<= 1920) {h = 250;t = 'z';}
		if (wW<= 1500) {h = 230;t = 'z';}
		if (wW<= 960) {h = 210;t = 'm';}
		if (wW<= 760) {h = 180;t = 'm';}
		if (wW<= 640) {h = 170;t = 'm';}
		if (wW<= 480) {h = 150;t = 'n';}
		if (wW<= 400) {h = 140;t = 'n';}
		if (wW<= 360) {h = 100;t = 's';}
		that.curH = h , that.imgType = t;
	},
	loadData : function (opt) {//opt : {url : , callback : function(){}}
		var that = this;
		$.ajax({
			url : opt.url,
			dataType : 'json',
			success : function (data) {
				that.allData = that.allData.concat(data);//合并多次加载数据
				data = that.lastTemData.concat(data);//将本次数据和上次加载末尾无法充满的数据合并
				opt.callback(data);
			},
			error : function () {
				window.console && console.log('从服务器端获取数据失败！');
			}
		});
	},
	moreLoad : function () {
		var that = this;
		var dh = $(document).height();
		$(window).bind('scroll.moreload',function () {
			var st = $(window).scrollTop();
			var wh = $(window).height();
			window.console && console.log(dh<(st+wh));
			if (dh<(st+wh+that.loadDistance)) {
				that.loadData({
					url :that.moreUrl,
					callback : function (data) {
						that.appendCell(data,'add');
					}
				});

				$(window).unbind('scroll.moreload');
				setTimeout(function () {//2s后再次绑定滚动事件
					that.moreLoad();
				},2000);
			}
		});
	},
	resetCellW : function (data) {
		var that = this;
		var wArr = [];
		that.setBaseH();//获取基础图片高度，和图片类型
		var curH = that.curH , imgType = that.imgType;
		$.each(data,function (i,v) {
			var w = v.sizes[imgType].width , h = v.sizes[imgType].height;
			wArr[i] = parseInt(curH/h*w);
		});
		that.curWidthArr = wArr;
	},
	getRowsLenAndTotalwidth : function (data,widthArr) {
		var that = this;
		var winW = that.curWinW ,
			widthArr = widthArr ,
			gap = that.gap;

		var cellLenArr = [] , cellLastIndex = [], totalWidthArr = [];
		var temTotalW = 0 , temLen = 0 ;
		$.each(widthArr,function (i,v) {
			if (temTotalW < (winW-v-4*gap)) {//以小于页面宽度宽度来处理
			//if (temTotalW < winW) {//以大于页面宽度来处理
				temTotalW += (v+2*gap);//累计单行宽度
				temLen++;
			}else{//一旦单行累计宽度大于容器宽度，开始下一行宽度累计计算
				cellLenArr.push(temLen);
				cellLastIndex.push(i);
				totalWidthArr.push(temTotalW);
				temTotalW = v+2*gap;
				temLen = 1;
			}
		});
		if (cellLastIndex[cellLastIndex.length-1] !== widthArr.length) {//如果最后一行宽度小于winWidth，补充一行数据
			var loseLen = widthArr.length - cellLastIndex[cellLastIndex.length-1];
			that.hasLastTem = true;//有剩余
			that.lastTemData = data.slice(-loseLen);//将末尾多出数据推送到临时数据中
			cellLenArr.push(temLen);
			totalWidthArr.push(temTotalW);
		}else {
			that.hasLastTem = false;//无剩余
		}
		return {cellLenArr : cellLenArr , totalWidthArr : totalWidthArr};
	},
	cellBindEvent : function (par) {
		var $par = $(par);
		if ($par.data('bind')!=='true') {
			var $cell = $par.find('.cell');
			$cell.mouseenter(function () {
				$(this).addClass('cell-over');
			}).mouseleave(function () {
				$(this).removeClass('cell-over');
			});
			$par.data('bind','true');
		}
	},
	appendCell : function (data,loadType) { // loadType = "add" || "update"
		var that = this;
		that.resetCellW(data);//重置cellW
		that.hasLastTem&&($('.cell-page:last').find('.cell-row:last').remove());//如果上次加载末尾有残余数据，此次先删除末尾行(数据在load时已合并)

		var winW = that.curWinW ,
			curH = that.curH , imgType = that.imgType
			curWidthArr = that.curWidthArr ,
			gap = that.gap;

		var rowInfo = that.getRowsLenAndTotalwidth(data,that.curWidthArr);//获得rows行cell长度数组 和 rows行总宽度
		var totalWidthArr = rowInfo.totalWidthArr , cellLenArr = rowInfo.cellLenArr;

		var $page = $('<div class="cell-page"></div>');
		$page.css({paddingLeft:gap+'px',paddingRight:gap+'px'});
		//var $page = $('<div class="cell-page"></div>');
		var row = 0,data = data , cellIndex = 0;
		$.each(cellLenArr,function (i,v) {
			var $row = '<div class="cell-row">';
			var contW = winW-2*gap;
			var lastShort = (i ==cellLenArr.length-1)&&(totalWidthArr[i]<contW*4/5);//最后一行是否太短
			var per = contW/(totalWidthArr[i]-2*v*gap) ;
			var newH = parseInt(curH*per);
			var newTotalW = 0;

			for (j = 0; j < v; j++) {
				var newW = 0 , lastCell = (j==(v-1));
				if (lastShort) {
					newH = curH;
					newW = curWidthArr[cellIndex];
				}else{
					if (!lastCell) {
						newW = parseInt(curWidthArr[cellIndex]*per);
						newTotalW += newW+2*gap;
					}else{
						newW = contW - newTotalW-2*gap;
					}
				};

				var srcCode = cellIndex>15?('src="'+that.blankUrl+'" src2="'+data[cellIndex].sizes[imgType].url+'"'):('src="'+data[cellIndex].sizes[imgType].url+'"');//启动lazyload src2标签

				$row += '<div id="cell-'+data[cellIndex].id+'" class="cell" style="width:'+newW+'px;height:'+newH+'px;">'
					+'<img class="img-pic" style="width:'+newW+'px;height:'+newH+'px;" '+srcCode+' alt="'+data[cellIndex].character_name+'" />'
					+'<div class="cell-cont">'
						+'<h4 class="h4-title">'+data[cellIndex].character_name+'</h4>'
						+'<p class="p-abs">'
							+'<span class="s-author">作者：<em class="em-thuor">'+data[cellIndex].ownername+'</em></span>'
							+'<span class="s-comments">评论：<em class="em-comments">'+data[cellIndex].count_comments+'</em></span>'
							+'<span class="s-faves">喜欢：<em class="em-faves">'+data[cellIndex].count_faves+'</em></span>'
						+'</p>'
						//+'<p class="p-description">'+data[cellIndex].description+'</p>'
					+'</div>'
				+'</div>';
				cellIndex ++;
			};
			$row += '</div>';
			$page.append($row);
		});
		that.cellBindEvent($page);//给cell绑定事件

		var $container = $(that.container);
		if (loadType === 'add') {
			$container.append($page);
		}else {
			$container.html($page);
		}
		$container.soLazy();
	}
}

$(function () {
	$g.init();
});








