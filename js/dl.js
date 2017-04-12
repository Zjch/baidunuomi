var txt=document.getElementById('txt');
var pw=document.getElementById('password');
var cb=document.getElementById('checkbox');
var dl=document.getElementById('submit');
var h5=document.getElementById('h5');
var open1 = false,open2=false;

txt.onblur = function () {
	var req =  /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;//邮箱正则
	var sj=/^1[3|4|5|7|8][0-9]{9}$/;						 //手机正则
	if(req.test(txt.value)||sj.test(txt.value)){        //邮箱格式正确
	    h5.innerHTML=''
	    open1 = true;
	}else{
		h5.innerHTML='登录名格式不正确,请重新输入'
	    open1 = false;
	}
}
pw.onblur = function(){
    var reg = /^\w{6,16}$/;
    if(reg.test(pw.value)){
		h5.innerHTML=''
        open2 = true;
    }else{
		h5.innerHTML='请输入6~16位字符'
        open2 = false;
    }
}

dl.onclick=function(){
	if (cb.checked=true) {
		var user=txt.value;
		var pwd=pw.value;
		document.cookie="user="+user;
		document.cookie="pwd="+pwd;
	}
}


