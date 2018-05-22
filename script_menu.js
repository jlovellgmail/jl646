cout = console.log;
var pagename = "project.html";
var keyname = "project";
var pi = undefined;
var th_folder = "/images/";
var datafile = "http://jl646.com/data.js";



// get data
var data;
getdata();
function getdata(){
	if(!window.data){
		
		// for local testing
		//$.getScript('data.js', function()
		$.getScript(datafile, function()
		{
		    // script is now loaded and executed.
		    data = window.data;
		    $(document).ready(readyhandler);
		});
	}
	else {
		data = window.data;
		$(document).ready(readyhandler);
	}
}


function readyhandler(){
	menu();
}




// create menu
function menu() {
	var wrap = d3.select(".menu")
		.append("div").attr("class", "wrap")
		;
	wrap
		.append("div").attr("class", "name tk-aktiv-grotesk")
		.append("a").attr("href", "/")
		.text("Jack Lovell")
		;
	wrap
		.append("div").attr("class", "menuitem tk-aktiv-grotesk")
		.append("a").attr("href", "contact.html")
		.text("contact")
		;
}

















