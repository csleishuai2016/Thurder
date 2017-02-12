var getEle=function(cls){
	return document.querySelector(cls);
}

var getAllEle=function(cls){
	return document.querySelectorAll(cls);
}

var getCls=function(ele){
	return ele.getAttribute("class");
}

var addCls=function(ele,cls){
		var baseCls=getCls(ele);
	if (baseCls.indexOf(cls)===-1) {
		ele.setAttribute("class",baseCls+"  "+cls);
	}
}

var delCls=function(ele,cls){
		var baseCls=getCls(ele);
	if (baseCls.indexOf(cls)!=-1) {
		ele.setAttribute("class",baseCls.split(cls).join(" ").replace(/\s+/g," "));
	}
}

var animateClass = {
	".screen-1": [
		".screen-1__h1",
		".screen-1__phone",
		".screen-1__shadow",
	],
	".screen-2": [
		".screen-2__h2",
		".screen-2__h3",
		".screen-2__phone",
		".screen-2__point-right",
		".screen-2__point-left-1",
		".screen-2__point-left-2"
	],
	".screen-3": [
		".screen-3__h2",
		".screen-3__h3",
		".screen-3__phone",
		".screen-3__content"
	],
	".screen-4": [
		".screen-4__h2",
		".screen-4__h3",
		".screen-4__phone__item-1",
		".screen-4__phone__item-2",
		".screen-4__phone__item-3",
		".screen-4__phone__item-4",
	],
		".screen-5": [
		".screen-5__h2",
		".screen-5__h3",
		".screen-5__phone",
		]

};
//1.初始化
var animateInte=function(screenClass){
	var screenCls=animateClass[screenClass];
	for (var i = 0; i < screenCls.length; i++) {
		var ele=getEle(screenCls[i]);
		var cls=getCls(ele);
		ele.setAttribute("class",cls+" "+cls+"_animate_init");
	}
}

var animateDone=function(screenClass){
	var screenCls=animateClass[screenClass];
	for (var i = 0; i < screenCls.length; i++) {
		var ele=getEle(screenCls[i]);
		var cls=getCls(ele);
		ele.setAttribute("class",cls.replace("_animate_init","_animate_done"));
	}
}
window.onload=function(){
	for (k in animateClass) {
		animateInte(k);
	}
}


//2.滚动到哪里，就播放到哪里

window.onscroll=function(){
//	var top=get_scrollTop_of_body();
	var top = document.body.scrollTop || document.documentElement.scrollTop;
	console.log(top);
	if(top>80){
		addCls(getEle(".header"),"header__status_active");
		addCls(getEle(".outline"),"outline__status_active");
	}else{
		delCls(getEle(".header"),"header__status_active");
		delCls(getEle(".outline"),"outline__status_active");
	}
	selecterNavs(0);
	selecterOutlines(0);
	if(top>1){
		animateDone(".screen-1");
	}
	if(top>800*1-1){
		animateDone(".screen-2");
		selecterNavs(1);
		selecterOutlines(1);

	}
	if(top>800*2-1){
		animateDone(".screen-3");
		selecterNavs(2);
		selecterOutlines(2);

	}
	if(top>800*3-1){
		animateDone(".screen-4");
		selecterNavs(3);
		selecterOutlines(3);

	}
	if(top>800*4-1){
		animateDone(".screen-5");
		selecterNavs(4);
		selecterOutlines(4);
	}
}
var navs=getAllEle(".header__nav-item");
var outlines=getAllEle(".outline__item");

function selecterNavsMove(idx){
	for (var i = 0; i < navs.length; i++) {
	delCls(navs[i],"header__nav-item-active");
	}
	addCls(navs[idx],"header__nav-item-active");
}
function selecterNavs(idx){
	for (var i = 0; i < navs.length; i++) {
	delCls(navs[i],"header__nav-item-active");
	delCls(navs[i],"header__nav-item-color");
	}
	addCls(navs[idx],"header__nav-item-active");
	addCls(navs[idx],"header__nav-item-color");

}

function selecterOutlines(idx){
	for (var i = 0; i < outlines.length; i++) {
	delCls(outlines[i],"outline__item-active");
	}
	addCls(outlines[idx],"outline__item-active");

}



//3.导航条，大纲双向定位
function navItems(navs){
	for (var i = 0; i < navs.length; i++) {
		navs[i].id=i;
		navs[i].onmousemove=function(){
			var idx=this.id;
			selecterNavsMove(idx)
		}
		navs[i].onclick=function(){
			var idx=this.id;
			
		}
	}
}
function OutlinesItems(outlines){
	for (var i = 0; i < outlines.length; i++) {
		outlines[i].id=i;
		outlines[i].onclick=function(){
			var idx=this.id;
			selecterOutlines(idx);
		}
	}
}

navItems(navs);
OutlinesItems(outlines);
