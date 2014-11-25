require.config({
    paths: {
		jquery : 'jquery-1.8.2.min',
		config : 'config',
		jqExtend : 'plugin/jquery.extend',//cookie,color,soChange
		sobox : 'plugin/jquery.sobox',
		//jwplayer : 'jwplayer/jwplayer'
    },
	shim: {
		jquery : {exports : 'jquery'},
		config : {exports : 'config'},
		//jwplayer : {exports : 'jwplayer'},
		jqExtend : ['jquery'],
		'sobox' : ['jquery']
	}
});
 
define('tools',['jquery','config','jqExtend','sobox'], function($) {

$T = {
	screenState : false,
	isIE : navigator.userAgent.indexOf('MSIE')>-1,
	color : ['#e51400','#204e81','#a200ff','#2c5e7b','#666666','#f8a31f','#339933','#a05000','#368ee0','#8cbf26','#00aba9','#ff0097','#e671b8','#56af45'],
	updateWinWH : function () {
		var that = this;
		$(window).resize(function () {
			$.winW = $(window).width();
			$.winH = $(window).height();
			//window.console && console.log('w : '+that.winW+' , h : '+that.winH);
		});
	},
	fullscreen : function (tofull) {
            if(tofull){
                var docElm = document.documentElement;
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                }
                else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                }
                else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                }
            }else{
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
	},
	listenScreenChange : function () {
        document.addEventListener("fullscreenchange", function (){
            $T.screenState = (document.fullscreen)? true : false;
        }, false);
        document.addEventListener("mozfullscreenchange", function () {
            $T.screenState = (document.mozFullScreen)? true : false;
        }, false);
        document.addEventListener("webkitfullscreenchange", function () {
            $T.screenState = (document.webkitIsFullScreen)? true : false;
        }, false);
	},
	getCookie : function (key,co) {
		var co = co||'x_x_'+mapOpt.user||'vmap',$co = $.cookie(co);
		// window.console && console.log('cooke中 '+co+'值为 " '+$co + ' "');
		if ($co!==null) {
			var coArr = $co.split('||');
			var coLen = coArr.length;
			for (i = 0; i < coLen; i++) {
				var vk = coArr[i].split(':=');
				if (vk[0] === key) {
					//window.console && console.log(key +' = '+ vk[1]);
					return vk[1];
				}
			}
		}else {
			return null;
		}
	},
	setCookie : function (key,value,co,root) {
		root = root==undefined?true:root;
		var co = co||'x_x_'+mapOpt.user||'vmap',$co = $.cookie(co);
		var coVal;
		if ($co!==null) {
			if ($co.indexOf(key)>-1) {
				var coArr = $co.split('||');
				var coLen = coArr.length;
				for (i = 0; i < coLen; i++) {
					var vk = coArr[i].split(':=');
					if (vk[0] === key) {
						coArr[i] = key+':='+value;
					}
				}
				coVal = coArr.join('||');
			}else {
				coVal = $co+'||'+key+':='+value;
			}
		}else {
			coVal = key+':='+value;
		}
		if (root) {
			$.cookie(co,coVal,{ path: '/'});
		}else {
			$.cookie(co,coVal);
		}
		window.console && console.log('cooke中 '+co+'更新为 " '+$.cookie(co)+' " ');
	},
	voice : {
		on : '/js/media/on.mp3',
		off : '/js/media/off.mp3',
		alarm : '/js/media/alarm.mp3',
		message : '/js/media/message.mp3',
		message2 : '/js/media/message2.mp3',
		clock : '/js/media/clock.mp3',
		normal : '/js/media/normal.mp3'
	},
	direction : {
		'':'暂无',
		n : '北',
		s : '南',
		e : '东',
		w : '西',
		en : '东北',
		es : '东南',
		wn : '西北',
		ws : '西南'
	},
	state : {
		0 : '离线',
		1 : '熄火',
		2 : '点火',
		3 : '行驶'
	},
	timePop : {pop:null,timer:null},// 暂存tip的sobox和timer信息
	popTip : function (opt) {
		var that = this;
		var o = $.extend({
			tips : [],//[content:'警示信息！'(,{type:'normal'})] (type :warning||normal||grey||success||on||off)
			width : 330,
			watingTime : 5000,
			wating : false,
			onPop : function () {},
			closePop : function () {}
			//playType : null //'normal||alarm||clock||message||message2||on||off'
		},opt||{});
		//window.console && console.log(opt);
		var contentHtml = '';
		$.each(o.tips,function (i,v) {
			var type = v.type || 'normal';
			contentHtml +='<p class="p-popTip p-popTip-'+type+'">'+v.content+'</p>';// 循环添加所有提示项
		});
		if ($('#pop-onlyTopTip').length) {// 如果tip窗已存在
			clearTimeout(that.timePop.timer);
			if (!o.wating) {
				$('#pop-onlyTopTip').append(contentHtml);
				//o.playType&&that.playVoice.replay(o.playType);//播放声音
			}
		}else {// 如果tip窗不存在
			that.timePop.pop = $.sobox.tip({
				cls:'so-popTip-1',
				width:o.width,
				stayTime: 0, // 默认停留5s，小于等于0时不自动关闭
				offset:[-50,-100],
				content:'<div id="pop-onlyTopTip">'+contentHtml+'</div>',
				onPop : function ($wrap) {
					setTimeout(function () {
						$wrap.animate({top:'8px'},300);// 移动显示
					},100);
					o.onPop();
					//o.playType&&that.playVoice.replay(o.playType);//播放声音
				},
				closePop : function () {
					that.timePop.timer&&clearTimeout(that.timePop.timer);
					o.closePop();
				}
			});
		}
		that.timePop.timer = setTimeout(function () {// 自动清除
			that.timePop.pop.removePop();
		},o.watingTime);
	},
// 	loadPlayer : function () {
// 		var that = this;
// 		var thePlayer = jwplayer('playerContainer').setup({
// 			flashplayer: '/js/jwplayer/jwplayer.flash.swf',
// 			file: that.voice.normal,
// 			width: 800,
// 			height: 200,
// 			dock: false
// //			,playlist: [{
// //				file: "http://www.kting.cn/data/book/14/1378973221.mp3",
// //				title: "大话西游之月光宝盒"
// //			}]
// 		});
// 		$player = thePlayer;
// 	},
// 	playVoice : {
// 		replay : function (type) {
// 			if ($player) {
// 				var voice = $T.voice[type];
// 				window.console && console.log(voice);
// 				$player.stop();
// 				$player.load([{file:voice}]).play(true);
// 			}
// 		}
// 	},
	switchSid : function (sid) {
		var data = $treeInfo.data;
		var text = '';
		$.each(data,function () {
			if (this.sid == sid) {
				text = this.text;
				return false;
			}
		});
		return text;
	},
	replaceSid : function (str,isId) {
		return isId!=='id' ? (str + $p.potIdO__O) : str.replace($p.potIdO__O , '');
	}
}

return $T;

});