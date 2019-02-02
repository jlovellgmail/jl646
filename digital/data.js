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
		function lineaboveheadline(){

			return "<div class='lineaboveheadline'></div>";
		}
		function section(s) {

			return "<div class='section'>"+s+"</div>";
		}
		function sectionheadline(s){

			return "<div class='sectionheadline'>"+s+"</div>";
		}
		function sectionheadlinesub(s){

			return "<div class='sectionheadlinesub'>"+s+"</div>";
		}
		function masonry(s){

			return "<div class='masonry-layout'>"+s+"</div>";
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






		function imgnew(o){
			if(o.thumbnail == undefined) o.thumbnail = o.image;
			var returnval = "<img src='"+o.thumbnail+"' data-image='"+o.image+"' onclick='blowup(this.data-image)'";
			if(o.class != undefined) returnval += " class='"+o.class+"'";
			if(o.style != undefined) returnval += " style='"+o.style+"'";
			if(o.hasOwnProperty("maxwidth")) returnval += " maxwidth"; // don't check for undefined because the attribute was not given a value in the html, only the attr name was included as a flag
			returnval += " >";
			return returnval;
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
		var thumb_folder = "thumbs/";
		contentlist.all = ""
			//---------------------------------------
			// Digital
			+ lineaboveheadline()
			+ section(""
				+ sectionheadline("Emails & Digital Assets")
				//+ sectionheadlinesub("Emails and Digital ads")
				+ masonry(
					panel(""
						

						//+ img(image_folder + "visual_Joyus-20180121_joyus_Shop-40-off.jpg")
						+ imgnew({
							image: image_folder + "visual_Joyus-20180121_joyus_Shop-40-off.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_Joyus-20180121_joyus_Shop-40-off.jpg"
						})


						+ spacer


						// + img(image_folder + "visual_Joyus-1.21.18-hero.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "visual_Joyus-1.21.18-hero.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_Joyus-1.21.18-hero.jpg"
							,maxwidth: true
						})


						+ spacer
						// + img(image_folder + "20180130_Joyus_Valentines-Day-hero.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "20180130_Joyus_Valentines-Day-hero.jpg"
							,thumbnail: image_folder + thumb_folder + "20180130_Joyus_Valentines-Day-hero.jpg"
							,maxwidth: true
						})


						//----------------------------------------------------------------------
						+ spacer
						// + img(image_folder + "20180125_joyus_Tria.jpg", "darkenImage")
						+ imgnew({
							image: image_folder + "20180125_joyus_Tria.jpg"
							,thumbnail: image_folder + thumb_folder + "20180125_joyus_Tria.jpg"
							,class: "darkenImage"
						})


						+ spacer
						// + img(image_folder + "Pinterest Pin_300x600_3.jpg")
						+ imgnew({
							image: image_folder + "Pinterest_Pin_300x600_3.jpg"
							,thumbnail: image_folder + thumb_folder + "Pinterest_Pin_300x600_3.jpg"
						})


						+ spacer
						// + img(image_folder + "Social;-Creative---11.1-Grinch-Theme-Guarantee.gif", "darkenImage")
						+ imgnew({
							image: image_folder + "Social;-Creative---11.1-Grinch-Theme-Guarantee.gif"
							// no thumbnail
							,class: "darkenImage"
						})


						+ spacer
						// + img(image_folder + "visual_20171221_Tech_DigitalLastMinuteDeals.jpg")
						+ imgnew({
							image: image_folder + "visual_20171221_Tech_DigitalLastMinuteDeals.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_20171221_Tech_DigitalLastMinuteDeals.jpg"
						})


						+ spacer
						// + img(image_folder + "visual_20171122_lifestyle_black_friday_sitewide.jpg")
						+ imgnew({
							image: image_folder + "visual_20171122_lifestyle_black_friday_sitewide.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_20171122_lifestyle_black_friday_sitewide.jpg"
						})


						+ spacer
						// + img(image_folder + "20180214_Joyus_Vday_GiftsForYourself_preview.jpg")
						+ imgnew({
							image: image_folder + "20180214_Joyus_Vday_GiftsForYourself_preview.jpg"
							,thumbnail: image_folder + thumb_folder + "20180214_Joyus_Vday_GiftsForYourself_preview.jpg"
						})


						)
					+ panel(""
						// + img(image_folder + "20180216_joyus_evergreen_display_ad_300x600.jpg", "darkenImage")
						+ imgnew({
							image: image_folder + "20180216_joyus_evergreen_display_ad_300x600.jpg"
							,thumbnail: image_folder + thumb_folder + "20180216_joyus_evergreen_display_ad_300x600.jpg"
							,class: "darkenImage"
						})


						+ spacer
						// + img(image_folder + "Affiliate-banners-+-Gmail-ads.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "Affiliate-banners-+-Gmail-ads.jpg"
							,thumbnail: image_folder + thumb_folder + "Affiliate-banners-+-Gmail-ads.jpg"
							,maxwidth: true
						})


						/*
						+ spacer
						+ img(image_folder + "11.26_ Cyber_Monday_PM_Send.jpg", " ", " ", true)
						*/


						+ spacer
						// + img(image_folder + "Affiliate_Banners_Design_$9_First_Box_Promotion.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "Affiliate_Banners_Design_$9_First_Box_Promotion.jpg"
							,thumbnail: image_folder + thumb_folder + "Affiliate_Banners_Design_$9_First_Box_Promotion.jpg"
							,maxwidth: true
						})


						+ spacer
						// + img(image_folder + "Affiliate_Banners_and_Gmail_Ad.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "Affiliate_Banners_and_Gmail_Ad.jpg"
							,thumbnail: image_folder + thumb_folder + "Affiliate_Banners_and_Gmail_Ad.jpg"
							,maxwidth: true
						})


						+ spacer
						// + img(image_folder + "Black_Friday_email_AM.jpg", "darkenImage")
						+ imgnew({
							image: image_folder + "Black_Friday_email_AM.jpg"
							,thumbnail: image_folder + thumb_folder + "Black_Friday_email_AM.jpg"
							,class: "darkenImage"
						})


						+ spacer
						// + img(image_folder + "frames-from-timeline.gif", "darkenImage")
						+ imgnew({
							image: image_folder + "frames-from-timeline.gif"
							// no thumbnail
							,class: "darkenImage"
						})


						+ spacer
						// + img(image_folder + "visual_20171203_lifestyle_7DaysofGifting_Day1.jpg")
						+ imgnew({
							image: image_folder + "visual_20171203_lifestyle_7DaysofGifting_Day1.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_20171203_lifestyle_7DaysofGifting_Day1.jpg"
						})


						+ spacer
						// + img(image_folder + "visual_20171204_lifestyle_7DaysofGifting_Day2.jpg")
						+ imgnew({
							image: image_folder + "visual_20171204_lifestyle_7DaysofGifting_Day2.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_20171204_lifestyle_7DaysofGifting_Day2.jpg"
						})


						+ spacer
						// + img(image_folder + "visual_marketing_email_crop.jpg", "darkenImage")
						+ imgnew({
							image: image_folder + "visual_marketing_email_crop.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_marketing_email_crop.jpg"
							,class: "darkenImage"
						})


						)
					+ panel(""
						// + img(image_folder + "20180227_joyus_pamper_yourself_preview.jpg", "darkenImage")
						+ imgnew({
							image: image_folder + "20180227_joyus_pamper_yourself_preview.jpg"
							,thumbnail: image_folder + thumb_folder + "20180227_joyus_pamper_yourself_preview.jpg"
							,class: "darkenImage"
						})


						+ spacer
						// + img(image_folder + "visual_20180101_Lifestyle_NewYearNewDeals.gif")
						+ imgnew({
							image: image_folder + "visual_20180101_Lifestyle_NewYearNewDeals.gif"
							// no thumbnail
						})


						+ spacer
						// + img(image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_00.jpg")
						+ imgnew({
							image: image_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_00.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_20171211_lifestyle_GreenMonday_PM_SiteWide_00.jpg"
						})


						+ spacer
						// + img(image_folder + "20180219_lifestyle_presidents_day_preview.gif")
						+ imgnew({
							image: image_folder + "20180219_lifestyle_presidents_day_preview.gif"
							// no thumbnail
						})


						+ spacer
						// + img(image_folder + "visual_20171202_Lifestyle_cyber_week.jpg")
						+ imgnew({
							image: image_folder + "visual_20171202_Lifestyle_cyber_week.jpg"
							,thumbnail: image_folder + thumb_folder + "visual_20171202_Lifestyle_cyber_week.jpg"
						})


						)
				)
			)
			//---------------------------------------
			// Drawings
			+ lineaboveheadline()
			+ section(""
				+ sectionheadline("Drawings")
				+ masonry(""
					+ panel(""
						// + img(image_folder + "smith.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "smith.jpg"
							,thumbnail: image_folder + thumb_folder + "smith.jpg"
							,maxwidth: true
						})


						+ caption("Graphite on paper, 56 x 52.6 inches")
						)
					+ columnbreak()
					+ panel(""
						// + img(image_folder + "fallingwater.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "fallingwater.jpg"
							,thumbnail: image_folder + thumb_folder + "fallingwater.jpg"
							,maxwidth: true
						})


						+ caption("Ballpoint pen on paper, 48.3 x 39.9 inches")
						+ spacer
						// + img(image_folder + "Flute-graphite-on-paper-45-x-29-inches-2007.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "Flute-graphite-on-paper-45-x-29-inches-2007.jpg"
							,thumbnail: image_folder + thumb_folder + "Flute-graphite-on-paper-45-x-29-inches-2007.jpg"
							,maxwidth: true
						})


						+ caption("Assisted artist with rendering<br>Graphite on paper, 45 x 29 inches")
						)
					+ panel(""
						// + img(image_folder + "fayum_1800.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "fayum_1800.jpg"
							,thumbnail: image_folder + thumb_folder + "fayum_1800.jpg"
							,maxwidth: true
						})


						// + img(image_folder + "fayum.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "fayum.jpg"
							,thumbnail: image_folder + thumb_folder + "fayum.jpg"
							,maxwidth: true
						})


						+ caption("Scientific Illustration for a publication of The American Museum of Natural History, NYC<br>Pencil and digital editing")
						)
				)
			)
			//---------------------------------------
			// Other
			+ lineaboveheadline()
			+ section(""
				+ sectionheadline("Other Work")
				+ masonry(""
					+ panel(""
						// + img(image_folder + "SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_whitebg_1800.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_whitebg_1800.jpg"
							,thumbnail: image_folder + thumb_folder + "SF-Overnight---2017-01-27-18.31.41---thumbnail-v2_whitebg_1800.jpg"
							,maxwidth: true
						})


						+ spacersmall
						// + img(image_folder + "SF-Satchel---2017-01-24-23.35.12---thumbnail-v1b_whitebg_1800.jpg", " ", " ", true)
						+ imgnew({
							image: image_folder + "SF-Satchel---2017-01-24-23.35.12---thumbnail-v1b_whitebg_1800.jpg"
							,thumbnail: image_folder + thumb_folder + "SF-Satchel---2017-01-24-23.35.12---thumbnail-v1b_whitebg_1800.jpg"
							,maxwidth: true
						})


						+ spacersmall
						// + img(image_folder + "bags_grid.jpg", "darkenImage", " ", " ", true)
						+ imgnew({
							image: image_folder + "bags_grid.jpg"
							,thumbnail: image_folder + thumb_folder + "bags_grid.jpg"
							,maxwidth: true
							,class: "darkenImage"
						})


						+ caption("Product photography")
						)
					+ columnbreak()
					+ panel(""
						// + img(image_folder + "pattern_dots.jpg")
						+ imgnew({
							image: image_folder + "pattern_dots.jpg"
							,thumbnail: image_folder + thumb_folder + "pattern_dots.jpg"
						})


						+ spacersmall
						// + img(image_folder + "7.27d---swatch-for-website.jpg")
						+ imgnew({
							image: image_folder + "7.27d---swatch-for-website.jpg"
							,thumbnail: image_folder + thumb_folder + "7.27d---swatch-for-website.jpg"
						})


						+ caption("Patterns")
						)
				)
			)
			//---------------------------------------
			//---------------------------------------
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

	}

}
