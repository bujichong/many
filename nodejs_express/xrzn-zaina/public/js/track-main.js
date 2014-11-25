require.config({
      paths: {
            jquery : 'jquery-1.8.2.min',
            jsrender : 'jsrender',
            BMap: 'map/BMap',
            drawing: 'map/drawing', //鼠标绘制
            distance: 'map/distance', //测距
            rectangleZoom: 'map/rectangleZoom', //拉框放大
            TextIconOverlay: 'map/TextIconOverlay',
            MarkerClusterer: 'map/MarkerClusterer',//点聚合
        	searchInfoWindow: 'map/searchInfoWindow',//点聚合
            lushu : 'map/LuShu'//路书
    },
	shim: {
		jquery : {exports : 'jquery'},
		jsrender : {exports : 'jsrender'},
		BMap: {exports: 'BMap'},
		drawing: {deps: ['BMap'],exports: 'drawing'},
		distance: {deps: ['BMap'],exports: 'distance'},
		rectangleZoom: {deps: ['BMap'],exports: 'rectangleZoom'},
		TextIconOverlay: {deps: ['BMap'],exports: 'TextIconOverlay'},
		MarkerClusterer: {deps: ['BMap'],exports: 'MarkerClusterer'},
		searchInfoWindow: {deps: ['BMap'],exports: 'searchInfoWindow'},
		lushu : {deps: ['BMap'],exports: 'lushu' }
	}
});
 
require(['track'], function(track) {
	track.init();
});