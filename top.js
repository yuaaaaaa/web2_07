window.onload = function(){
	var topBox = document.getElementById('topBox');
	var top = document.getElementById('top');
	var topP = document.getElementById('topP');
	var topImg = document.getElementById('topImg')
	function getStyle(obj,style){
    	if(obj.currentStyle){
    		return obj.currentStyle[style];
    	}else{
    		return getComputedStyle(obj)[style];
    	}
    }
	function rolling(){
		var timer = setInterval(function(){
			var now = parseInt(getStyle(topP,'left'));
			var speed = 5;
			if (now == -700) {
				topP.style.left = 700 + 'px';
			}else{
				topP.style.left = now - speed + 'px';
			}
		},80);
	}
	rolling();
}