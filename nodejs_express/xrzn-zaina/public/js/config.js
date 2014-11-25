/**
 * 存放页面公用变量
 */
var $c = {
	/* 用户数据 */
	userInfo : '/gps', //{state:true,msg:'',data:{}}或{state:true,msg:'',data:[]}
	/* 获取用户车辆 */
	vehicleList :'/gps/vehicle/list', //[{sid:'',vehicleNo:'',plateNum:''}]
	/* 获取用户兴趣点 */
	pointList:'/gps/point/list', //
	/* 获取实时位置 */
	vehiclePos : '/gps/realinfo/', // :sid ,
//[{"_id":"5423e5efbcb0d2e1547ac079","sid":"HNAB4918B","am":0,"st":19,"cp":{"elev":500,"speed":650,"dt":52,"dtAlias":"en"},"ce":{"01":73200,"02":199,"03":723},"loc":{"lng":109436426,"lat":37480654},"wLoc":{"lng":109430788,"lat":37479898},"bLoc":{"lng":109442831,"lat":37486982},"time":"2014-10-27T02:33:29.800Z","cd":"2014-10-27T02:33:29.800Z","ml":73200,"acc":true,"gs":1,"alarm":false,"state":3,"ad":"湖北省恩施土家族苗族自治州恩施市"}]
	saveLoc : '/gps/saveLoc',//保持当前位置
	carStateInfo : '/gps/getStatInfo',//状态栏信息获取
	checkTmListUrl : '/gps/checkTmList',//上传树选择的sid字符串
	// shapeGetUrl : {
	// 	shape : '/area/getShape.htm',//获取形状url，当前只有兴趣点类型
	// },
	shapeSaveUrl : {
		marker : '/area/saveMarker.htm',//保存兴趣点
	},
	shapeDelUrl : {
		marker : '/area/delMarker.htm',//删除兴趣点
	},
	showTrack : '/tm/showTrack.htm?sid=',
	searchTrack :'/his/searchTrack.htm',//历史轨迹url  {sid : sid,start : time,end : time}
	gpsIcon : '/images/pot/e.png',
	sidO__O : '@',
	potIdO__O : '_--_',
	shapeO__O : '-__-',
	cookieO__O : '^_^',

	cmp:'湖南祥瑞智能机器有限公司',
	submitTip : '您确定要提交吗?',

	exportMax : 6000
};