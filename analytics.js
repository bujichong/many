$(document).ready(function(){
	try{
		//生成GUID
		function newGuid()
	    {
		    var guid = "";
		    for (var i = 1; i <= 32; i++){
		      var n = Math.floor(Math.random()*16.0).toString(16);
		      guid +=   n;
		      if((i==8)||(i==12)||(i==16)||(i==20))
		        guid += "-";
		      }
		    return guid;    
	     }
		
	     
	     //得到CookieJson对象
	    function getCookieJson() {
	    	str = document.cookie;
	    	var strJ = {};
	    	if(str){
	    		/** 修改开始 wy  key=value中 value中不可能存在;号 cookie的机制将value中的;和后面的数据忽略了。*/
	    		var array = str.split(";");
	    		if(array.length>0){
	    			for(var i=0;i<array.length;i++){
	    				var jsonStrTemp = array[i];
	    				/** 取第一个=前面的数据作为key */
	    				var key = jsonStrTemp.split("=")[0];
	    				/** 取第一个=后面的数据作为key */
	    				var value = jsonStrTemp.replace(key+"=","");
	    				strJ[key]=value;
	    			}
	    		}
	    		/** 修改结束 wy */
		    }else{
		    	strJ={};
		    }
		    return strJ;		
		}
		
		//设置会过期的Cookie
		function setCookie(name,value,mins) 
		{ 
		    var exp = new Date(); 
		    exp.setTime(exp.getTime() + mins*60*1000); 
		    var domain = document.domain;
		    if(!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(domain)){
		    	var array = domain.split(".");
		    	var length = array.length;
		    	if(length>2){
		    		var seDomain = "."+array[length-2]+"."+array[length-1];
		    		document.cookie =name+"="+escape(value)+";domain="+seDomain+";path=/;"+";expires="+exp.toGMTString();
		    	}else{
		    		document.cookie =name+"="+escape(value)+";path=/;"+";expires="+exp.toGMTString();
		    	}
		    }else{
		    	document.cookie =name+"="+escape(value)+";path=/;"+";expires="+exp.toGMTString();
		    }
		    
		} 
		
		//设置永不过期的Cookie
		function setPermanentCookie(name,value) 
		{ 
		    var exp = new Date(); 
		    exp.setTime(exp.getTime() + 1576800000000); 
		    var domain = document.domain;
		    if(!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(domain)){
		    	var array = domain.split(".");
		    	var length = array.length;
		    	if(length>2){
		    		var seDomain = "."+array[length-2]+"."+array[length-1];
		    		document.cookie =name+"="+escape(value)+";domain="+seDomain+";path=/;"+";expires="+exp.toGMTString();
		    	}else{
		    		document.cookie =name+"="+escape(value)+";path=/;"+";expires="+exp.toGMTString();
		    	}
		    }else{
		    	document.cookie =name+"="+escape(value)+";path=/;"+";expires="+exp.toGMTString();
		    }
		}
		
		//设置hna_userId,isUserFirstVisit,hna_sessionId,isSessionFirstVisit
		function setIdCookie(){
		    var hna_userId = newGuid();   
		    var hna_sessionId = newGuid();      
		    var cookieJson = getCookieJson();
		    if(cookieJson.hna_userId) 
		    	hna_userFirstVisit=0;
		    else 	
		    	hna_userFirstVisit=1;     
		    if(hna_userFirstVisit==1)
		    	setPermanentCookie("hna_userId",hna_userId);     
		    setPermanentCookie("hna_userFirstVisit",hna_userFirstVisit);     
		    if(cookieJson.hna_sessionId) 
		    	hna_sessionFirstVisit=0;
		    else 
		    	hna_sessionFirstVisit=1; 
		    if(hna_sessionFirstVisit==1)
		    	setCookie("hna_sessionId", hna_sessionId, 30);
		    else 
		    	setCookie("hna_sessionId", cookieJson.hna_sessionId, 30);
		    setCookie("hna_sessionFirstVisit", hna_sessionFirstVisit, 30);
	     }
	     
	    //ajax回调函数
	    function successback(data){
//	    	alert("成功");
//	    	var jsondata = data;
//	    	for(var x in jsondata){
//	    		alert(x+"="+jsondata[x]);
//	    		}
	    }
	    function errorback(){ 
//	    	alert("数据返回出错!");
	    }   
	    
	    //格式化日期
	    Date.prototype.format = function(format){ 
			var o = { 
			"M+" : this.getMonth()+1, 
			"d+" : this.getDate(), 
			"h+" : this.getHours(), 
			"m+" : this.getMinutes(), 
			"s+" : this.getSeconds(), 
			"q+" : Math.floor((this.getMonth()+3)/3), 
			"S" : this.getMilliseconds() }; 
			if(/(y+)/.test(format)) { 
			format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
			} 
			for(var k in o) { 
			if(new RegExp("("+ k +")").test(format)) { 
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
			} } 
			return format; 
	    };
	    
	    //获得操作系统版本    
	    function getGeneralOsVersion(userAgent,arrayID){
	    	var osVersionTemp = userAgent.split(";")[arrayID];
			var osV = osVersionTemp.substr(osVersionTemp.length-3,3);
			var osVersion = null;
			switch(osV)
			{
			 case "5.0":
			  osVersion="Windows 2000";
			  break;
			 case "5.1":
			  osVersion="Windows XP";
			  break;
			 case "5.2":
			  osVersion="Windows 2003";
			  break;
			 case "6":
			  osVersion="Windows Vista";
			  break;
			 case "6.1":
			  osVersion="Windows 7";
			  break;
			 default:
			 osVersion=getChromeOsVersion(userAgent,arrayID);
			}
			return osVersion;
	    }
	    
	    //低版本Chrome浏览器的操作系统版本获取
	    function getChromeOsVersion(userAgent,arrayID){
	    	var osVersionTemp = userAgent.split("(")[1];
	    	var osV = osVersionTemp.substr(11,3);
			var osVersion = null;
			switch(osV)
			{
			 case "5.0":
			  osVersion="Windows 2000";
			  break;
			 case "5.1":
			  osVersion="Windows XP";
			  break;
			 case "5.2":
			  osVersion="Windows 2003";
			  break;
			 case "6":
			  osVersion="Windows Vista";
			  break;
			 case "6.1":
			  osVersion="Windows 7";
			  break;
			 default:
			 osVersion="Others osVersion";
			}
			return osVersion;
	    }
	        
	    //获得IE用户的操作系统版本
	    function getOsVersion(userAgent){
			var osVersion = getGeneralOsVersion(userAgent, 2);		
			return osVersion;
	    }
	    
	    //获得Netscape用户的操作系统版本
	    function getNetscapeOsVersion(userAgent){
			var osVersion = getGeneralOsVersion(userAgent, 0);		
			return osVersion;
	    }
	    
	    //获得用户的浏览器版本
	    var BrowserDetect = {init: function () {
				this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
				this.version = this.searchVersion(navigator.userAgent)
					|| this.searchVersion(navigator.appVersion)
					|| "an unknown version";
				this.OS = this.searchString(this.dataOS) || "an unknown OS";
			},
			searchString: function (data) {
				for (var i=0;i<data.length;i++)	{
					var dataString = data[i].string;
					var dataProp = data[i].prop;
					this.versionSearchString = data[i].versionSearch || data[i].identity;
					if (dataString) {
						if (dataString.indexOf(data[i].subString) != -1)
							return data[i].identity;
					}
					else if (dataProp)
						return data[i].identity;
				}
			},
			searchVersion: function (dataString) {
				var index = dataString.indexOf(this.versionSearchString);
				if (index == -1) return;
				return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
			},
			dataBrowser: [
				{
					string: navigator.userAgent,
					subString: "Chrome",
					identity: "Chrome"
				},
				{ 	string: navigator.userAgent,
					subString: "OmniWeb",
					versionSearch: "OmniWeb/",
					identity: "OmniWeb"
				},
				{
					string: navigator.vendor,
					subString: "Apple",
					identity: "Safari",
					versionSearch: "Version"
				},
				{
					prop: window.opera,
					identity: "Opera",
					versionSearch: "Version"
				},
				{
					string: navigator.vendor,
					subString: "iCab",
					identity: "iCab"
				},
				{
					string: navigator.vendor,
					subString: "KDE",
					identity: "Konqueror"
				},
				{
					string: navigator.userAgent,
					subString: "Firefox",
					identity: "Firefox"
				},
				{
					string: navigator.vendor,
					subString: "Camino",
					identity: "Camino"
				},
				{		// for newer Netscapes (6+)
					string: navigator.userAgent,
					subString: "Netscape",
					identity: "Netscape"
				},
				{
					string: navigator.userAgent,
					subString: "MSIE",
					identity: "Explorer",
					versionSearch: "MSIE"
				},
				{
					string: navigator.userAgent,
					subString: "Gecko",
					identity: "Mozilla",
					versionSearch: "rv"
				},
				{ 		// for older Netscapes (4-)
					string: navigator.userAgent,
					subString: "Mozilla",
					identity: "Netscape",
					versionSearch: "Mozilla"
				}
			],
			dataOS : [
				{
					string: navigator.platform,
					subString: "Win",
					identity: "Windows"
				},
				{
					string: navigator.platform,
					subString: "Mac",
					identity: "Mac"
				},
				{
					   string: navigator.userAgent,
					   subString: "iPhone",
					   identity: "iPhone/iPod"
			    },
				{
					string: navigator.platform,
					subString: "Linux",
					identity: "Linux"
				}
			]
		
		};
		BrowserDetect.init();
	        
	    //抓取用户数据
	    function getUserData(strJ) {
	    	var hnUserTemp = getCookieJson();   
	        //var hnUserId = hnUserTemp.hnUserId;
	        var hnUserId = hnUserTemp.HNUSERID;
	        //var hnUserName = hnUserTemp.hnUserName;
	        var hnUserName = hnUserTemp.HNACCOUNT;
		    var currentURL = window.location;  
	        var pageUrl = currentURL.href;  
	        var sourceUrl =document.referrer; 
	        var userAgent = navigator.userAgent;  
	        var os = navigator.platform;  
	        var browser = navigator.appName;  
	        var osVersionTemp = null;
	        if(browser=="Microsoft Internet Explorer")
	        	osVersionTemp = getOsVersion(userAgent);
			if(browser=="Netscape")
				osVersionTemp = getNetscapeOsVersion(userAgent);
			var osVersion = null;
			if(os=="Win32")
				{
				os="Windows";			
				osVersion = osVersionTemp.substr(8);
				}
			else
				{
				os=BrowserDetect.OS;
				osVersion = "other version";
				}
			var browserVersion = BrowserDetect.version;   
			var browserCore = browser;		
			var language = null;
			if(browser=="Netscape")
				language = navigator.language;
			if(browser=="Microsoft Internet Explorer")
				language = navigator.systemLanguage;
			var screenWidth = screen.width;
			var screenHeight = screen.height;
	 		var timeTemp = new Date(); 
	 		var nowStr = timeTemp.format("yyyy-MM-dd hh:mm:ss"); 
	 		var visitTime = nowStr;
	 		if(browser=="Microsoft Internet Explorer");
	 		else if(userAgent.indexOf("Firefox")>0)
	 			browser="Firefox";
	 		else if (userAgent.indexOf("Chrome")>0) {
	 			browser="Google Chrome";
			}
	 		else {
	 			browser=BrowserDetect.browser;
	 		}
	 		strJ["hnUserId"]    = hnUserId; 
	 		strJ["hnUserName"]    = hnUserName; 
		    strJ["pageUrl"]    = pageUrl; 
		    strJ["sourceUrl"]  = sourceUrl;  
		    strJ["userAgent"]  = userAgent;  
		    strJ["os"]  = os; 
		    strJ["osVersion"]  = osVersion; 
		    strJ["browser"]  = browser; 
		    strJ["browserVersion"]  = browserVersion; 
		    strJ["browserCore"]  = browserCore; 
		    strJ["language"]  = language;
		    strJ["screenWidth"]  = screenWidth;
		    strJ["screenHeight"]  = screenHeight;
	 	    strJ["visitTime"]  = visitTime;
	 	    return strJ;
	    }
	    
	    //得到传输到后台所需的AjaxJson对象
	    function getAjaxJson() {
	        var str = document.cookie;
	        var arrayCookie= str.split("; ");
	        str = "";
	        for (var i=0 ; i< arrayCookie.length ; i++){
		       arrayStr = arrayCookie[i].substr(0,4);
		       if(arrayStr=="hna_")
		    	   str=str+arrayCookie[i].substr(4)+";";        
	       }
	        var strJ = {};
	        if(str){
/*		        str = str.substring(0, str.length-1);   
				str = "{"+str+"'"+"}";
			    var reg1= new RegExp(";","g");
			    var reg2 = new RegExp("=","g"); 
			    str = str.replace(reg1, "',");
			    str = str.replace(reg2, ":'"); 
			    strJ = eval ("(" + str + ")");  */
	        	
	        	/** 修改开始 wy  key=value中 value中不可能存在;号 cookie的机制将value中的;和后面的数据忽略了。*/
	        	str = str.substring(0, str.length-1);
	    		var array = str.split(";");
	    		if(array.length>0){
	    			for(var i=0;i<array.length;i++){
	    				var jsonStrTemp = array[i];
	    				/** 取第一个=前面的数据作为key */
	    				var key = jsonStrTemp.split("=")[0];
	    				/** 取第一个=后面的数据作为key */
	    				var value = jsonStrTemp.replace(key+"=","");
	    				strJ[key]=value;
	    			}
	    		}
	    		/** 修改结束 wy */
	        }else{
	        	strJ={};
	        }
		    strJ = getUserData(strJ);
		    return strJ;		
		}
	       
	    //ajax请求函数,数据格式为Jsonp
	    function ajaxRequestDogetJsonp(getUrl){
	        setIdCookie();
	 		var obj=getAjaxJson(); 
	        $.ajax({
	             type: "get",
	             url: getUrl,             
	             dataType: "jsonp",
	             data:obj,
	             success: successback,
	             error: errorback
	         });         
	         }

	    //发送ajax请求  
	    ajaxRequestDogetJsonp("http://analytics.cnhnb.com/collector/collect?callback=?");
	}catch(e){
		/** 捕获到异常不做处理 */
	};
});

    
 
