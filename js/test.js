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

function setScreenAnimate(screenClass) {
	var screen = document.querySelector(screenClass);
	var animateElements = animateClass[screenClass];
	var isInit = false;
	var isDone = false;
	screen.onclick = function() {
		//初始化
		if(isInit === false) {
			for(var i = 0; i < animateElements.length; i++) {
				var ele = document.querySelector(animateElements[i]);
				var baseClass = ele.getAttribute("class");
				ele.setAttribute("class", baseClass + "  " + baseClass + "_animate_init");
			}
			isInit = true;
			return;
		}
		//切换所有标签由init--done
		if (isDone===false) {
			for (var i = 0; i <animateElements.length; i++) {
				var ele=document.querySelector(animateElements[i]);
				var baseClass=ele.getAttribute("class");
				ele.setAttribute("class", baseClass.replace("_animate_init","_animate_done"));
			}
			isDone=true;
			return;
		}
		//切换所有标签由done--init
		if(isDone===true){
			for (var i = 0; i < animateElements.length; i++) {
				var ele=document.querySelector(animateElements[i]);
				var baseClass=ele.getAttribute("class");
				ele.setAttribute("class", baseClass.replace("_animate_done","_animate_init"));
			}
			isDone=false;
			return;
		}

	}
}
for (k in animateClass) {
	setScreenAnimate(k);
}
