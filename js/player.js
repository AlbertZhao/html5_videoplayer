function start()
{
	// var idx=1;
	// document.getElementById('video').src = "../files/" + idx + ".mp4";
	video.play();

}

function pause() {
	video.pause();
}

function volumeUp() {
	if (video.volume==1.0) {

	} else {

		video.volume= video.volume + 0.1;
	}

}

function volumeDown() {
	if (video.volume == 0){

	} else {
		video.volume = video.volume - 0.1;
	}
}


function disableMute() {
	
}

function enableMute() {
	if (video.muted){
		video.muted=false;
	} else {
		video.muted=true;
	}
	// $("#btnHeadPhones").setAttribute(disabled, true);

}

function stop(){
	video.pause();
	video.currentTime = 0;
}



function next()
{
	var url=document.getElementById('video').src,x;
	url=String(url);
	if(url.length)
	{
		for(var i=0;i<url.length;i++) 
		{
			x=url.charAt(i);
	  		if(x>='1'&&x<='9')
	  		{
	  			x=parseInt(x);
	  			break;
	  		}
		}
		x=x+1;
		if(x>6) x=x%6;
	}
	else x=1;
	url="videos/" + x + ".mp4";
	document.getElementById('video').src=url;
}

function prev()
{
	var url=document.getElementById('video').src,x;
	url=String(url);
	if(url.length)
	{
		for(var i=0;i<url.length;i++) 
		{
			x=url.charAt(i);
	  		if(x>='1'&&x<='9')
	  		{
	  			x=parseInt(x);
	  			break;
	  		}
		}
		x=x-1;
		if(!x) x=6;
	}
	else x=1;
	url="videos/" + x + ".mp4";
	document.getElementById('video').src=url;
}


var upCounts=localStorage.getItem("upCounts")!=null?localStorage.getItem("upCounts"):0;
var downCounts=localStorage.getItem("downCounts")!=null?localStorage.getItem("downCounts"):0;;
function up() {
	upCounts = parseInt(upCounts) + 1

	localStorage.setItem("upCounts",upCounts);
	$("#span_up").text(localStorage.getItem("upCounts"));

}

function down() {
	downCounts = parseInt(downCounts) +1;
	localStorage.setItem("downCounts",downCounts);
	$("#span_down").text(localStorage.getItem("downCounts"));
}

$().ready(function () {
	$("#span_up").text(localStorage.getItem("upCounts"));
	$("#span_down").text(localStorage.getItem("downCounts"));

	$("#item1").click(function(){
		video.src="../files/1.mp4";
		start();
	});

	$("#item2").click(function(){
		video.src="../files/2.mp4";
		start();
	});

	$("#item3").click(function(){
		video.src="../files/3.mp4";
		start();
	});

	$("#item4").click(function(){
		video.src="../files/4.mp4";
		start();
	});

	$("#item5").click(function(){
		video.src="../files/5.mp4";
		start();
	});

});



