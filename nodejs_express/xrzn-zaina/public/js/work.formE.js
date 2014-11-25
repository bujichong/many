require.config({
	//baseUrl: '/js',
	paths: {
		jquery : 'jquery-1.8.2.min',
		config : 'config',
		sobox : 'plugin/jquery.sobox',
		jqExtend : 'plugin/jquery.extend',// cookie,color,soChange
		md5:'md5'
	},
	shim: {
		jquery : {exports : 'jquery'},
		config : {exports : 'config'},
		md5:{exports : 'md5'},
		sobox : ['jquery'],
		jqExtend : ['jquery']
	}
});
 
define(['jquery'], function($) {
	var formE = {
		sideBar : {
			newDevice : function (form) {
				window.console && console.log(form.serializeObject());
				form.clear();
				popO.$pop.removePop();
			}
		}
	};

	return formE;
});
