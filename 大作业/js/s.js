window.onload=function(){
	var pic=document.getElementById("pic");
	var divTip1=document.getElementById("divTip1");
	pic.onmousemove=function(e){
		divTip1.style.display="block";
		divTip1.style.left=e.clientX-250+"px";
		divTip1.style.top=e.clientY-250+"px";
	}
	pic.onmouseout=function(){
	    divTip1.style.display="none";
	}
};