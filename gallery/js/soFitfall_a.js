(function(a){a.fn.extend({soLazy:function(h){h=a.extend({type:"scroll",imgTag:"src2",defHeight:40,defDelay:4000},h||{});var b=a(this);var d=b.find("img"),f=h.imgTag;if(h.type=="scroll"){var c=function(){return document.documentElement.clientHeight+Math.max(document.documentElement.scrollTop,document.body.scrollTop)-h.defHeight};var g=function(){d.each(function(){if(a(this).offset().top<=c()){var i=a(this).attr(f);if(i){a(this).attr("src",i).removeAttr(f)}}})};g();a(window).bind("scroll",function(){g()})}if(h.type=="delay"){var e=setTimeout(function(){d.each(function(){var i=a(this).attr(f);if(i){a(this).attr("src",i).removeAttr(f)}})},h.defDelay)}return b}})})(jQuery);

$g = {
	init : function () {
		var that = this;
		that.loadData({
			url :'js/demo.json',
			callback : function (data) {
				console.time('timeName');
				that.appendCell(data,'add');
				that.appendCell(data);
				console.timeEnd('timeName');
			}
		});
		$(window).resize(function () {
			that.appendCell(that.allData);
		});
		$('.s-moreGallery').click(function () {
			that.loadData({
				url :'js/demoMore.json',
				callback : function (data) {
					window.console && console.log(that.allData.length);
					console.time('timeName');
					that.appendCell(data,'add');
					console.timeEnd('timeName');
				}
			});
		});
	},
	container : '.container',
	blankUrl : 'images/blank.png',
	gap : 5,
	allData : [],
	curData : [],
	curWinW : null,
	curH :null,
	imgType : null,
	curWidthArr : [],
	setBaseH : function () {
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
				that.allData = that.allData.concat(data);
				//that.curData = data;
				window.console && console.log(that.allData.length);
				opt.callback(data);
			},
			error : function () {
				window.console && console.log('从服务器端获取数据失败！');
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
	getRowsLenAndTotalwidth : function (widthArr) {
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
			cellLenArr.push(temLen);
			totalWidthArr.push(temTotalW);
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

		var winW = that.curWinW ,
			curH = that.curH , imgType = that.imgType
			curWidthArr = that.curWidthArr ,
			gap = that.gap;

		var rowInfo = that.getRowsLenAndTotalwidth(that.curWidthArr);//获得rows行cell长度数组 和 rows行总宽度
		var totalWidthArr = rowInfo.totalWidthArr , cellLenArr = rowInfo.cellLenArr;

		var $page = $('<div class="cell-page"></div>');
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








