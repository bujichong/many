require.config({
	baseUrl: '/js',
    paths: {
		jquery : 'jquery-1.8.2.min',
		config : 'config',
		sobox : 'plugin/jquery.sobox',
		soTree : 'plugin/jquery.soTree',
		jqExtend : 'plugin/jquery.extend',
		soValidate : 'plugin/jquery.soValidate',
		//validate : 'jquery-validation/jquery.validate.min',
		//pub : 'plugin/pub'
    },
	shim: {
		jquery : {exports : 'jquery'},
		config : {exports : 'config'},
		jwplayer : {exports : 'jwplayer'},
		sobox : ['jquery'],
		soValidate : ['jquery'],
		soTree : ['jquery'],
		validate : ['jquery'],
		jqExtend : ['jquery','sobox']
	}
});
 
define(['jquery','map.base','map.ext','tools','work.formE','config','soValidate'], function($,iMap,eMap,$T,formE) {

/** ******* layout 页面样式结构 ********** */
var layout ={
	init : function () {
		var that = this;
		that.sideEvent();// 侧边栏
		that.exInFullScreen();// 切换全屏
		that.loadInPage();//page load remove mask
		//$T.loadPlayer();//load player
		that.showIconIntro();//showIconIntro
		that.validate();

		//$('.txt-selTree').soDropTree(); // 初始化下拉树
		$('.li-hr').hoverClass('li-hr-over');//hoverClass
		$('.fn-clickPop').clickPop({optAll : popO});//clickPop事件

		$T.updateWinWH();// 全局化获得window的宽高
	},
	loadInPage: function () {
		var that = this;
		var exSide = $T.getCookie('exSide')||1;
		var stitle = $T.getCookie('stitle')||0;

		if (exSide==1&&stitle>0) {//侧边
			$('.s-listtitle').eq(stitle).trigger('click');
		}else {
			if (exSide==0) {that.inSide();}
		}

		$('.pageLoading').fadeOut();
	},
	validate : function () {
		if($('.form-validate').length){
			$('.form-validate').soValidate({
				 submitBtn : '.submitBtn',
				submit : function (form) {//默认验证成功提交submit事件
					var rel = form.attr('rel');
					if (rel) {
						var opt = formE;
						var aimArr = rel.split('.');
						var aimLen = aimArr.length;
						for (i = 0; i < aimLen; i++) {
							opt = opt[aimArr[i]];
						}
						opt(form);
					}
				},
				fail : function (form,failInputs) {//验证失败
					var $failF = $(failInputs[0]);
					//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
					$failF.focus();
				}
			});
		}
	},
	exInFullScreen : function () {
		var that = this;
		$('.s-hr-exScreen').click(function () {
			if ($(this).hasClass('hr-inScreen')) {
				//that.exSide();
				//that.exFooter();
				$T.fullscreen(false);
				$(this).removeClass('hr-inScreen');
			}else {
				// that.inSide();
				// that.inFooter();
				$T.fullscreen(true);
				$(this).addClass('hr-inScreen');
			}
		});
	},
	showIconIntro : function () {
		var $iconIntro = $('.carIconIntro');
		var iicon = $T.getCookie('iicon') || 'y';
		if (iicon=='y') {$iconIntro.addClass('carIconIntro-now');}
		$('.h4-iconIntro,.s-iiconClose').click(function () {
			if ($iconIntro.hasClass('carIconIntro-now')) {
				$iconIntro.removeClass('carIconIntro-now');
				$T.setCookie('iicon','n');
			}else {
				$iconIntro.addClass('carIconIntro-now');
				$T.setCookie('iicon','y');
			}
		});
	},
	sideEvent : function () {// 侧边栏layout事件
		var that = this;

		$('.sCont').soChange({// 侧边栏内容切换
			thumbObj:'.s-listtitle',
			autoChange : false,
			thumbNowClass : 's-sTitle-now',
			thumbOverEvent: false,
			slideTime : 0,
			callback : function (prev,now) {
				eMap.clear(['otherOverlays','endDraw']);
				$T.setCookie('stitle',now);
			},
			alwaysback : function (prev,now) {
				that.exSide();
				if(prev == now){$('.s-listtitle').eq(now).addClass('s-sTitle-now');}
			}
		});

		$('.s-exside').click(function () {// 点ex按钮侧边栏收缩
			if ($('.sideBar').hasClass('intendBar')) {
				that.exSide(true);
			}else {
				that.inSide();
			}
		});

		// $('.s-listtitle').click(function () {// 点tab标题侧边栏展开
		// 	that.exSide();
		// 	var ix = $('.s-listtitle').index(this);
		// 	$T.setCookie('stitle',ix);
		// });

	},
	isFullScreen : function () {
		var $foot = $('.footerInfo');
		var $toolScreen = $('.s-hr-exScreen');
		var inFoot = !$foot.hasClass('exFooter');
		var inSide = $foot.hasClass('extendFooter');
		if (inFoot&&inSide) {
			$toolScreen.addClass('hr-inScreen').text('收屏');
		}else {
			$toolScreen.removeClass('hr-inScreen').text('全屏');
		}
	},
	inSide : function () {
		var that = this;
		$('.headTool').addClass('ex-headTool');
		$('.sideBar').addClass('intendBar');
		$('.mainBox').addClass('extendMain');
		$('.s-exside').addClass('s-inside');
		$('.s-listtitle').removeClass('s-sTitle-now');
		$T.setCookie('exSide',0);
	},
	exSide : function (exBtnTrigger) {
		var that = this;
		$('.headTool').removeClass('ex-headTool');
		$('.sideBar').removeClass('intendBar');
		$('.mainBox').removeClass('extendMain');
		$('.s-exside').removeClass('s-inside');
		var stitle = $T.getCookie('stitle')||0;
		 exBtnTrigger&&$('.s-listtitle').eq(stitle).addClass('s-sTitle-now');
		$T.setCookie('exSide',1);
	}
};

return layout;

});