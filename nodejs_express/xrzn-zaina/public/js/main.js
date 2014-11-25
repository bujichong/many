require.config({
    //baseUrl: '/js',
    paths: {
        jquery: 'jquery-1.8.2.min', 
        BMap: 'map/BMap',
        drawing: 'map/drawing', //鼠标绘制
        distance: 'map/distance', //测距
        rectangleZoom: 'map/rectangleZoom', //拉框放大
        TextIconOverlay: 'map/TextIconOverlay',
        MarkerClusterer: 'map/MarkerClusterer',//点聚合
        searchInfoWindow: 'map/searchInfoWindow',//搜索弹窗
        lushu : 'map/LuShu'//路书
    },
    shim: {
        jquery: {
            exports: 'jquery',
            BMap: {exports: 'BMap'},
            drawing: {deps: ['BMap'],exports: 'drawing'},
            distance: {deps: ['BMap'],exports: 'distance'},
            rectangleZoom: {deps: ['BMap'],exports: 'rectangleZoom'},
            TextIconOverlay: {deps: ['BMap'],exports: 'TextIconOverlay'},
            MarkerClusterer: {deps: ['BMap'],exports: 'MarkerClusterer'},
            searchInfoWindow: {deps: ['BMap'],exports: 'searchInfoWindow'},
            lushu : {deps: ['BMap'],exports: 'lushu' }
        }
    }
        //,bmap :{exports : 'bmap'}
}); 
require(['jquery','map.ext','work.popOpt','work.bindE','work.layout','work.pos','work.loadList'], function($, eMap,popOpt,bindE,layout,pos,loadList) {
    popO = popOpt;
    $(function () {

        //layout 布局及基础脚本
        layout.sideEvent();// 侧边栏
        layout.exInFullScreen();// 切换全屏
        layout.loadInPage();//page load remove mask
        layout.showIconIntro();//showIconIntro
        layout.validate();
        $('.li-hr').hoverClass('li-hr-over');//hoverClass
        $('.fn-clickPop').clickPop({optAll : popO});//clickPop事件
        $T.updateWinWH();// 全局化获得window的宽高
        //$T.loadPlayer();//load player
        //$('.txt-selTree').soDropTree(); // 初始化下拉树


        //loadList 加载数据列表
        loadList.loadOvercarList();
        loadList.loadPointList();


        //地图相关事件绑定
        eMap.draw.end();// 加载鼠标绘制结束事件
        eMap.draw.escOut();// 绑定ESC事件
        bindE.rule('.s-tool-rule');// 绑定测距
        bindE.ruleArea('.s-tool-ruleArea');// 绑定测面积
        bindE.zoomToChina('.s-tool-zoomToChina');// 缩放到中国地图范围
        bindE.saveCenterPos('.s-tool-savePos');// 保存地图当前中心坐标
        bindE.rectZoomIn('.s-tool-rectZoomIn');// 绑定画矩形拉框放大
        bindE.rectZoomOut('.s-tool-rectZoomOut');// 绑定画矩形拉框缩小
        bindE.clearAll('.s-tool-clearAll');// 清除地图绘制痕迹
        bindE.marker('.s-tool-pot');// 绑定画点


        //pos 地图快速定位
        pos.quickPos();


    });



});
