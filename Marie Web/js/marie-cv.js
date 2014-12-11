$(document).ready(function(){
	console.clear();
	$( "#download-btn" ).click(function(e){
		console.log("TO DO DOWNLOAD CV");
		e.preventDefault();  //stop the browser from following
    	window.location.href = 'files/M.LessardCv.zip';
	});
	
	$("#download-btn").on({
	    "mouseenter": function(){
	    	$(this).stop(true,true).addClass("hoverBtn",350);
	    },
	    "mouseleave": function(){
	    	$(this).stop(true,true).removeClass("hoverBtn",350);
	    }
	});
});