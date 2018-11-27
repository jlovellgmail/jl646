var data = [];
window.data = data;
makedata();
function makedata(){

	// html content for pages
	var contentlist = {};
	make_content_list();
	function make_content_list(){
		function panel(s){
			return "<div class='panel'><div class='content'>"+s+"</div></div>";
		}
		function panelheadline(s){
			return "<p class='panelheadline'>"+s+"</p>";
		}
		function columnbreak(){
			return "<div class='panel break'></div>";
		}
		function img(s, classes, style, maxwidth){

			// cout("s: "+s +"maxwidth"+maxwidth);

			if(!classes){
				var returnval = "<img src='"+s+"' onclick='blowup(this.src)'>";
				// cout("returnval: "+returnval);
				return returnval;
			}
			else if(!style){
				var returnval = "<img class='"+classes+"' src='"+s+"' onclick='blowup(this.src)'>";
				// cout("returnval: "+returnval);
				return returnval;
			}
			else if(!maxwidth){
				var returnval = "<img class='"+classes+"' style='"+style+"' src='"+s+"' onclick='blowup(this.src)'>";
				// cout("returnval: "+returnval);
				return returnval;
			}
			else {
				var returnval = "<img class='"+classes+"' style='"+style+"' src='"+s+"' onclick='blowup(this.src)' maxwidth>";
				// cout("returnval: "+returnval);
				return returnval;
			}
		}
		function text(s, classes, style){
			if(!classes) return  "<p>"+s+"</p>";
			else if(!style) return "<p class='"+classes+"'>"+s+"</p>";
			else return "<p class='"+classes+"' style='"+style+"'>"+s+"</p>";
		}
		function caption(s){
			return text(s, "caption");
		}
		function div(classes, contents){
			if(!contents) return "<div class='"+classes+"'></div>";
			else return "<div class='"+classes+"'>"+contents+"</div>";
		}
		var spacer = div("spacer");
		var spacermedium = div("spacermedium");
		var spacersmall = div("spacersmall");
		var spacerextrasmall = div("spacerextrasmall");
		var image_folder = "/images/page_images/";
		contentlist.event = ""
			+ panel(""
				+ "<p class='panelheadline'><span class='clientname'>Sodexo</span> IFMA/CoreNET Booth</p>"
				+ img(image_folder + "event_7.30a.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_7.31a-01.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_Hanging Sign_exterior.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_Curved Sign_Back.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_Curved Sign_Front.jpg", " ", "filter:brightness(.97);")
				+ caption("Sodexo fabric-wrap graphics applied to tradeshow structures.")
				)
			+ panel(""
				+ "<p class='panelheadline'><span class='clientname'>Aramark</span> Guest Chef Event</p>"
				+ img(image_folder + "event_aramark.jpg")
				+ caption("Aramark Guest Chef Event - entrance and sponsor banners.")
				)
			+ panel(""
				+ "<p class='panelheadline'><span class='clientname'>Hershey\'s</span> BlogHer Conference</p>"
				+ img(image_folder + "smores2.jpg")
				+ spacersmall
				+ img(image_folder + "event_forest.jpg")
				+ caption("Hershey's BlogHer 2010 Conference exhibits - Floor-to-ceiling environmental graphics.")
				)
			+ panel(""
				+ "<p class='panelheadline'><span class='clientname'>Sodexo</span> LeadingAge Conference</p>"
				+ img(image_folder + "7.9b-rainbow.jpg")
				+ spacersmall
				+ img(image_folder + "Booth-9.21a.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_render1.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "LeadingAge_render2.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "LeadingAge_curvedwall1.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_curvedwall2.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_curvedwall3.jpg")
				+ spacersmall
				+ img(image_folder + "Convex---Booth-Wall-1.jpg")
				+ spacersmall
				+ img(image_folder + "Convex---Booth-Wall-2.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_all.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "LeadingAge_icecream1.jpg")
				+ caption("Sodexo Trade Show Booth: initial concept renderings and final graphics")
				)
			+ columnbreak()
			+ panel(""
				+ "<p class='panelheadline'><span class='clientname'>Hershey\'s</span> Easter Event</p>"
				+ img(image_folder + "hersheys_double.jpg")
				+ spacersmall
				+ img(image_folder + "hersheys_stage.jpg")
				+ caption("Hershey's Easter Event - step and repeat, kiosks and stage backdrop.")
				)
			+ panel(""
				+ panelheadline("Sodexo FM Booth")
				+ img(image_folder + "FMBooth_elements_set1.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "Kiosk-1---flat-100dpi_detail.jpg")
				+ caption("Sodexo event grahics")
				)
			;
		contentlist.oysters = ""
			+ text("The problem: ", "heading")
			+ text("Oyster farming is a large industry in Rhode Island, but a deadly bacteria periodically kills off oyster populations by up to 90%. However there is one strain of oyster that is immune to the infection, and biologists at The University of Rhode Island are working to discover what makes these oysters different. I had the opportunity to work closely with these researchers to design and build visualization software tools enabling custom explorations of the genetic data produced by their experiments.")
			+ text("Challenges: ", "heading")
			+ text("The first major challenge was the size of the data to be visualized. In these networks a node represents a slice of the genome, and an edge represents a relationship between those two slices. The shear interconnectedness of the network, with over 50,000 edges, was so dense that it appeared to be a solid mass.")
			+ spacermedium
			+ img(image_folder + "oysters_network-1.jpg")
			+ spacer
			+ "<p>The first version of the tool was named <span style='font-style:italic;'>Permissive</span> because of the extreme number of connections - we chose to use the most permissive thresholds in generating the network. The task was then to create interactive tools that allowed the researchers to \"dissolve\" edges in order to isolate small structures within the network that persisted under certain conditions. These structures would signify a special evolutionary relationship shared by a group of genes.</p>"
			+ spacer
			+ '<div class="aspectratio permissive"><iframe src="https://player.vimeo.com/video/233454716?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ spacermedium
			+ img(image_folder + "oysters_network-2_crop-1.jpg")
			+ spacer
			+ img(image_folder + "oysters_oysters - Screen shot 2012-09-10 at 3.53.03 AM.jpg")
			+ spacermedium
			+ img(image_folder + "oysters2.jpg")
			+ spacermedium
			+ img(image_folder + "oysters1.jpg")
			+ spacermedium
			+ img(image_folder + "oysters_2.jpg")
			;
		contentlist.all = ""
			//---------------------------------------
			+ panel(""
				+ panelheadline("Digital")
				+ img(image_folder + "visual_Joyus-20180121_joyus_Shop-40-off.jpg")
				+ spacersmall
				+ img(image_folder + "visual_Joyus-1.21.18-hero.jpg", " ", " ", true)
				+ spacersmall
				+ img(image_folder + "20180130_Joyus_Valentines-Day-hero.jpg", " ", " ", true)
				+ spacersmall
				+ img(image_folder + "20180125_joyus_Tria.jpg", "darkenImage")
				+ spacersmall
				+ img(image_folder + "Pinterest Pin_300x600_3.jpg")
				+ spacersmall
				+ img(image_folder + "Social;-Creative---11.1-Grinch-Theme-Guarantee.gif", "darkenImage")
				+ spacersmall
				+ img(image_folder + "visual_20171221_Tech_DigitalLastMinuteDeals.jpg")
				+ spacersmall
				+ img(image_folder + "20180216_joyus_evergreen_display_ad_300x600.jpg", "darkenImage")
				+ spacersmall
				+ img(image_folder + "frames-from-timeline.gif", "darkenImage")
				+ spacersmall
				+ img(image_folder + "visual_20171203_lifestyle_7DaysofGifting_Day1.jpg")
				+ spacersmall
				+ img(image_folder + "visual_20171204_lifestyle_7DaysofGifting_Day2.jpg")
				+ spacersmall
				+ img(image_folder + "visual_marketing_email_crop.jpg", "darkenImage")
				+ spacersmall
				+ img(image_folder + "20180227_joyus_pamper_yourself_preview.jpg", "darkenImage")
				+ spacersmall
				+ img(image_folder + "visual_20171202_Lifestyle_cyber_week.jpg")
				+ spacersmall
				+ img(image_folder + "visual_20180101_Lifestyle_NewYearNewDeals.gif")
				+ spacersmall
				+ img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_00.jpg")
				+ spacersmall
				+ img(image_folder + "visual_20171122_lifestyle_black_friday_sitewide.jpg")
				+ spacersmall
				+ img(image_folder + "20180219_lifestyle_presidents_day_preview.gif")
				+ spacersmall
				+ img(image_folder + "20180214_Joyus_Vday_GiftsForYourself_preview.jpg")
				)
			//---------------------------------------
			+ panel(""
				+ panelheadline("Events & Trade Shows")
				// + spacersmall
				// + img(image_folder + "7.9b-rainbow.jpg")
				+ spacersmall
				+ img(image_folder + "Booth-9.21a.jpg", " ", " ", true)
				+ spacersmall
				+ img(image_folder + "LeadingAge_render1.jpg", " ", "filter:brightness(.97);", " ", " ", true)
				+ spacersmall
				+ img(image_folder + "LeadingAge_render2.jpg", " ", "filter:brightness(.96);", " ", " ", true)
				+ spacersmall
				+ img(image_folder + "LeadingAge_all.jpg", " ", "filter:brightness(.97);", " ", " ", true)
				+ spacersmall
				+ img(image_folder + "LeadingAge_curvedwall1.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_curvedwall2.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_curvedwall3.jpg")
				+ spacersmall
				+ img(image_folder + "Convex---Booth-Wall-1.jpg")
				+ spacersmall
				+ img(image_folder + "Convex---Booth-Wall-2.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_icecream1.jpg")
				+ spacersmall
				+ img(image_folder + "event_7.30a.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_7.31a-01.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_Hanging Sign_exterior.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_Curved Sign_Back.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_Curved Sign_Front.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "event_aramark.jpg")
				+ spacersmall
				+ img(image_folder + "smores2.jpg")
				+ spacersmall
				+ img(image_folder + "event_forest.jpg")
				+ spacersmall
				+ img(image_folder + "hersheys_double.jpg")
				+ spacersmall
				+ img(image_folder + "hersheys_stage.jpg")
				+ spacersmall
				+ img(image_folder + "FMBooth_elements_set1.jpg", " ", "filter:brightness(.97);")
				+ spacersmall
				+ img(image_folder + "Kiosk-1---flat-100dpi_detail.jpg")
				)
			//---------------------------------------
			+ panel(""
				+ panelheadline("Experimental Filters")
				+ img(image_folder + "gp_hand-170912.jpg")
				+ spacersmall
				+ img(image_folder + "gp_targethorse.jpg", "darkenImage", "width:100%;")
				+ spacerextrasmall
				+ img(image_folder + "gp_horse-170912.jpg")
				+ text("Using simulations of evolution to draw pictures", "heading")
				+ text("Say we have a photo we want to render called the \"target image\". Genetic computer programs seek to replicate this target image through self-generated experimentation. The program process begins by casting random lines across the digital canvas. Most lines don't come even close to the target, but those that come closest are retained by the program and those which don't are discarded. Now we have a new \"generation\" of information and, based on that information, the program refines its aim to more and more accurately reproduce the target image.")
				+ text("Just as in nature, creating a rendering of a photograph with this process involves many generations where individuals, and in this case \"lines\", mate to see if they can create an improved offspring. Literally billions of organisms go extinct and only rarely does a beneficial mutation appear. But unlike nature, the computer can do this very quickly.")
				+ spacersmall
				+ spacersmall
				+ spacersmall
				+ '<div class="aspectratio horses"><iframe src="https://player.vimeo.com/video/231226964?autoplay=1&loop=1&autopause=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
				+ spacersmall
				+ img(image_folder + "gp_eye-170912.jpg")
				+ spacersmall
				+ img(image_folder + "gp_camera-170912.jpg")
				+ spacersmall
				+ img(image_folder + "gp_1211080-230.best.1009.fullscreen_target_945.jpg")
				+ spacersmall
				+ img(image_folder + "gp_1211080-230.best.1009.fullscreen_crop_945.jpg")
				+ spacersmall
				+ '<div class="aspectratio gpshapes"><iframe src="https://player.vimeo.com/video/104474094?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="384" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="movieOverlay"></div></div>'
				+ caption("^^ Casting lines with genetic programs")
				+ spacersmall
				+ img(image_folder + "gp_cat-170912.jpg")
				)
			//---------------------------------------
			//---------------------------------------
			//---------------------------------------
			//---------------------------------------
			//---------------------------------------
			//---------------------------------------
			//---------------------------------------
			//---------------------------------------
			+ columnbreak()
			//---------------------------------------
			+ panel(""
				+ panelheadline("Drawings")
				+ img(image_folder + "smith.jpg")
				// + "<p class='caption'>Rendering executed for an artist<br>Graphite on paper, 56 x 52.6 inches</p>"
				+ spacersmall
				+ img(image_folder + "fallingwater.jpg")
				// + "<p class='caption'>Rendering executed for an artist<br>Ballpoint pen on paper, 48.3 x 39.9 inches</p>"
				+ spacersmall
				+ img(image_folder + "fayum_1800.jpg")
				+ img(image_folder + "fayum.jpg")
				+ "<p class='caption'>Scientific Illustration for The American Museum of Natural History, pencil and digital editing</p>"
				)
			//---------------------------------------
			+ panel(""
				+ "<p class='panelheadline'>Icons & Logos</p>"
				+ img(image_folder + "icons-5.25.18.jpg", "darkenImage")
				+ spacersmall
				+ img(image_folder + "basespace_icons.jpg", "darkenImage")
				+ spacersmall
				+ img(image_folder + "logos.jpg", "darkenImage")
				// + caption("Icons and Logos")
				)
			//---------------------------------------
			+ panel(""
				+ panelheadline("Product Photography")
				+ img(image_folder + "SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_whitebg_1800.jpg")
				+ spacersmall
				+ img(image_folder + "SF-Satchel---2017-01-24-23.35.12---thumbnail-v1b_whitebg_1800.jpg")
				+ spacersmall
				+ img(image_folder + "bags_grid2.jpg", "darkenImage")
				/*
				+ spacersmall
				+ text("My role:", " ", "font-weight:bold;")
				+ text("Designed and executed all aspects including lighting, styling, photography and retouching.", " ", "margin-top:2px;")
				*/
				)
			//---------------------------------------
			+ panel(""
				+ panelheadline("Key Art")
				+ img(image_folder + "keyart_vegucated.jpg")
				// + "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Vegucated</span></p>"
				+ spacersmall
				+ img(image_folder + "keyart_rd_1600.jpg")
				// + "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Racing Dreams</span></p>"
				+ spacersmall
				+ img(image_folder + "keyart_skinnydip.jpg")
				// + "<p class='caption'>Key art for the film <span style='font-style:italic;'>Skinny Dip</span></p>"
				)
			//---------------------------------------
			+ panel(""
				+ panelheadline("Patterns")
				+ img(image_folder + "pattern_dots.jpg")
				+ spacersmall
				+ img(image_folder + "7.27d---swatch-for-website.jpg")
				+ spacersmall
				+ img(image_folder + "pattern_7.7b.jpg")
				)
			//---------------------------------------
			+ panel(""
				+ panelheadline("Ads")
				+ img(image_folder + "Bark_grid_2select.jpg", "", "", 1)
				+ spacersmall
				+ img(image_folder + "Bark_grid.jpg")
				+ spacersmall
				+ img(image_folder + "ad_startsmart.jpg")
				+ spacersmall
				+ img(image_folder + "ad_secondwind.jpg")
				+ spacersmall
				+ img(image_folder + "ad_theonly.jpg")
				+ spacersmall
				+ img(image_folder + "ad_onlysit.jpg")
				+ spacersmall
				+ img(image_folder + "Tandem-7.26.18b.jpg", "darkenImage")
				)
			//---------------------------------------
			;
	}

	// create list of items
	make_items_list();
	function make_items_list(){
		function add(headline, image, blurb, query, title, subtitle, content){
			var object = {
				headline: headline
				,image: image
				,blurb: blurb
				,query: query
				,title: title
				,subtitle: subtitle
				,content: content
			}
			data.push(object);
		}
		//------------------------------------
		add(
			"Digital"
			,"th_visual_2emails.jpg"
			,""
			,"digital"
			,"Emails / Digital Assets"
			,""
			,contentlist.digital
		);
		add(
			"Trade Show Booths"
			,"page_images/Booth-9.21a.jpg"
			,""
			,"event"
			,"Events & Trade Show Booths"
			,""
			,contentlist.event
		);
		data.push({
			headline: "All"
			,image: "page_images/smith_500.jpg"
			,blurb: ""
			,query: "all"
			,title: "All"
			,subtitle: ""
			,content: contentlist.all
		});


		/*
		add(
			"xx"
			,"page_images/ad_secondwind_500.jpg"
			,"Ads"
			,"ad"
			,"Ads"
			,""
			,contentlist.ads
		);
		add(
			"xx"
			,"page_images/SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_whitebg_500.jpg"
			,"Product Photography"
			,"bags"
			,"Product Photography"
			,""
			,contentlist.bags
		);
		add(
			"xx"
			,"page_images/production_TBB20_PeonyJoy_GB_BB_500.jpg"
			,"Print Production"
			,"production"
			,"Print Production"
			,""
			,contentlist.production
		);
		add(
			"xx"
			,"page_images/pattern_dots.jpg"
			,"Patterns"
			,"pattern"
			,"Patterns"
			,""
			,contentlist.pattern
		);
		add(
			"xx"
			,"page_images/icon_500.jpg"
			,"Icons / Logos"
			,"raytrace"
			,"Icons / Logos"
			,""
			,contentlist.other
		);
		add(
			"xx"
			,"page_images/keyart_vegucated_500.jpg"
			,"Key Art"
			,"rd"
			,"Key Art"
			,""
			,contentlist.rd
		);
		add(
			"xx"
			,"page_images/gp_camera_500.jpg"
			,"Custom Image Filters"
			,"gp"
			,"Custom Image Filters"
			,""
			,contentlist.gp
		);
		*/
	}

}
