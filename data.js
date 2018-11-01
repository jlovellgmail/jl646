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
		function img(s, classes, style, maxwidth){
			if(!classes) return  "<img src='"+s+"' onclick='blowup(this.src)'>";
			else if(!style) return "<img class='"+classes+"' src='"+s+"' onclick='blowup(this.src)'>";
			else if(!maxwidth) return "<img class='"+classes+"' style='"+style+"' src='"+s+"' onclick='blowup(this.src)'>";
			else return "<img class='"+classes+"' style='"+style+"' src='"+s+"' onclick='blowup(this.src)' maxwidth>";
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
		contentlist.digital = ""

			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			+ panel(""
				+ img(image_folder + "xxx")
				+ caption("xxx")
				)
			;




			;
		contentlist.titleist = ""
			;
		contentlist.drawings = ""
			+ panel(""
				+ img(image_folder + "smith.jpg")
				+ "<p class='caption'>Rendering executed for an artist<br>Graphite on paper, 56 x 52.6 inches</p>"
				)
			+ panel(""
				+ img(image_folder + "fallingwater.jpg")
				+ "<p class='caption'>Rendering executed for an artist<br>Ballpoint pen on paper, 48.3 x 39.9 inches</p>"
				)
			+ panel(""
				+ img(image_folder + "fayum_1800.jpg")
				+ img(image_folder + "fayum.jpg")
				+ "<p class='caption'>Scientific Illustration for a publication of The American Museum of Natural History, NYC<br>Pencil and digital editing</p>"
				)
			;
		contentlist.gp = ""
			+ panel(""
				+ img(image_folder + "gp_hand-170912.jpg")
				)
			+ panel(""
				+ img(image_folder + "gp_horse-170912.jpg")
				)
			+ panel(""
				+ img(image_folder + "gp_targethorse.jpg", "darkenImage", "width:100%;")
				)
			+ panel(""
				+ '<div class="aspectratio horses"><iframe src="https://player.vimeo.com/video/231226964?autoplay=1&loop=1&autopause=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
				)
			+ panel(""
				+ text("Using simulations of evolution to draw pictures", "heading")
				+ text("Say we have a photo we want to render called the \"target image\". Genetic computer programs seek to replicate this target image through self-generated experimentation. The program process begins by casting random lines across the digital canvas. Most lines don't come even close to the target, but those that come closest are retained by the program and those which don't are discarded. Now we have a new \"generation\" of information and, based on that information, the program refines its aim to more and more accurately reproduce the target image.")
				+ text("Just as in nature, creating a rendering of a photograph with this process involves many generations where individuals, and in this case \"lines\", mate to see if they can create an improved offspring. Literally billions of organisms go extinct and only rarely does a beneficial mutation appear. But unlike nature, the computer can do this very quickly.")
				)
			+ panel(""
				+ img(image_folder + "gp_eye-170912.jpg")
				)
			+ panel(""
				+ img(image_folder + "gp_camera-170912.jpg")
				)
			+ panel(""
				+ img(image_folder + "gp_1211080-230.best.1009.fullscreen_crop_945.jpg")
				)
			+ panel(""
				+ img(image_folder + "gp_1211080-230.best.1009.fullscreen_target_945.jpg")
				)
			+ panel(""
				+ '<div class="aspectratio gpshapes"><iframe src="https://player.vimeo.com/video/104474094?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="384" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="movieOverlay"></div></div>'
				+ caption("Casting lines with genetic programs")
				)
			+ panel(""
				+ img(image_folder + "gp_cat-170912.jpg")
				)
			;
		contentlist.ads = ""
			+ panel(""
				+ img(image_folder + "Bark_grid_2select.jpg", "", "", 1)
				+ spacerextrasmall
				+ img(image_folder + "Bark_grid.jpg")
				+ caption("Print ads for BarkBox.")
				)
			+ panel(""
				+ img(image_folder + "ad_startsmart.jpg")
				+ caption("Ad for Health Warrior.")
				+ spacer
				+ img(image_folder + "ad_secondwind.jpg")
				+ caption("Ad for Health Warrior.")
				)
			+ panel(""
				+ img(image_folder + "Tandem-7.26.18b.jpg", "darkenImage")
				+ caption("Print ad for Tandem.")
				)
			+ panel(""
				+ img(image_folder + "ad_theonly.jpg")
				+ caption("Ad for Health Warrior.")
				+ spacer
				+ img(image_folder + "ad_onlysit.jpg")
				+ caption("Ad for Health Warrior.")
				+ spacer
				+ img(image_folder + "ad_earlycomp1.jpg")
				+ caption("Ad for Health Warrior.")
				)
			;
		contentlist.bags = ""
			+ panel(""
				+ img(image_folder + "SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_whitebg_1800.jpg")
				)
			+ panel(""
				+ img(image_folder + "SF-Satchel---2017-01-24-23.35.12---thumbnail-v1b_whitebg_1800.jpg")
				)
			+ panel(""
				+ text("My role:", " ", "font-weight:bold;")
				+ text("Designed and executed all aspects including lighting, styling, photography and retouching.", " ", "margin-top:2px;")
				)
			+ panel(""
				+ img(image_folder + "bags_grid2.jpg", "darkenImage")
				)
			;
			
		contentlist.event = ""
			+ panel(""
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
				+ img(image_folder + "event_aramark.jpg")
				+ caption("Aramark Guest Chef Event - entrance and sponsor banners.")
				)
			+ panel(""
				+ img(image_folder + "smores2.jpg")
				+ spacersmall
				+ img(image_folder + "event_forest.jpg")
				+ caption("Hershey's BlogHer 2010 Conference exhibits - Floor-to-ceiling environmental graphics.")
				)
			+ panel(""
				+ img(image_folder + "FMBooth_curvedwall1.jpg")
				+ spacersmall
				+ img(image_folder + "FMBooth_curvedwall2.jpg")
				+ caption("Sodexo Event graphics mounted on 12-foot Curved Walls")
				+ spacersmall
				+ img(image_folder + "FMBooth_kiosk1.png")
				+ spacermedium
				+ img(image_folder + "FMBooth_kiosk2.png")
				+ spacersmall
				+ img(image_folder + "FMBooth_all.jpg", " ", "filter:brightness(.97);")
				+ caption("Sodexo event grahics")
				)
			+ panel(""
				+ img(image_folder + "LeadingAge_curvedwall1.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_curvedwall2.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_curvedwall3.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_all.jpg", " ", "filter:brightness(.97);")
				+ caption("Sodexo Trade Show Booth Graphics")
				+ spacersmall
				+ img(image_folder + "LeadingAge_render1.jpg")
				+ spacersmall
				+ img(image_folder + "LeadingAge_render2.jpg")
				+ caption("Concept Renderings")
				)
			+ panel(""
				+ img(image_folder + "LeadingAge_icecream1.jpg")
				+ caption("Sodexo Trade Show Booth Graphics")
				)
			+ panel(""
				+ img(image_folder + "hersheys_double.jpg")
				+ spacersmall
				+ img(image_folder + "hersheys_stage.jpg")
				+ caption("Hershey's Easter Event - step and repeat, kiosks and stage backdrop.")
				)
			;
		contentlist.oysters = ""
			+ text("The problem: ", "heading")
			+ text("Oyster farming is a large industry in Rhode Island, but a deadly bacteria periodically kills off oyster populations by up to 90%. However there is one strain of oyster that is immune to the infection, and biologists at The University of Rhode Island are working to discover what makes these oysters different. I had the opportunity to work closely with these researchers to design and build visualization software tools enabling custom explorations of the genetic data produced by their experiments.")
			+ text("Challenges: ", "heading")
			
			/*
			+ text("When we project data into a readable form, it can look very different depending on how we view it.  For example, one might wish to look at the interrelatedness of specific genes and/or the timing of when certain genes express themselves in the developing oyster. We have to choose a good visual and conceptual projection in order to see features in the data that matter to us.")
			*/
			+ text("The first major challenge was the size of the data to be visualized. In these networks a node represents a slice of the genome, and an edge represents a relationship between those two slices. The shear interconnectedness of the network, with over 50,000 edges, was so dense that it appeared to be a solid mass.")

			+ spacermedium
			+ img(image_folder + "oysters_network-1.jpg")
			/*
			+ img(image_folder + "oysters_network-2.jpg")
			*/
			+ spacer
			+ "<p>The first version of the tool was named <span style='font-style:italic;'>Permissive</span> because of the extreme number of connections - we chose to use the most permissive thresholds in generating the network. The task was then to create interactive tools that allowed the researchers to \"dissolve\" edges in order to isolate small structures within the network that persisted under certain conditions. These structures would signify a special evolutionary relationship shared by a group of genes.</p>"
			+ spacer
			+ '<div class="aspectratio permissive"><iframe src="https://player.vimeo.com/video/233454716?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ spacermedium
			+ img(image_folder + "oysters_network-2_crop-1.jpg")

			



			/*
			+ img(image_folder + "oysters_perspectives.jpg")
			+ div("caption credit", 'Credit: Emok via <a href="https://commons.wikimedia.org/wiki/File%3AFirst_angle_projection.svg">Wikimedia Commons</a>')
			*/
			/*
			+ text("Solution:", "heading")
			+ text('Software that enabled the researchers to visualize genes as networks of "nodes and edges". The visualization allowed scientists to test their assumptions by "playing" with the networks, in order to reveal structure in the data. The software had to be flexible enough to accommodate yet-unknown forms of data, as the scientists continually restructured their material. As a major benefit, the programs have made it much easier to describe and share the progress of this research in educational settings, with colleagues, across disciplines, and in the scientific literature.')
			*/

			+ spacer
			//+ img(image_folder + "oysters_slider.gif")
			//+ '<iframe src="https://player.vimeo.com/video/170709062?autoplay=1&amp;loop=1&amp;autopause=0" width="640" height="88" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
			+ img(image_folder + "oysters_oysters - Screen shot 2012-09-10 at 3.53.03 AM.jpg")
			+ spacermedium
			+ img(image_folder + "oysters2.jpg")
			+ spacermedium
			+ img(image_folder + "oysters1.jpg")
			+ spacermedium
			+ img(image_folder + "oysters_2.jpg")
			;
		contentlist.other = ""
			+ panel(""
				+ img(image_folder + "icons-5.25.18.jpg", "darkenImage")
				+ caption("Icons for website")
				)
			+ panel(""
				+ img(image_folder + "basespace_icons.jpg", "darkenImage")
				+ caption("App icons for Illumina's BaseSpace app store")
				)
			+ panel(""
				+ img(image_folder + "logos.jpg", "darkenImage")
				+ caption("Logos")
				)
			;
		contentlist.rd = ""
			+ panel(""
				+ img(image_folder + "keyart_vegucated.jpg")
				+ "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Vegucated</span></p>"
				)
			+ panel(""
				+ img(image_folder + "keyart_rd_1600.jpg")
				+ "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Racing Dreams</span></p>"
				)
			+ panel(""
				+ img(image_folder + "keyart_skinnydip.jpg")
				+ "<p class='caption'>Key art for the film <span style='font-style:italic;'>Skinny Dip</span></p>"
				)
			;
		contentlist.pattern = ""
			+ panel(""
				+ img(image_folder + "pattern_dots.jpg")
				)
			+ panel(""
				+ img(image_folder + "7.27d---swatch-for-website.jpg")
				)
			+ panel(""
				+ img(image_folder + "pattern_7.7b.jpg")
				)
			;
		contentlist.production = ""
			+ panel(""
				+ text("My role:", " ", "font-weight:bold;")
				+ text("Production design. I worked with designers to adjust, refine and clean up their designs as needed and prep files for print. Incorporated metallic and holographic inks. I modified designs to create pattern repeats, and adjusted designs to complement the packaging structure. I completed the print production for gift bags, wrapping paper, and other consumer packaged goods.", " ", "margin-top:2px;")
				)
			+ panel(""
				+ img(image_folder + "production_TBB20_PeonyJoy_GB_BB.jpg")
				)
			+ panel(""
				+ img(image_folder + "production_gb_abstract.jpg")
				)
			+ panel(""
				+ img(image_folder + "production_gb_birthday.jpg")
				)
			+ panel(""
				+ img(image_folder + "production_gb_floral.jpg")
				)
			+ panel(""
				+ img(image_folder + "production_gb_spring_plants.jpg")
				)
			+ panel(""
				+ img(image_folder + "production_gb_hooray.jpg")
				)
			+ panel(""
				+ img(image_folder + "production_unicorns.jpg")
				)
			+ panel(""
				+ img(image_folder + "production_scales.jpg")
				)
			;
		contentlist.compositing = ""

			+ img(image_folder + "face-swap-two-frames.gif")
			+ spacerextrasmall
			+ img(image_folder + "face-swap-side-by-side.jpg")
			+ text("Face swap")
			
			/*
			+ spacer
			+ img(image_folder + "director-in-chair---face-swapped.jpg")
			+ spacer
			+ img(image_folder + "swap with this guy.png")
			+ spacer
			+ img(image_folder + "director in chair.jpg")
			*/

			;
	}

	// create list of items
	make_items_list();
	function make_items_list(){
		function add(image, blurb, query, title, subtitle, content){
			var object = {
				image: image
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
			
			// "page_images/visual_20171221_Tech_DigitalLastMinuteDeals_500.jpg"
			"th_visual_2emails.jpg"

			,"Emails / Digital Assets"
			,"digital"
			,"Emails / Digital Assets"
			,""
			,contentlist.digital
		);
		add(
			"page_images/ad_secondwind_500.jpg"
			,"Ads"
			,"ad"
			,"Ads"
			,""
			,contentlist.ads
		);
		add(
			// "th_bags_v2.jpg"
			"page_images/SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_whitebg_500.jpg"
			,"Product Photography"
			,"bags"
			,"Product Photography"
			,"" //,"Leather handbags"
			,contentlist.bags
		);
		add(
			
			//"page_images/event_aramark_500.jpg"
			"page_images/event_7.30a.jpg"

			,"Events / Trade Show Booths"
			,"event"
			,"Events / Trade Show Booths"
			,""
			,contentlist.event
		);
		add(
			"page_images/production_TBB20_PeonyJoy_GB_BB_500.jpg"
			,"Print Production"
			,"production"
			,"Print Production"
			,""
			,contentlist.production
		);

		/*
		add(
			// "th_bags_v2.jpg"
			"page_images/director-in-chair---face-swapped.jpg"
			,"Image Compositing"
			,"compositing"
			,"Image Compositing"
			,"" //,"Leather handbags"
			,contentlist.compositing
		);
		*/
		
		add(
			// "page_images/pattern_6.20a_swatch-for-store_500.jpg"
			"page_images/pattern_dots.jpg"
			// "page_images/pattern_dots-fabric.jpg"
			,"Patterns"
			,"pattern"
			,"Patterns"
			,""
			,contentlist.pattern
		);
		add(
			"page_images/smith_500.jpg"
			,"Drawings"
			,"drawings"
			,"Drawings"
			,""
			,contentlist.drawings
		);
		add(
			"page_images/icon_500.jpg"
			,"Icons / Logos"
			,"raytrace"
			,"Icons / Logos"
			,""
			,contentlist.other
		);
		add(
			"page_images/keyart_vegucated_500.jpg"
			,"Key Art"
			,"rd"
			,"Key Art"
			,""
			,contentlist.rd
		);
		add(
			"page_images/gp_camera_500.jpg"
			,"Custom Image Filters"
			,"gp"
			,"Custom Image Filters"
			,""
			,contentlist.gp
		);
		/*
		add(
			"th_oysters_gray.jpg"
			,"Data Visualization"
			,"oysters"
			,"Data Visualization"
			,"Collaboration with researchers at the University of Rhode Island Department of Oceanography"
			,contentlist.oysters
		);
		*/
	}

}
