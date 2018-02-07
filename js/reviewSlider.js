/* ====================
  Javascript Slider for Client Testimonials
==================== */

/* -- Slider Function -- */

function Slider( element ) {
	this.el = document.querySelector( element );
	this.init();
}	

/* -- Nav and Wrapper Function -- */
Slider.prototype = {
	init: function() {
		this.links = this.el.querySelectorAll( "#slider-nav a" );
		this.wrapper = this.el.querySelector( "#slider-wrapper" );
		this.navigate();
	},
	navigate: function() {
		/* -- Compares current link to total link length and matches slide to it -- */	
		for( var i = 0; i < this.links.length; ++i ) {
			var link = this.links[i];
			this.slide( link );	
		}
	},
	
	/* -- Slide behavior on nav click -- */
	slide: function( element ) {
		var self = this;
		element.addEventListener( "click", function(e) {
			/* -- Prevents scroll to screen top on nav click -- */
			e.preventDefault();
			/* -- Set clicked link to current on nav click -- */
			var a = this;
			self.setCurrentLink( a );
			var index = parseInt( a.getAttribute( "review-slide" ), 10 ) + 1;
			var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );
			
			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			
		}, false);
	},
	setCurrentLink: function( link ) {
		var parent = link.parentNode;
		var a = parent.querySelectorAll( "a" );
		
		link.className = "current";
		
		for( var j = 0; j < a.length; ++j ) {
			var cur = a[j];
			if( cur !== link ) {
				cur.className = "";
			}
		}
	}	
};

/* -- Loads slider -- */
document.addEventListener( "DOMContentLoaded", function() {
	var aSlider = new Slider( "#slider" );
	
});
	
