//node r.js -o build-bmap.js
require.config({
	paths: {
		jquery : 'jquery-1.8.2.min',
		param : 'param',
		jsrender : 'jsrender',
		BMap: 'map/BMap',
		drawing: 'map/drawing', //鼠标绘制
		distance: 'map/distance', //测距
		rectangleZoom: 'map/rectangleZoom', //拉框放大
		TextIconOverlay: 'map/TextIconOverlay',
		MarkerClusterer: 'map/MarkerClusterer',//点聚合
        	searchInfoWindow: 'map/searchInfoWindow',//点聚合
		lushu : 'map/LuShu',//路书
		sobox : 'plugin/jquery.sobox',
		soValidate : 'plugin/jquery.soValidate',
		soTree : 'plugin/jquery.soTree',
		jwplayer : 'jwplayer/jwplayer',
		jqExtend : 'plugin/jquery.extend',
		websocket : 'websocket/WebSocket',
		pub : 'plugin/pub',
		my97 : 'my97/WdatePicker'
    },
	shim: {
		jquery : {exports : 'jquery'},
            BMap: {exports: 'BMap'},
            drawing: {deps: ['BMap'],exports: 'drawing'},
            distance: {deps: ['BMap'],exports: 'distance'},
            rectangleZoom: {deps: ['BMap'],exports: 'rectangleZoom'},
            TextIconOverlay: {deps: ['BMap'],exports: 'TextIconOverlay'},
            MarkerClusterer: {deps: ['BMap'],exports: 'MarkerClusterer'},
            searchInfoWindow: {deps: ['BMap'],exports: 'searchInfoWindow'},
            lushu : {deps: ['BMap'],exports: 'lushu' },
		param : {exports : 'param'},
		jsrender : {exports : 'jsrender'},
		toolbar : {deps :['mapabc'] , exports : 'toolbar'},
		jwplayer : {exports : 'jwplayer'},
		soValidate : ['jquery'],
		sobox : ['jquery'],
		soTree : ['jquery'],
		jqExtend : ['jquery','sobox'],
		websocket : {exports : 'websocket'},
		my97 : ['jquery']
	}
});