
$g = {
	init : function () {
		var that = this;
		that.loadData({
			url :'js/demo.json',
			callback : function () {
				that.appendCell();
				that.appendCell();
			}
		});
		$(window).resize(function () {
			that.appendCell();
		});
	},
	gap : 5,
	allData : null,
	curData : null,
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
				that.curData = data;
				opt.callback();
			},
			error : function () {
				window.console && console.log('从服务器端获取数据失败！');
			}
		});
	},
	resetCellW : function () {
		var that = this;
		var wArr = [];
		that.setBaseH();//获取基础图片高度，和图片类型
		var curH = that.curH , imgType = that.imgType;
		$.each(that.curData,function (i,v) {
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
			//if (temTotalW < (winW-v-4*gap)) {//以小于页面宽度宽度来处理
			if (temTotalW < winW) {//以大于页面宽度来处理
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
		var $cell = $par.find('.cell');
		if ($par.data('bind')!=='true') {
			$cell.mouseenter(function () {
				$(this).addClass('cell-over');
			}).mouseleave(function () {
				$(this).removeClass('cell-over');
			});
			$par.data('bind','true');
		}
	},
	appendCell : function () {
		var that = this;
		that.resetCellW();//重置cellW

		var winW = that.curWinW ,
			curH = that.curH , imgType = that.imgType
			curWidthArr = that.curWidthArr ,
			gap = that.gap;

		var rowInfo = that.getRowsLenAndTotalwidth(that.curWidthArr);//获得rows行cell长度数组 和 rows行总宽度
		var totalWidthArr = rowInfo.totalWidthArr , cellLenArr = rowInfo.cellLenArr;

		var $page = $('<div class="cell-page"></div>');
		//var $page = $('<div class="cell-page"></div>');
		var row = 0,data = that.curData , cellIndex = 0;
		$.each(cellLenArr,function (i,v) {
			var $row = '<div class="cell-row">';

			var cellSpaceTotal = totalWidthArr[i]-winW+2*gap;
			var cellSpace = Math.floor(cellSpaceTotal/v);
			var cellLastSpace = cellSpace + cellSpaceTotal%v;
			var lastShort = (i ==cellLenArr.length-1)&&(totalWidthArr[i]<(winW-2*gap));

			for (j = 0; j < v; j++) {
				var space = (j==(v-1))?cellLastSpace:cellSpace;
				var cellW = lastShort?curWidthArr[cellIndex]:(curWidthArr[cellIndex]-space);
				var mal = lastShort?0:-space/2;
				$row += '<div id="cell-'+data[cellIndex].id+'" class="cell" style="width:'+cellW+'px;">'
					+'<img class="img-pic" style="width:'+curWidthArr[cellIndex]+'px;height:'+curH+'px;left:'+mal+'px;" src="'+data[cellIndex].sizes[imgType].url+'" alt="'+data[cellIndex].character_name+'" />'
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
		window.console && console.log($page);
		that.cellBindEvent($page);//给cell绑定事件
		$('.container').html($page);
	}
}

$(function () {
	$g.init();
});








