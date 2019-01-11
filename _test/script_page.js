cout = console.log;
var pagename = "project.html";
var keyname = "project";
var pi = undefined;
var th_folder = "/images/";


//
//
//
//
var datafile = "http://jl646.com/_test/data.js";
//
//
//
//


// get data
var data;
getdata();
function getdata(){
	if(!window.data){
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
	
	// get project index from query string
	pi = getProjectIndex();
	
	// set keys
	setPageViewKeys();

	// build page layout
	populate();


	d3.selectAll(".content img").attr("onclick", "attribute_check_then_blowup(this)");
}
function attribute_check_then_blowup(this_arg){
	var attr = $(this_arg).attr("maxwidth");
	// For some browsers, `attr` is undefined; for others `attr` is false.  Check for both.
	if (typeof attr !== typeof undefined && attr !== false) {
	    blowup(this_arg.src, 1200);
	}
	else {
		blowup(this_arg.src);
	}
}
function getProjectIndex(){

	var i = data.findIndex(function(d){

		// override this
		return d.query == "all";

	});
	return i;
}
function getpreviousindex(){
	var newindex = pi - 1;
	if(newindex < 0) newindex = data.length - 1;
	else newindex %= data.length;
	return newindex;	
}
function getnextindex(){
	var newindex = (pi+1) % data.length;
	return newindex;
}
function goleft(){

	// special handling for "emailmarketing" page
	// window.location = pagename+"?"+keyname+"="+data[getpreviousindex()].query;
	if(data[getpreviousindex()].query == "emailmarketing"){
		window.location = "project_visual.html";
	}
	else {
		window.location = pagename+"?"+keyname+"="+data[getpreviousindex()].query;
	}
}
function goright(){

	// special handling for "emailmarketing" page
	//window.location = pagename+"?"+keyname+"="+data[getnextindex()].query;
	if(data[getnextindex()].query == "emailmarketing"){
		window.location = "project_visual.html";
	}
	else {
		window.location = pagename+"?"+keyname+"="+data[getnextindex()].query;
	}
}
function getpreviousblurb(){

	return data[getpreviousindex()].blurb;
}
function getnextblurb(){

	return data[getnextindex()].blurb;
}
function setPageViewKeys(){
	$("body").off("keydown");
	$("body").keydown(function(e) {
		if(e.keyCode == 37) { // left
			goleft();
		}
		else if(e.keyCode == 39) { // right
			goright();
		}
		else if (e.keyCode == 27) { // escape
		    
		    // window.location = "index.html";
		    window.location = "/";
		    
		}
	});
}
function populate() {


	// populate page based on query string
	var item = data[pi];


	// special handling for "emailmarketing" page
	if(item.query == "emailmarketing"){
		window.location = "project_visual.html";
	}


	$(".pageBody").addClass(item.query);
	d3.select(".pageBody")
		.insert("div",":first-child").attr("class", "subtitle")
		.text(item.subtitle)
		;
	d3.select(".pageBody")
		.insert("div",":first-child").attr("class", "title museo")
		.text(item.title)
		;
	d3.select(".pageContent")
		//.append("div").attr("class", "masonry-layout")
		.append("div")
		.html(item.content)
		;



	// special width for emails page
	if(item.query == "emailmarketing"){
		$(".pageContent").addClass("emailmarketing")
	}



	// previous, next, escape
	function getsplitwords(s){
		var threshold = 13;
		if(s.length < threshold){
			return s;
		}
		else {
			return s.split(" ").join("<br>")
		}
	}
	d3.select(".goleft .cell")
		.append("div").attr("class", "arrowcontainer tk-aktiv-grotesk")
		;
	// arrow first then text
	d3.select(".goleft .cell .arrowcontainer")
		.append("div").attr("class", "arrow")
		.append("div").attr("class", "image")
		;
	d3.select(".goleft .cell .arrowcontainer")
		.append("div").attr("class", "text")
		.html(getsplitwords(getpreviousblurb()))
		;
	// text then arrow
	d3.select(".goright .cell")
		.append("div").attr("class", "arrowcontainer tk-aktiv-grotesk")
		.append("div").attr("class", "text")
		.html(getsplitwords(getnextblurb()))
		;
	d3.select(".goright .cell .arrowcontainer")
		.append("div").attr("class", "arrow")
		.append("div").attr("class", "image")
		;



	$(".goleft .arrowcontainer").mouseover(function(){
		$(this).addClass("rollover");
	});
	$(".goright .arrowcontainer").mouseover(function(){
		$(this).addClass("rollover");
	});
	$(".goleft .arrowcontainer, .goright .arrowcontainer").mouseout(function(){
		$(this).removeClass("rollover");
	});
	$(".goleft .arrowcontainer").click(goleft);
	$(".goright .arrowcontainer").click(goright);



	/* stop flicker in menu arrows */
	var imageloader = new Image();
	imageloader.onload = function () {
	   $(".menu").css("opacity", "1");
	}
	imageloader.src = th_folder + "arrow_white_fill.png";
}

















