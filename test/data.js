var data = [];
window.data = data;
makedata();
function makedata(){

	// html content for pages
	var contentlist = {};
	make_content_list();
	function make_content_list(){
		function img(s, classes, style){
			if(!classes) return  "<img src='"+s+"' onclick='blowup(this.src)'>";
			else if(!style) return "<img class='"+classes+"' src='"+s+"' onclick='blowup(this.src)'>";
			else return "<img class='"+classes+"' style='"+style+"' src='"+s+"' onclick='blowup(this.src)'>";
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
		contentlist.webdesign = ""






			+ img(image_folder + "visual_20171221_Tech_DigitalLastMinuteDeals.jpg")




			+ spacer
			+ img(image_folder + "visual_Joyus-20180121_joyus_Shop-40-off.jpg")
			/*
			+ spacersmall
			+ img(image_folder + "visual_Joyus-1.21.18-hero.jpg")
			*/
			/*
			+ spacersmall
			+ img(image_folder + "visual_Joyus-1.21.18-collection-hero.jpg")
			*/




			+ spacer
			+ img(image_folder + "20180412_lifestyle_xeric_00.jpg")
			+ img(image_folder + "20180412_lifestyle_xeric_01.gif")
			+ img(image_folder + "20180412_lifestyle_xeric_02.jpg")



			+ spacer
			+ img(image_folder + "20180329_joyus_fitness_ellip_blender_preview_crop2.jpg", " ", "filter:brightness(.97);")



			+ spacer
			+ img(image_folder + "20180219_lifestyle_presidents_day_preview.gif")
			/*
			+ spacer
			+ img(image_folder + "20180216_LIfestyle_PresidentsDaySaleLaunches_PREVIEW.jpg")
			+ spacer
			+ img(image_folder + "20180214_Joyus_Vday_GiftsForYourself_preview.jpg")
			*/

			



			+ spacer
			+ img(image_folder + "20180328_stackskills_ANIMATION_600.gif")




			/*
			+ spacer
			+ img(image_folder + "Civilization-Ad-300x600_frames.gif")
			*/



			

			/*
			+ spacer
			+ img(image_folder + "visual_20180123_joyus_Spotlight-Mirror-40-off_1000.jpg")
			*/

			/*
			+ spacer
			+ img(image_folder + "visual_Dashlane.jpg")
			*/





			/*
			+ spacer
			+ img(image_folder + "visual_20180114_joyus_combat-winter-skin_preview.jpg")
			*/


			+ spacer
			+ img(image_folder + "visual_20180101_Lifestyle_NewYearNewDeals.gif")



			+ spacer
			+ img(image_folder + "visual_20171203_lifestyle_7DaysofGifting_Day1.jpg")
			+ spacerextrasmall
			+ img(image_folder + "visual_20171204_lifestyle_7DaysofGifting_Day2.jpg")



			+ spacer
			+ img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_00.jpg")
			+ spacerextrasmall
			/*
			+ img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_01.jpg")
			+ spacerextrasmall
			*/
			+ img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_03.jpg")
			+ spacerextrasmall
			+ img(image_folder + "visual_20171212_lifestyle_GreenMonday_DailyDeals.jpg")


			+ spacer
			+ img(image_folder + "visual_20171113_lifestyle_doorbusters_day_1.jpg")


			+ spacer
			+ img(image_folder + "visual_20171122_lifestyle_black_friday_sitewide.jpg")



			+ spacer
			//+ img(image_folder + "visual_20171221_Lifestyle_DigitalLastMinuteDeals.jpg", " ", "filter:brightness(.97);")
			+ img(image_folder + "frames-from-timeline.gif", " ", "filter:brightness(.98);")



			+ spacer
			+ img(image_folder + "visual_20171219_Lifestyle_BestOf2017.jpg")



			+ spacer
			+ img(image_folder + "20180320_lifestlye_pricedrop_vibes_earplugs_PREVIEW.jpg")


			+ spacer
			+ img(image_folder + "20180201_joyus_Valentines-Day_material_cropped.jpg", " ", "filter:brightness(.98);")


			+ spacer
			+ img(image_folder + "20180125_joyus_Tria.jpg", " ", "filter:brightness(.97);")


			+ spacer
			+ img(image_folder + "20180227_joyus_pamper_yourself_preview.jpg", " ", "filter:brightness(.98);")


			+ spacer
			+ img(image_folder + "20180412_tech_treblab_z2_wireless_noise-cancelling_headphones_00.jpg")
			+ spacer
			+ img(image_folder + "20180414_academy_project_management.gif", " ", "filter:brightness(.97);")



			+ spacer
			+ img(image_folder + "20180308_lifestlye_complete_digital_marketing_course_preview.jpg", " ", "filter:brightness(.98);")


			+ spacer
			+ img(image_folder + "20180306_lifestyle_comp_tia_preview.jpg")


			+ spacer
			+ img(image_folder + "visual_20171201_Lifestyle_cyber_week.gif")
			+ spacer
			+ img(image_folder + "visual_20171202_Lifestyle_cyber_week.jpg")



			+ spacer
			+ img(image_folder + "visual_20171221_Academy_DigitalLastMinuteDeals.gif")


			+ spacer
			+ spacer
			+ img(image_folder + "visual_20171219_Academy_BestOf2017.jpg")


			+ spacer
			+ img(image_folder + "visual_20171223_Lifestyle_Christmas_02.jpg")


			+ spacer
			+ img(image_folder + "visual_20171127_PM_Academy_cyber_monday.jpg")



			+ spacer
			+ img(image_folder + "visual_marketing_email.jpg")


			/*
			+ spacer
			+ img(image_folder + "web_landing-page_1800.jpg", "dropshadow")
			+ caption("Landing page, Virgil James")
			*/


			;
		contentlist.titleist = ""
			;
		contentlist.drawings = ""
			+ img(image_folder + "smith.jpg")
			+ "<p class='caption'>Rendering executed for an artist<br>Graphite on paper, 56 x 52.6 inches</p>"
			
			/*
			+ spacer
			+ img(image_folder + "flowers_1600.jpg", " ", "filter:contrast(1.07);")
			+ caption("Colored pencil on paper")
			*/

			+ spacer
			+ img(image_folder + "fallingwater.jpg")
			+ "<p class='caption'>Rendering executed for an artist<br>Ballpoint pen on paper, 48.3 x 39.9 inches</p>"
			+ spacer
			+ img(image_folder + "fayum_1800.jpg")
			+ img(image_folder + "fayum.jpg")
			+ "<p class='caption'>Scientific Illustration for a publication of The American Museum of Natural History, NYC<br>Pencil and digital editing</p>"
			//+ caption("Scientific Illustration published by The American Museum of Natural History, NYC")

			/*
			+ spacer
			+ img(image_folder + "bentshape.jpg")
			+ caption("Charcoal on paper")
			+ spacer
			+ img(image_folder + "torso.jpg")
			+ caption("Ink and graphite on paper")
			*/
			/*
			+ spacer
			+ img(image_folder + "parabola.jpg")
			+ caption("Charcoal on paper, 24.7 x 40 inches")
			*/
			;
		contentlist.gp = ""
			+ img(image_folder + "gp_hand-170912.jpg")
			+ spacer

			/*
			+ '<img class="darkenImage" style="width:600px;" src="images/page_images/gp_targethorse.jpg" onclick="blowup(this.src)">'
			*/
			+ img(image_folder + "gp_horse-170912.jpg")
			+ spacermedium
			+ img(image_folder + "gp_targethorse.jpg", "darkenImage", "width:100%;")
			+ spacermedium
			+ '<div class="aspectratio horses"><iframe src="https://player.vimeo.com/video/231226964?autoplay=1&loop=1&autopause=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ spacermedium
			+ text("Stochastic process", "heading")
			+ text("Say we have a photo we want to render called the \"target image\". Genetic computer programs seek to replicate this target image through self-generated experimentation. The program process begins by casting random lines across the digital canvas. Most lines don't come even close to the target, but those that come closest are retained by the program and those which don't are discarded. Now we have a new \"generation\" of information and, based on that information, the program refines its aim to more and more accurately reproduce the target image.")
			+ text("Just as in nature, creating a rendering of a photograph with this process involves many generations where individuals, and in this case \"lines\", mate to see if they can create an improved offspring. Literally billions of organisms go extinct and only rarely does a beneficial mutation appear. But unlike nature, the computer can do this very quickly.")
			+ spacermedium
			+ img(image_folder + "gp_eye-170912.jpg")
			+ spacer
			+ img(image_folder + "gp_cat-170912.jpg")
			+ spacermedium

			/*
			+ '<div class="aspectratio hand"><iframe src="https://player.vimeo.com/video/169456761?autoplay=1&loop=1&autopause=0" width="640" height="760" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="movieOverlay"></div></div>'
			*/

			/*
			+ spacer
			+ img(image_folder + "gp_woman.jpg")
			*/

			+ spacer
			+ img(image_folder + "gp_camera-170912.jpg")
			+ spacer
			
			/*
			+ img(image_folder + "gp_triangles.png")
			+ spacer
			*/

			+ img(image_folder + "gp_1211080-230.best.1009.fullscreen_crop_945.jpg")
			+ spacer
			+ img(image_folder + "gp_1211080-230.best.1009.fullscreen_target_945.jpg")
			+ spacer
			+ '<div class="aspectratio gpshapes"><iframe src="https://player.vimeo.com/video/104474094?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0" width="640" height="384" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><div class="movieOverlay"></div></div>'
			+ caption("Casting lines with genetic programs")
			+ spacer
			;
		contentlist.ads = ""

			// + text("My role:", " ", "font-weight:bold;")
			// + text("Art Direction. I took finalized headline and body copy, and designed and executed all visual aspects including photo selection, visual treatment and typography. I worked closely with the copywriter and creative director to ensure the ads stayed on-strategy and spoke in the intended voice.", " ", "margin-top:2px;")
			// + spacer

			+ img(image_folder + "Tandem-7.26.18b.jpg", "darkenImage")
			+ caption("Print ad for Tandem.")
			+ spacer



			// + img(image_folder + "ad_set.jpg")
			// + spacer
			+ img(image_folder + "ad_startsmart.jpg")
			+ caption("Ad for Health Warrior.")
			+ spacer
			+ img(image_folder + "ad_secondwind.jpg")
			+ caption("Ad for Health Warrior.")
			+ spacer
			+ img(image_folder + "ad_theonly.jpg")
			+ caption("Ad for Health Warrior.")
			+ spacer
			+ img(image_folder + "ad_onlysit.jpg")
			+ caption("Ad for Health Warrior.")
			+ spacer
			+ img(image_folder + "ad_earlycomp1.jpg")
			+ caption("Ad for Health Warrior.")

			/*
			+ spacer
			+ img(image_folder + "ad_headlines_1500.jpg")
			+ caption("Exploring line break variations")
			*/

			;
		contentlist.bags = ""
			+ text("My role:", " ", "font-weight:bold;")
			+ text("Designed and executed all aspects including lighting, styling, photography and retouching.", " ", "margin-top:2px;")

			+ spacer
			
			//+ img(image_folder + "bags_SF-Overnight---2017-01-27-18.31.41---thumbnail_repositioned_1800.jpg")
			//+ img(image_folder + "bags_SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_1800.jpg")
			+ img(image_folder + "SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_whitebg_1800.jpg")

			+ spacer
			
			// + img(image_folder + "bags_SF-Satchel---2017-01-24-23.35.12---thumbnail_repositioned_1800b.jpg")
			//+ img(image_folder + "bags_SF-Satchel---2017-01-24-23.35.12---thumbnail-v1b_1800.jpg")
			+ img(image_folder + "SF-Satchel---2017-01-24-23.35.12---thumbnail-v1b_whitebg_1800.jpg")

			
			// + spacer
			// + img(image_folder + "bags_SFclutch_1800.jpg")
			//+ img(image_folder + "bags_SF-Clutch-v2_1800.jpg")

			+ spacer
			+ img(image_folder + "bags_grid2.jpg", "darkenImage")
			/*
			+ spacer
			+ img(image_folder + "bags_IMG_8892_1200.jpg")
			+ spacer
			+ img(image_folder + "bags_2016-12-08-13.04.20_rt2_50_q9_1200.jpg")
			+ spacer
			+ img(image_folder + "bags_2016-11-28-13.21.43---drawstring-top-edge_1200.jpg")
			*/
			;
		contentlist.event = ""


			+ img(image_folder + "event_aramark.jpg")
			+ caption("Aramark Guest Chef Event - entrance and sponsor banners.")
			//-------------------------
			+ spacer
			+ img(image_folder + "event_7.9b-rainbow.jpg")
			+ caption("Concept renderings.")
			//-------------------------
			+ spacer
			+ img(image_folder + "smores2.jpg")
			+ spacersmall
			+ img(image_folder + "event_forest.jpg")
			+ caption("Hershey's BlogHer 2010 Conference exhibits - Floor-to-ceiling environmental graphics.")
			//-------------------------
			+ spacer
			+ img(image_folder + "hersheys_double.jpg")
			+ spacermedium
			+ img(image_folder + "hersheys_stage.jpg")
			+ caption("Hershey's Easter Event - step and repeat, kiosks and stage backdrop.")

			/*
			+ spacer
			+ text("Hershey's BlogHer Conference Suites 2012", "heading")
			+ text("Floor-to-ceiling environmental graphics.")
			+ spacermedium
			+ img(image_folder + "event_perspectivethreewalls.png")
			+ spacer
			+ img(image_folder + "event_rightwall.jpg")
			+ spacer
			+ img(image_folder + "event_wallgraphic_door.jpg")
			+ spacer
			+ img(image_folder + "event_wall_beach.jpg")
			+ spacer
			+ img(image_folder + "event_blogher2012_wallD_2000.jpg")
			+ spacer
			+ img(image_folder + "event_blogher2012_wallD_detail_1500.jpg")
			+ spacer
			+ img(image_folder + "event_blogher2012_wallE_2000.jpg")
			*/


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
			


			+ img(image_folder + "icons-5.25.18.jpg", "darkenImage")
			+ caption("Icons for website")

			+ spacer
			+ img(image_folder + "basespace_icons.jpg", "darkenImage")
			+ caption("App icons for Illumina's BaseSpace app store")

			
			+ spacer
			+ img(image_folder + "logos.jpg", "darkenImage")
			+ caption("Logos")
			

			/*
			+ spacer
			+ img(image_folder + "titleist.jpg")
			+ div("caption", "Brochure for Titleist products")
			

			+ spacer
			+ '<div class="aspectratio otl"><iframe src="https://player.vimeo.com/video/231601293?autoplay=1&loop=1&autopause=0" width="640" height="382" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ div("caption", "Flash website for the film <span class='titleofwork'>Outside The Law</span>")
			*/


			/*
			+ spacer
			+ img(image_folder + "developer-stats.jpg", "dropshadow")
			+ caption("Analytics dashboard, Illumina BaseSpace")
			+ spacer
			+ '<div class="aspectratio piechart"><iframe src="https://player.vimeo.com/video/168895922?autoplay=1&loop=1&autopause=0" width="640" height="470" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ caption("Piechart animations, Illumina BaseSpace")
			*/

			/*
			+ spacer
			+ img(image_folder + "raytrace.jpg")
			+ caption("Raytracer written from scratch in C++. Capabilities include soft focus / depth of field blurring, recursive reflections, refraction within transparent objects, texture mapping and antialiasing with spheres and polygons.")
			*/

			/*
			+ spacer
			+ img(image_folder + "shirt_front.jpg")
			+ caption("MAGA")
			*/

			
			;
		contentlist.rd = ""
			+ img(image_folder + "keyart_vegucated.jpg")
			+ "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Vegucated</span></p>"
			+ spacer
			+ img(image_folder + "keyart_rd_1600.jpg")
			+ "<p class='caption'>Key art for the documentary film <span style='font-style:italic;'>Racing Dreams</span></p>"
			+ spacer
			+ img(image_folder + "keyart_skinnydip.jpg")
			+ "<p class='caption'>Key art for the film <span style='font-style:italic;'>Skinny Dip</span></p>"
			;
		contentlist.pattern = ""
			// + img(image_folder + "pattern_6.20a_swatch-for-store.jpg")
			// + spacer
			// + img(image_folder + "pattern_6.20a_mockups-front-and-left_700.jpg", "darkenImage")
			// + spacer
			+ img(image_folder + "pattern_dots.jpg")
			+ spacer
			+ img(image_folder + "pattern_dots-fabric.jpg")
			+ spacer
			+ img(image_folder + "pattern_7.7b.jpg")


			/*
			+ spacer
			+ img(image_folder + "pattern_7.5.18a_swatch.jpg")
			+ spacer
			+ img(image_folder + "pattern_pink_camouflage.jpg")
			+ spacer
			+ img(image_folder + "pattern_pink-camouflage-fabric.jpg")
			*/

			// + spacer
			// + img(image_folder + "leggings_2designs.jpg")
			
			;
		contentlist.production = ""

			+ text("My role:", " ", "font-weight:bold;")
			+ text("Production design. I worked with designers to adjust, refine and clean up their designs as needed and prep files for print. Incorporated metallic and holographic inks. I modified designs to create pattern repeats, and adjusted designs to complement the packaging structure. I completed the print production for gift bags, wrapping paper, and other consumer packaged goods.", " ", "margin-top:2px;")

			+ spacer
			+ img(image_folder + "production_TBB20_PeonyJoy_GB_BB.jpg")
			+ spacer
			+ img(image_folder + "production_gb_abstract.jpg")
			+ spacer
			+ img(image_folder + "production_gb_birthday.jpg")
			+ spacer
			+ img(image_folder + "production_gb_floral.jpg")
			+ spacer
			+ img(image_folder + "production_gb_spring_plants.jpg")
			+ spacer
			+ img(image_folder + "production_gb_hooray.jpg")
			+ spacer
			+ img(image_folder + "production_unicorns.jpg")
			+ spacer
			+ img(image_folder + "production_scales.jpg")
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
			,"emailmarketing"
			,"Digital Marketing"
			,"Emails / Digital Assets"
			,contentlist.webdesign
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
			// "th_bags_v2.jpg"
			"page_images/director-in-chair---face-swapped.jpg"
			,"Image Compositing"
			,"compositing"
			,"Image Compositing"
			,"" //,"Leather handbags"
			,contentlist.compositing
		);
		add(
			"page_images/event_aramark_500.jpg"
			,"Environmental / Experiential"
			,"event"
			,"Environmental / Experiential"
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
			,"Film Posters"
			,contentlist.rd
		);
		add(
			"page_images/gp_camera_500.jpg"
			,"Custom Image Filters"
			,"gp"
			,"Custom Image Filters"
			,"Using simulations of evolution to draw pictures"
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
