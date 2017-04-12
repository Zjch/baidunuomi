//侧边栏
var lis=document.getElementsByClassName('li');
for (var i=0;i<lis.length;i++) {
	lis[i].onmousemove=function(){
		var chls=this.getElementsByClassName('chl')[0];
		this.className='bor';
		chls.style.display='block'
	}
	lis[i].onmouseout=function(){
		var chls=this.getElementsByClassName('chl')[0];
		chls.style.display='none'
		this.className=''
	}
}

//轮播
var btnL=document.getElementsByClassName('btn-l')[0];
var btnR=document.getElementsByClassName('btn-r')[0];
var botUl=document.getElementsByClassName('banner-ul')[0];
var botLi=botUl.getElementsByTagName('li');
var num=0;
setInterval(function(){
	num++;
	if (num>=2) {
		num=0;
	}
	botUl.style.marginLeft=-num*725+'px';
},1500)
btnL.onclick=function(){
	num++;
	if (num>=2) {
		num=0;
	}
//	console.log(num);
	botUl.style.marginLeft=-num*725+'px';
}
btnR.onclick=function(){
	num--;
	if (num<=0) {
		num = -1;
	}
	console.log(num)
	botUl.style.marginLeft=num*725+'px';
}

//选项卡
var rt=document.getElementsByClassName('rto');
var rtBox=document.getElementsByClassName('rt-box');
for (var i=0;i<rt.length;i++) {
	rt[i].index=i;		//存储下标
	rt[i].onmousemove=function(){
		for (var j=0;j<rt.length;j++) {
			rt[j].className='';
			rtBox[j].style.display='none'
		}
		this.className='active'
		rtBox[this.index].style.display='block'
	}
}

//吸顶搜素
var xNav=document.getElementsByClassName('x-nav')[0];
document.onscroll=function(){
	if (scrollY>500) {
		xNav.style.display='block'
	} else{
		xNav.style.display='none'
	}
}

//最下边
var buttom=document.getElementsByClassName('buttom')[0];
var span=buttom.getElementsByTagName('span')[0];
span.onclick=function(){
	buttom.style.display='none'
}

