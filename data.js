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
				// + panelheadline("Digital")
				+ img(image_folder + "visual_Joyus-20180121_joyus_Shop-40-off.jpg")
				+ spacer
				+ img(image_folder + "visual_Joyus-1.21.18-hero.jpg", " ", " ", true)
				+ spacer
				+ img(image_folder + "20180130_Joyus_Valentines-Day-hero.jpg", " ", " ", true)
				+ spacer
				+ img(image_folder + "20180125_joyus_Tria.jpg", "darkenImage")
				+ spacer
				+ img(image_folder + "Pinterest Pin_300x600_3.jpg")
				+ spacer
				+ img(image_folder + "Social;-Creative---11.1-Grinch-Theme-Guarantee.gif", "darkenImage")
				+ spacer
				+ img(image_folder + "visual_20171221_Tech_DigitalLastMinuteDeals.jpg")
				+ spacer
				+ img(image_folder + "visual_20171122_lifestyle_black_friday_sitewide.jpg")
				+ spacer
				+ img(image_folder + "20180214_Joyus_Vday_GiftsForYourself_preview.jpg")
				)
			+ panel(""
				+ img(image_folder + "20180216_joyus_evergreen_display_ad_300x600.jpg", "darkenImage")
				+ spacer
				+ img(image_folder + "Affiliate_Banners_Design_$9_First_Box_Promotion.jpg", " ", " ", true)
				+ spacer
				+ img(image_folder + "Affiliate_Banners_and_Gmail_Ad.jpg", " ", " ", true)
				+ spacer
				+ img(image_folder + "Black_Friday_email_AM.jpg", "darkenImage")
				+ spacer
				+ img(image_folder + "frames-from-timeline.gif", "darkenImage")
				+ spacer
				+ img(image_folder + "visual_20171203_lifestyle_7DaysofGifting_Day1.jpg")
				+ spacer
				+ img(image_folder + "visual_20171204_lifestyle_7DaysofGifting_Day2.jpg")
				+ spacer
				+ img(image_folder + "visual_marketing_email_crop.jpg", "darkenImage")
				+ spacer
				+ img(image_folder + "visual_20171202_Lifestyle_cyber_week.jpg")
				)
			+ panel(""
				+ img(image_folder + "20180227_joyus_pamper_yourself_preview.jpg", "darkenImage")
				+ spacer
				+ img(image_folder + "visual_20180101_Lifestyle_NewYearNewDeals.gif")
				+ spacer
				+ img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_00.jpg")
				+ spacer
				+ img(image_folder + "20180219_lifestyle_presidents_day_preview.gif")
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
