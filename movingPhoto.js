var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var ismoving = false; 
//轮播函数
function next(){
	if (!ismoving) {
		ismoving = true;
		index++;
		navChange();
		animate(slider,{left:-1200 * index},function(){
			if(index === 6){
				slider.style.left = "-1200px";
				index = 1;
			}
			ismoving = false;
		});
	}
}
function prev(){
	if(ismoving){
		return;
	}
	ismoving = true;
	index--;
	animate(slider,{left:-1200 * index},function(){
		if(index === 0){
			slider.style.left = "-6000px";
			index = 5;
		}
		ismoving = false;
	});
}
var timer = setInterval(next,3000);
//鼠标滑入
box.onmouseover = function(){
	animate(left,{opacity : 50});
	animate(right,{opacity : 50});
	clearInterval(timer);
}
//鼠标滑出
box.onmouseout = function(){
	animate(left,{opacity : 0})
	animate(right,{opacity : 0})
	timer = setInterval(next,3000)
}
right.onclick = next;
left.onclick = prev;

for(var i = 0;i < oNavlist.length;++i){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx + 1;
		navChange();
		animate(slider,{left : -1200 * index})
	}
}

function navChange(){
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = '';
	}
	if(index === 6){
		oNavlist[0].className = 'active';
	}else if (index == 0) {
		oNavlist[4].className = 'active'
	}else{
		oNavlist[index - 1].className = 'active';
	}
}









