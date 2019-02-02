cout = console.log;
var pagename = "project.html";
var keyname = "project";


//
//
//
//
var datafile = "http://jl646.com/digital/data.js";
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
		    $(document).ready(makeitems);
		});
	}
	else {
		data = window.data;
		$(document).ready(makeitems);
	}
}


function makeitems(){
	// create thumbnails
	var th_folder = "/images/";
	var items = 
		d3.select(".homepage .pageContent .masonry-layout")
		.selectAll(".masonry-layout .panel")
		.data(data)
		;


	items = 
		items.enter()
		.append("div").attr("class", "panel").attr("id", function(d){ return d.query; })
		.append("div").attr("class", "content")
		.append("a").attr("href", function(d){
			if(d.query == "digital") return "project_visual.html";
			else return pagename+"?"+keyname+"="+d.query;
		})
		;
	items.append("div").attr("class", "headline").text(function(d){ return d.headline; });
	items.append("img").attr("src", function(d){ return th_folder+d.image; });
	items.append("div").attr("class", "caption").text(function(d){ return d.blurb; });


	// add column breaks
	var breakelement = "<div class='panel break'></div>";
	$( breakelement ).insertAfter( "#bags" );
	$( breakelement ).insertAfter( "#pattern" );






	// copy layout for reorder
	$(".homepage .pageContent .masonry-layout").clone().attr("id", "mobile").appendTo(".homepage .pageContent");
	$("#mobile .break").remove();

	$("#mobile #drawings").insertAfter("#mobile #emailmarketing");
	$("#mobile #event").insertAfter("#mobile #ad");
	//$("#mobile #compositing").insertAfter("#mobile #event");
	//$("#mobile #production").insertAfter("#mobile #compositing");
	//$("#mobile #pattern").insertAfter("#mobile #production");





/*



		.append("a").attr("class", "item")
		// special handling for "emailmarketing" page
		// .attr("href", function(d){ return pagename+"?"+keyname+"="+d.query; })
		.attr("href", function(d){
			if(d.query == "emailmarketing") return "project_visual.html";
			else return pagename+"?"+keyname+"="+d.query;
		})
		;


	
	// dummy item for alignment
	var element = d3.select(".workbody .content");
	element.append("div").attr("class", "item dummy");
	element.append("div").attr("class", "item dummy");
	element.append("div").attr("class", "item dummy");



	$(".item").hover(
		// mouseenter
		function(){
			$(this).find(".container-abs").removeClass("hide");
			$(this).find(".image img").addClass("enlarge");
		},
		// mouseleave
		function(){
			$(this).find(".container-abs").addClass("hide");
			$(this).find(".image img").removeClass("enlarge");
		}
	);



	// create menu
	var wrap = d3.select(".menu")
		.append("div").attr("class", "wrap")
		;
	wrap
		.append("div").attr("class", "name tk-aktiv-grotesk")
		.append("a").attr("href", "/")
		.text("Jack Lovell")
		;
	var menuitems = 
	wrap
		.append("div").attr("class", "menuitem tk-aktiv-grotesk")
		;
	menuitems
		.append("a").attr("href", "contact.html")
		.text("contact")
		;



*/






}












