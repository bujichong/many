//jQuery.cookie
jQuery.cookie=function(a,b,c){var d,e,f,g,h,i,j,k,l;if("undefined"==typeof b){if(i=null,document.cookie&&""!=document.cookie)for(j=document.cookie.split(";"),k=0;k<j.length;k++)if(l=jQuery.trim(j[k]),l.substring(0,a.length+1)==a+"="){i=decodeURIComponent(l.substring(a.length+1));break}return i}c=c||{},null===b&&(b="",c.expires=-1),d="",c.expires&&("number"==typeof c.expires||c.expires.toUTCString)&&("number"==typeof c.expires?(e=new Date,e.setTime(e.getTime()+1e3*60*60*24*c.expires)):e=c.expires,d="; expires="+e.toUTCString()),f=c.path?"; path="+c.path:"",g=c.domain?"; domain="+c.domain:"",h=c.secure?"; secure":"",document.cookie=[a,"=",encodeURIComponent(b),d,f,g,h].join("")};
/* hoverClass */
$.fn.hoverClass=function(a,b,c){var d=this;return d.each(function(e){d.eq(e).mouseenter(function(){$(this).addClass(a),b&&b(this)}),d.eq(e).mouseleave(function(){$(this).removeClass(a),c&&c(this)})}),d};
/* textFocus */
$.fn.textFocus=function(a){var b,c;return a=$.extend({val:null,focusCls:"txt-focus",changeCls:"txt-change",keyback:function(){}},a||{}),b=a.focusCls,c=a.changeCls,this.each(function(){var d=$(this),e=null==a.val?$(d).val():a.val;d.val(e),d.focus(function(){d.val()==e&&d.val(""),b&&d.addClass(b)}),d.blur(function(){""==d.val()&&d.val(e),b&&d.removeClass(b)}),c&&d.keyup(function(){d.val()!=e&&""!=d.val()?d.addClass(c):d.removeClass(c),a.keyback(d)})}),this};


/* soValidate */
!function(){$.fn.serializeObject=function(){var a={},b=this.serializeArray();return $.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""}),a},$.fn.soValidate=function(o){var _self,$inputs,$submitBtn,$rules,vv;return o=$.extend({attr:"validate",quickAttr:"cls",errorCls:"txt-err",msgCls:"em-errMes",msgPos:null,inputPar:".p-item",errDiyAttr:"errorDiy",trim:!0,inInputs:null,exInputs:null,validate:!0,submitBtn:null,submit:function(a){a.submit()},fail:function(){}},o||{}),_self=$(this),$rules=$.soValidate.rules,vv={validate:function(a){o=$.extend(o,a||{}),$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),$inputs=_self.find(":input").add(o.inInputs).not(o.exInputs).not(":submit"),$submitBtn=o.submitBtn?$(o.submitBtn):_self.find("input:submit"),o.validate&&($submitBtn.bind("click.validate",function(a){a.preventDefault(),vv._submitValidate()}),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}))},_blurValidate:function(a){vv._inputCheck(a)},_submitValidate:function(){var a=!0,b=[];$inputs.each(function(){var c=vv._inputCheck(this);!c.state&&b.push(this),a=a&&c.state}),a?o.submit(_self):o.fail(_self,b)},_inputCheck:function(obj){function eachValid(a,b,c,d,e){var f=!0;return"required"==c&&(f=r["required"].rule(b)),"easydrop"==c&&(f=r[c].rule(b,d,a)),r[c]&&b&&(f=r[c].rule(b,d,a)),f?(a.removeClass(tE.errorCls),vv._byTip(a,!1,tE.msgCls,tE.inputPar,tE.msgPos)):(e=e||r[c].msg(b,d),a.addClass(tE.errorCls),vv._byTip(a,e,tE.msgCls,tE.inputPar,tE.msgPos)),f}var val,attr,errDiyAttr,quickAttr,r,state,tE,errDiyO,quickArr,attrO,$o=$(obj);if(o.trim&&$o.val($.trim($o.val())),val=$o.val(),attr=$o.attr(o.attr),errDiyAttr=$o.attr(o.errDiyAttr),quickAttr=$o.attr(o.quickAttr),r=$rules,state=!0,tE={errorCls:o.errorCls,msgPos:o.msgPos,msgCls:o.msgCls,inputPar:o.inputPar},errDiyAttr&&(errDiyO=eval("("+errDiyAttr+")"),$.extend(tE,errDiyO||{})),quickAttr&&(quickArr=quickAttr.split(" "),$.each(quickArr,function(a,b){var c,d;return vArr=b.split(/\['|\["|"\]|'\]|\[|\]/),c=vArr[0],d=vArr[1]?vArr[1]:null,state=eachValid($o,val,c,null,d),state?void 0:!1}),!state))return{state:!1};if(attr){try{attrO=eval("("+attr+")")}catch(e){return window.console?console.log(attr+" 验证格式不正确，必须为JSON！"):alert(attr+" 验证格式不正确，必须为JSON！"),{state:!1}}if($.each(attrO,function(a,b){var c=a,d=null,e=null;return"string"==typeof b&&(e=b),"object"==typeof b&&(b.msg&&(e=b.msg),b.opt&&(d=b.opt)),state=eachValid($o,val,c,d,e),state?void 0:!1}),!state)return{state:!1}}return{state:!0}},_byTip:function(a,b,c,d,e){var f=e?$(e):$(a).parents(d)?$(a).parents(d):$(a).parent();b?(f.find("."+c).length<1&&f.append('<em class="'+c+'">'+b+"</em>"),f.find("."+c).html(b)):f.find("."+c).remove()},getInputs:function(){return $inputs},addInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},removeInputs:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},addArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.add(a+" :input"),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},clearArea:function(a){return $inputs.unbind("blur.validate"),$inputs=$inputs.not(a+" :input"),$(a+" :input").removeClass(o.errorCls),$(a).find("."+o.msgCls).remove(),$inputs.bind("blur.validate",function(){vv._blurValidate(this)}),$inputs},destroy:function(){$inputs&&$inputs.unbind("blur.validate"),$submitBtn&&$submitBtn.unbind("click.validate"),_self.find(":input").removeClass(o.errorCls),_self.find("."+o.msgCls).remove()}},vv.validate(),{validate:vv.validate,getInputs:vv.getInputs,addInputs:vv.addInputs,removeInputs:vv.removeInputs,addArea:vv.addArea,clearArea:vv.clearArea,destroy:vv.destroy}},$.soValidate={rules:{},addRex:function(a){$.extend(this.rules,a)}},$.soValidate.addRex({required:{rule:function(a){return""!=a},msg:function(){return"请填写必填字段！"}},baseChar:{rule:function(a){return/^[\u0391-\uFFE5\w]+$/.test(a)},msg:function(){return"只能用中文、英文字母、数字和下划线"}},number:{rule:function(a){return/^[\d]+([\.][\d]+){0,1}$/.test(a)},msg:function(){return"请填写正确的数字！"}},email:{rule:function(a){return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)},msg:function(){return"请填写正确的电子邮箱！"}},phone:{rule:function(a){return/^(0\d{2,3})-(\d{7,8})(-(\d{2,}))?$/.test(a)},msg:function(){return"请填写正确的电话号码！如：010-62392951"}},mobile:{rule:function(a){return/^((1)+\d{10})$/.test(a)},msg:function(){return"请填写正确的手机号！"}},equalTo:{rule:function(a,b){return a==$(b).val()},msg:function(){return"两次填写的值不一致，请重新填写！"}},zipCode:{rule:function(a){return/^[0-9]{6}$/.test(a)},msg:function(){return"请填写正确的邮政编码！"}},len:{rule:function(a,b){return a.length>b[0]&&a.length<b[1]},msg:function(a,b){return"请填写一个长度大于"+b[0]+"小于"+b[1]+"的字符"}},max:{rule:function(a,b){return b>a},msg:function(a,b){return"请填写一个小于"+b+"的数字"}},min:{rule:function(a,b){return a>b},msg:function(a,b){return"请填写一个大于"+b+"的数字"}},easydrop:{rule:function(a,b,c){var d=c.siblings(".combo").find(".combo-value").val();return d=$.trim(d),""===d?!1:!0},msg:function(){return"请选择..."}},remote:{rule:function(a,b){var d,e,c={};return c[b.key]=a,d=$.extend(c,b.data||{}),e=!1,$.ajax({url:b.url,data:d,async:!1,success:function(a){e=a.success},error:function(){alert("向服务器请求验证失败！")}}),e},msg:function(){return"您的填写不正确！"}}}),$.fn.groupRequired=function(a){var c,b={style:"and",type:"required",attr:"class"};return"string"==typeof a?b.style=a:$.extend(b,a||{}),c=$(this),"and"==b.style&&c.blur(function(){""!=this.value?c.addClass(b.type):c.removeClass(b.type)}),"or"==b.style&&(c.addClass(b.type),c.blur(function(){var a=!1;c.each(function(){return""!=$(this).val()?(a=!0,!1):void 0}),a?c.removeClass(b.type):c.addClass(b.type)})),c}}(jQuery);

var formE = {
	login : function(form){
		var r=$("#r").val();
		$.post("/login.html",{
			r:r,
			username:$('#username').val(),
			password:md5((r+md5($('#password').val().toUpperCase())).toUpperCase())
		},function(rst){
			if(rst.state){
				location.href='/';
			}else{
				//显示错误信息
				console.log(rst.msg);
			}
		},"JSON");
	},
	reg : function(form){
		$.post("/reg.html",{
			r:$("#r").val(),
			username:$('#username').val(),
			password:md5($('#password').val())
		},function(rst){
			if(rst.state){
				//跳转
			}else{
				//显示错误信息
				console.log(rst.msg);
			}
		},"JSON");
	},
	contcat: function () {
		$.post("/contcat.html",{
			username:$('#username').val(),
			phone:$('#phone').val(),
			msg: $('#message').val()
		},function(rst){
			if(rst.state){
				//跳转
			}else{
				//显示错误信息
				console.log(rst.msg);
			}
		},"JSON");
	}
};
$(function () {
	if ($('.form-validate').length) {
		$('.form-validate .txt').textFocus().focus(function () {
			$(this).siblings('.lab-df').hide();
		}).blur(function () {
			if($(this).val()==''){
				$(this).siblings('.lab-df').show();
			}
		});


		$('.lab-df').click(function () {
			$(this).hide();
			$(this).prev('.txt').focus();
		});

		$('.form-validate').soValidate({//验证登录弹窗里的表单
			//inputPar :  null,
			submit : function (form) {//默认验证成功提交submit事件
				var rel = form.attr('rel');
				formE[rel](form);
			},
			fail : function (form,failInputs) {//验证失败
				var $failF = $(failInputs[0]);
				//$("html,body").stop().animate({'scrollTop': $failF.offset().top});//定位到第一个验证失败的对象
				$failF.focus();
			}
		});

	};

	if ($('.appCont').length) {
		setCont();
		$(window).resize(function () {
			setCont();
		});
		$('.appCont .phone').animate({opacity:1,marginLeft:'-80px',marginTop:'-140px'},2000);
	};

	function setCont () {
		var wh = $(window).height();
		if (wh>860) {$('.appCont').height(wh-161)};
	}

	function setFixFooter () {
		//window.console && console.log($(window).height(),$('body').height());
		if ($(window).height()>$('body').height()) {
			$('.footer').addClass('fix-footer');
		}else{
			$('.footer').removeClass('fix-footer');
		};
	}

	if($('body#index').length==0){
		$(window).resize(function () {
			setFixFooter();
		});
		setFixFooter();
	}
});





