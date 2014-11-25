/**
 * 存放页面公用变量
 */
var $p = {
	loginOut : '/doLogout.html',
	treeUrl : '/cmn/tree.htm',
	comboUrl : '/cmn/combo.htm',
	selectUrl : '/cmn/select.htm',
	gridUrl : '/cmn/grid.htm',
	printUrl : '/cmn/print.htm',
	printTplUrl : '/cmn/printTpl.htm',
	vehiclesTreeUrl : '/gps/getVehiclesTreeData.htm',
	checkTmListUrl : '/gps/checkTmList',
	saveLoc : '/gps/saveLoc',
	carStateInfo : '/gps/getStatInfo',
	oilTankAcreage : '/oil/editFuelTankAcreage',
	oilGetLevel : '/oil/getOilLevel',
	chgmap : '/gps/chgmap',

	sock : {
		hello : '/tm/hello'
	},

	alarm : {
		getNow : '/gps/getTmAlarmList.htm?date=',
		getMore : '/alarm/showAlarmList.htm'
	},

	bind : {
		areaRule : '/rule/bindAreaRule.htm',
		lineRule : '/rule/bindLineRule.htm',
		cancelBind : '/rule/cancelBind.htm'
	},

	getSysLogUrl : '/gps/getSysLog.htm',
	searchVehicleUrl :'/gps/searchVehicle.htm',
	searchLocInfoUrl :'/gps/searchLocInfo.htm',
	quickSearchVehicleUrl :'/gps/quickSearchVehicle.htm',
	areaListUrl : '/area/getAreaList',
	sendMsgUrl : '/tm/sendMsg8300.htm',
	showTrack : '/tm/showTrack.htm?sid=',
	searchTrack : '/his/searchTrack.htm',
	endTrack : '/tm/endTrack.htm',
	startTrack : '/tm/startTrack.htm',
	callName : '/tm/sendMsg8201',

	shapeGetUrl : {
		shape : '/area/getShape.htm',
		gpsPots : '/gps/getRealInfo.htm',
		gpsPotsAllInfo : '/gps/getAllVehicleInfo.htm',
		line : '/line/getLine.htm',
		roadType : '/line/getRoadTypeList.htm'
	},
	shapeSaveUrl : {
		line : '/line/addLine.htm',
		setRoadType : '/line/setRoadType.htm',
		addRoad : '/line/addRoad.htm',
		marker : '/area/saveMarker.htm',
		polyline : '/line/saveRoad.htm',
		circle : '/area/saveCircle.htm',
		polygon : '/area/savePolygon.htm',
		rectangle : '/area/saveRectangle.htm'
	},
	shapeSearchUrl : {
		rectangle : '/area/searchRectangle.htm',
		hisVehicle : '/his/searchHisVehicle.htm',
		hisVehicleByArea : '/his/searchHisVehicleByArea'
	},
	shapeDelUrl : {
		shape : '/area/remShape.htm',
		road : '/line/remRoad.htm',
		line : '/line/remLine.htm'
	},

	setting : {
		loadParam : '/tm/loadParamType.htm',
		queryParam : '/tm/queryParam',
		doSetting : '/tm/doSetting.htm'
	},

	gpsIcon : '/images/pot/e.png',

	sidO__O : '@',
	potIdO__O : '_--_',
	shapeO__O : '-__-',
	cookieO__O : '^_^',

	cmp:'湖南祥瑞智能机器有限公司',
	submitTip : '您确定要提交吗?',

	exportMax : 6000
}