require.config({
	//baseUrl: '/js',
    paths: {
		jquery : 'jquery-1.8.2.min',
		config : 'config'
//		jqExtend : 'plugin/jquery.extend',//cookie,color,soChange
//		pub : 'plugin/pub',
//		sobox : 'plugin/jquery.sobox'
    },
	shim: {
		jquery : {exports : 'jquery'},
		config : {exports : 'config'}
//		jqExtend: ['jquery'],
//		pub: ['jquery'],
//		sobox : ['jquery']
	}
});
 
define(['jquery','map.base','map.ext','work.bindE','config'], function($,iMap,eMap,bindE) {

var pos ={
	init : function () {
		var t = this;
		t.quickPos();
	},
	quickPos : function () {
		var t = this;
		t.quickPosAppend();
		var popLocation = null;
		var geoc = iMap.born.geocoder();
		$('.s-nowLoction').click(function() {
			if (popLocation) {
				popLocation.removePop();
				popLocation = null;
			}else{
				popLocation = $.sobox.pop({
					title : '请选择地区',
					type : 'target',
					target : '.selLocationBox',
					posType : 'doc',//以距离页面顶部方式定位
					pos:[60,135],
					showMask:false,
					//onlyOne:true,//无论触发多少次，只弹出一个pop
					width :500,
					closePop : function () {
						popLocation = null;
					}
				});
			}
		});

		var firstPosArr = mapOpt.firstPos.split(',');
		 var firstPos = iMap.born.lngLat(firstPosArr[0],firstPosArr[1]);
		geoc.getLocation(firstPos, function(rs){
			var addComp = rs.addressComponents;
			$('.em-saveLocation').text(addComp.province +  addComp.city + addComp.district +  addComp.street + addComp.streetNumber);
		});
		$('.em-saveLocation').click(function () {
			var firstPosArr = mapOpt.firstPos.split(',');
			 var firstPos = iMap.born.lngLat(firstPosArr[0],firstPosArr[1]);
			$map.centerAndZoom(firstPos,14);
			popLocation.removePop();
		});

		$('.chinaPosBox a,.a-hotCity').click(function() {
		    var loc = $(this).text();
		    loc && $map.centerAndZoom(loc);
		    popLocation.removePop();
		    return false;
		});
		bindE.zoomToChina('.a-zoomToChina');// 缩放到中国地图范围
		$('.a-zoomToChina').click(function() {
		    popLocation.removePop();
		    return false;
		});

		$map.addEventListener('moveend',function (a) {
			var pos = $map.getCenter();
			geoc.getLocation(pos, function(rs){
			    var addComp = rs.addressComponents;
			    //window.console && console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
			    $('.fn-cityNow').text(addComp.city);
			});
		});

		iMap.born.inputSearch({
		    inputId : 'suggestId',
		    map : $map,
		    searchWin : true,
		    winAddCont :'<p class="p-winOpbox right"><span class="s-btn s-savePos bg-pink">保存为默认位置</span><span class="s-btn s-saveToPot bg-pink">添加到兴趣点</span></p>',
		    //drivingRoute : marker,
		    completeBack : function (address,marker,win) {
				$('#suggestId').val('');
				$('.p-searchLocation').removeClass('p-treeSearch-hasVal');
				popLocation.removePop();
				bindE.saveCenterPos('.p-winOpbox .s-savePos');// 保存地图当前中心坐标
				$('.p-winOpbox .s-saveToPot').click(function() {
					window.console && console.log(marker);
					eMap.addShape(marker,'marker');
				});
		    }
		});

		$('#suggestId').keyup(function (e) {
		    var v = $(this).val();
		    if ($.trim(v)!=='') {
		        $('.p-searchLocation').addClass('p-treeSearch-hasVal');
		    }else{
		        $('.p-searchLocation').removeClass('p-treeSearch-hasVal');
		    };
		});
		$('.s-search-clear').click(function () {
		   $('#suggestId').val('');
		});
		bindE.saveCenterPos('.s-savePos');// 保存地图当前中心坐标

	},
	quickPosAppend : function () {
		$('.mapWrapbox').append('<div class="selLocation"><span class="s-nowLoction fn-cityNow">位置</span></div>');
		$('body').append('<div class="selLocationBox" style="display:none;">'+
			'<div class="locationInfoBox">'+
				'<p class="p-locationInfo">当前城市： <span class="s-cityNow fn-cityNow">长沙</span></p>'+
				'<p class="p-locationInfo clearfix"><span class="s-saveLocation">默认位置：<em class="em-saveLocation"></em></span><span class="s-btn s-savePos bg-pink">保存当前为默认位置</span></p>'+
			'</div>'+
			'<div class="sel-city-hotcity" id="selCityHotCityId">热门城市：<a class="a-zoomToChina" name="全国" href="#">全国</a><a class="a-hotCity" name="北京" citycode="131" href="#">北京</a><a class="a-hotCity" name="上海" citycode="289" href="#">上海</a><a class="a-hotCity" name="广州" citycode="257" href="#">广州</a><a class="a-hotCity" name="深圳" citycode="340" href="#">深圳</a><a class="a-hotCity" name="成都" citycode="75" href="#">成都</a><a class="a-hotCity" name="天津" citycode="332" href="#">天津</a><a class="a-hotCity" name="南京" citycode="315" href="#">南京</a><a class="a-hotCity" name="杭州" citycode="179" href="#">杭州</a><a class="a-hotCity" name="武汉" citycode="218" href="#">武汉</a><a class="a-hotCity" name="重庆" citycode="132" href="#">重庆</a></div>'+
    '<div class="sel-city-letterbar" id="selCityLetterListId">'+
        '<p class="p-letter"><a href="#letterA">A</a><a href="#letterF">F</a><a href="#letterG">G</a><a href="#letterH">H</a><a href="#letterJ">J</a><a href="#letterL">L</a><a href="#letterN">N</a><a href="#letterQ">Q</a><a href="#letterS">S</a><a href="#letterX">X</a><a href="#letterY">Y</a><a href="#letterZ">Z</a><a href="#letterOther">其它</a></p>'+
        '<p class="p-searchLocation"><input id="suggestId" type="text" class="txt txt-mini w150" placeholder="请输入要搜索的地址" name="txt" /><span class="s-search-clear"></span></p>'+
            '<div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>'+
    '</div>'+
    '<div class="chinaPosBox"><table class="table-chinaPos"cellspacing="0"cellpadding="0"><tbody><tr><td id="letterA"name="letterA"class="sel-city-td-letter"><div>A</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="AH">安徽</a></td><td><a href="#">合肥</a><a href="#">安庆</a><a href="#">蚌埠</a><a href="#">亳州</a><a href="#">巢湖</a><a href="#">池州</a><a href="#">滁州</a><a href="#">阜阳</a><a href="#">淮北</a><a href="#">淮南</a><a href="#">黄山</a><a href="#">六安</a><a href="#">马鞍山</a><a href="#">宿州</a><a href="#">铜陵</a><a href="#">芜湖</a><a href="#">宣城</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">A</div></td></tr><tr><td id="letterF"name="letterF"class="sel-city-td-letter"><div>F</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="FJ">福建</a></td><td><a href="#">福州</a><a href="#">龙岩</a><a href="#">南平</a><a href="#">宁德</a><a href="#">莆田</a><a href="#">泉州</a><a href="#">三明</a><a href="#">厦门</a><a href="#">漳州</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">F</div></td></tr><tr><td id="letterG"name="letterG"class="sel-city-td-letter"><div>G</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="GS">甘肃</a></td><td><a href="#">兰州</a><a href="#">白银</a><a href="#">定西</a><a name="甘南藏族自治州"href="#">甘南州</a><a href="#">嘉峪关</a><a href="#">金昌</a><a href="#">酒泉</a><a name="临夏回族自治州"href="#">临夏州</a><a href="#">陇南</a><a href="#">平凉</a><a href="#">庆阳</a><a href="#">天水</a><a href="#">武威</a><a href="#">张掖</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="GD">广东</a></td><td><a href="#">广州</a><a href="#">潮州</a><a href="#">东莞</a><a href="#">佛山</a><a href="#">河源</a><a href="#">惠州</a><a href="#">江门</a><a href="#">揭阳</a><a href="#">茂名</a><a href="#">梅州</a><a href="#">清远</a><a href="#">汕头</a><a href="#">汕尾</a><a href="#">韶关</a><a href="#">深圳</a><a href="#">阳江</a><a href="#">云浮</a><a href="#">湛江</a><a href="#">肇庆</a><a href="#">中山</a><a href="#">珠海</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="GX">广西</a></td><td><a href="#">南宁</a><a href="#">百色</a><a href="#">北海</a><a href="#">崇左</a><a href="#">防城港</a><a href="#">桂林</a><a href="#">贵港</a><a href="#">河池</a><a href="#">贺州</a><a href="#">来宾</a><a href="#">柳州</a><a href="#">钦州</a><a href="#">梧州</a><a href="#">玉林</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="GZ">贵州</a></td><td><a href="#">贵阳</a><a href="#">安顺</a><a href="#">毕节地区</a><a href="#">六盘水</a><a href="#">铜仁地区</a><a href="#">遵义</a><a name="黔西南布依族苗族自治州"href="#">黔西南州</a><a name="黔东南苗族侗族自治州"href="#">黔东南州</a><a name="黔南布依族苗族自治州"href="#">黔南州</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">G</div></td></tr><tr><td id="letterH"name="letterH"class="sel-city-td-letter"><div>H</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="HI">海南</a></td><td><a href="#">海口</a><a name="白沙黎族自治县"href="#">白沙</a><a name="保亭黎族苗族自治县"href="#">保亭</a><a name="昌江黎族自治县"href="#">昌江</a><a href="#">儋州</a><a href="#">澄迈</a><a href="#">东方</a><a href="#">定安</a><a href="#">琼海</a><a name="琼中黎族苗族自治县"href="#">琼中</a><a name="乐东黎族自治县"href="#">乐东</a><a href="#">临高</a><a name="陵水黎族自治县"href="#">陵水</a><a href="#">三亚</a><a href="#">屯昌</a><a href="#">万宁</a><a href="#">文昌</a><a href="#">五指山</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="HE">河北</a></td><td><a href="#">石家庄</a><a href="#">保定</a><a href="#">沧州</a><a href="#">承德</a><a href="#">邯郸</a><a href="#">衡水</a><a href="#">廊坊</a><a href="#">秦皇岛</a><a href="#">唐山</a><a href="#">邢台</a><a href="#">张家口</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="HA">河南</a></td><td><a href="#">郑州</a><a href="#">安阳</a><a href="#">鹤壁</a><a href="#">焦作</a><a href="#">开封</a><a href="#">洛阳</a><a href="#">漯河</a><a href="#">南阳</a><a href="#">平顶山</a><a href="#">濮阳</a><a href="#">三门峡</a><a href="#">商丘</a><a href="#">新乡</a><a href="#">信阳</a><a href="#">许昌</a><a href="#">周口</a><a href="#">驻马店</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="HL">黑龙江</a></td><td><a href="#">哈尔滨</a><a href="#">大庆</a><a href="#">大兴安岭地区</a><a href="#">鹤岗</a><a href="#">黑河</a><a href="#">鸡西</a><a href="#">佳木斯</a><a href="#">牡丹江</a><a href="#">七台河</a><a href="#">齐齐哈尔</a><a href="#">双鸭山</a><a href="#">绥化</a><a href="#">伊春</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="HB">湖北</a></td><td><a href="#">武汉</a><a href="#">鄂州</a><a name="恩施土家族苗族自治州"href="#">恩施</a><a href="#">黄冈</a><a href="#">黄石</a><a href="#">荆门</a><a href="#">荆州</a><a href="#">潜江</a><a href="#">神农架林区</a><a href="#">十堰</a><a href="#">随州</a><a href="#">天门</a><a href="#">仙桃</a><a href="#">咸宁</a><a href="#">襄阳</a><a href="#">孝感</a><a href="#">宜昌</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="HN">湖南</a></td><td><a href="#">长沙</a><a href="#">常德</a><a href="#">郴州</a><a href="#">衡阳</a><a href="#">怀化</a><a href="#">娄底</a><a href="#">邵阳</a><a href="#">湘潭</a><a name="湘西土家族苗族自治州"href="#">湘西州</a><a href="#">益阳</a><a href="#">永州</a><a href="#">岳阳</a><a href="#">张家界</a><a href="#">株洲</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">H</div></td></tr><tr><td id="letterJ"name="letterJ"class="sel-city-td-letter"><div>J</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="JS">江苏</a></td><td><a href="#">南京</a><a href="#">常州</a><a href="#">淮安</a><a href="#">连云港</a><a href="#">南通</a><a href="#">苏州</a><a href="#">宿迁</a><a href="#">泰州</a><a href="#">无锡</a><a href="#">徐州</a><a href="#">盐城</a><a href="#">扬州</a><a href="#">镇江</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="JX">江西</a></td><td><a href="#">南昌</a><a href="#">抚州</a><a href="#">赣州</a><a href="#">吉安</a><a href="#">景德镇</a><a href="#">九江</a><a href="#">萍乡</a><a href="#">上饶</a><a href="#">新余</a><a href="#">宜春</a><a href="#">鹰潭</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="JL">吉林</a></td><td><a href="#">长春</a><a href="#">白城</a><a href="#">白山</a><a href="#">吉林市</a><a href="#">辽源</a><a href="#">四平</a><a href="#">松原</a><a href="#">通化</a><a name="延边朝鲜族自治州"href="#">延边</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">J</div></td></tr><tr><td id="letterL"name="letterL"class="sel-city-td-letter"><div>L</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="LN">辽宁</a></td><td><a href="#">沈阳</a><a href="#">鞍山</a><a href="#">本溪</a><a href="#">朝阳</a><a href="#">大连</a><a href="#">丹东</a><a href="#">抚顺</a><a href="#">阜新</a><a href="#">葫芦岛</a><a href="#">锦州</a><a href="#">辽阳</a><a href="#">盘锦</a><a href="#">铁岭</a><a href="#">营口</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">L</div></td></tr><tr><td id="letterN"name="letterN"class="sel-city-td-letter"><div>N</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="NM">内蒙古</a></td><td><a href="#">呼和浩特</a><a href="#">阿拉善盟</a><a href="#">包头</a><a href="#">巴彦淖尔</a><a href="#">赤峰</a><a href="#">鄂尔多斯</a><a href="#">呼伦贝尔</a><a href="#">通辽</a><a href="#">乌海</a><a href="#">乌兰察布</a><a href="#">锡林郭勒盟</a><a href="#">兴安盟</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="NX">宁夏</a></td><td><a href="#">银川</a><a href="#">固原</a><a href="#">石嘴山</a><a href="#">吴忠</a><a href="#">中卫</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">N</div></td></tr><tr><td id="letterQ"name="letterQ"class="sel-city-td-letter"><div>Q</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="QH">青海</a></td><td><a href="#">西宁</a><a name="果洛藏族自治州"href="#">果洛州</a><a href="#">海东地区</a><a name="海北藏族自治州"href="#">海北州</a><a name="海南藏族自治州"href="#">海南州</a><a name="海西蒙古族藏族自治州"href="#">海西州</a><a name="黄南藏族自治州"href="#">黄南州</a><a name="玉树藏族自治州"href="#">玉树州</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">Q</div></td></tr><tr><td id="letterS"name="letterS"class="sel-city-td-letter"><div>S</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="SD">山东</a></td><td><a href="#">济南</a><a href="#">滨州</a><a href="#">东营</a><a href="#">德州</a><a href="#">菏泽</a><a href="#">济宁</a><a href="#">莱芜</a><a href="#">聊城</a><a href="#">临沂</a><a href="#">青岛</a><a href="#">日照</a><a href="#">泰安</a><a href="#">威海</a><a href="#">潍坊</a><a href="#">烟台</a><a href="#">枣庄</a><a href="#">淄博</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="SX">山西</a></td><td><a href="#">太原</a><a href="#">长治</a><a href="#">大同</a><a href="#">晋城</a><a href="#">晋中</a><a href="#">临汾</a><a href="#">吕梁</a><a href="#">朔州</a><a href="#">忻州</a><a href="#">阳泉</a><a href="#">运城</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="SN">陕西</a></td><td><a href="#">西安</a><a href="#">安康</a><a href="#">宝鸡</a><a href="#">汉中</a><a href="#">商洛</a><a href="#">铜川</a><a href="#">渭南</a><a href="#">咸阳</a><a href="#">延安</a><a href="#">榆林</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="SC">四川</a></td><td><a href="#">成都</a><a name="阿坝藏族羌族自治州"href="#">阿坝州</a><a href="#">巴中</a><a href="#">达州</a><a href="#">德阳</a><a name="甘孜藏族自治州"href="#">甘孜州</a><a href="#">广安</a><a href="#">广元</a><a href="#">乐山</a><a name="凉山彝族自治州"href="#">凉山州</a><a href="#">泸州</a><a href="#">南充</a><a href="#">眉山</a><a href="#">绵阳</a><a href="#">内江</a><a href="#">攀枝花</a><a href="#">遂宁</a><a href="#">雅安</a><a href="#">宜宾</a><a href="#">资阳</a><a href="#">自贡</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">S</div></td></tr><tr><td id="letterX"name="letterX"class="sel-city-td-letter"><div>X</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="XZ">西藏</a></td><td><a href="#">拉萨</a><a href="#">阿里地区</a><a href="#">昌都地区</a><a href="#">林芝地区</a><a href="#">那曲地区</a><a href="#">日喀则地区</a><a href="#">山南地区</a></td></tr><tr><td class="sel-city-td-letter"><div></div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="XJ">新疆</a></td><td><a href="#">乌鲁木齐</a><a href="#">阿拉尔</a><a href="#">阿克苏地区</a><a href="#">阿勒泰地区</a><a name="巴音郭楞蒙古自治州"href="#">巴音郭楞</a><a name="博尔塔拉蒙古自治州"href="#">博尔塔拉州</a><a name="昌吉回族自治州"href="#">昌吉州</a><a href="#">哈密地区</a><a href="#">和田地区</a><a href="#">喀什地区</a><a href="#">克拉玛依</a><a name="克孜勒苏柯尔克孜自治州"href="#">克孜勒苏州</a><a href="#">石河子</a><a href="#">塔城地区</a><a href="#">图木舒克</a><a href="#">吐鲁番地区</a><a href="#">五家渠</a><a name="伊犁哈萨克自治州"href="#">伊犁州</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">X</div></td></tr><tr><td id="letterY"name="letterY"class="sel-city-td-letter"><div>Y</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="YN">云南</a></td><td><a href="#">昆明</a><a href="#">保山</a><a name="楚雄彝族自治州"href="#">楚雄州</a><a name="大理白族自治州"href="#">大理州</a><a name="德宏傣族景颇族自治州"href="#">德宏州</a><a name="迪庆藏族自治州"href="#">迪庆州</a><a name="红河哈尼族彝族自治州"href="#">红河州</a><a href="#">丽江</a><a href="#">临沧</a><a name="怒江傈僳族自治州"href="#">怒江州</a><a href="#">普洱</a><a href="#">曲靖</a><a href="#">昭通</a><a name="文山壮族苗族自治州"href="#">文山</a><a name="西双版纳傣族自治州"href="#">西双版纳</a><a href="#">玉溪</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">Y</div></td></tr><tr><td id="letterZ"name="letterZ"class="sel-city-td-letter"><div>Z</div></td><td class="sel-city-td-sf"><a class="a-province"href="#"rel="ZJ">浙江</a></td><td><a href="#">杭州</a><a href="#">湖州</a><a href="#">嘉兴</a><a href="#">金华</a><a href="#">丽水</a><a href="#">宁波</a><a href="#">衢州</a><a href="#">绍兴</a><a href="#">台州</a><a href="#">温州</a><a href="#">舟山</a></td></tr><tr><td colspan="3"><div class="sel-city-tr-splitline">其它</div></td></tr><tr><td><div style="visibility:hidden;">other</div></td><td id="letterOther"name="letterOther"class="sel-city-td-other"><span>其它:</span></td><td><a class="a-province"href="#"rel="HK">香港</a><a href="#">澳门</a><span>台湾</span></td></tr></tbody></table></div></div>');
	}
}

return pos;

});