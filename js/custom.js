
jQuery(function () {
	"use strict";
	$(document).ready(function(){
		
		jQuery('.skillbar').each(function() {
			jQuery(this).appear(function() {
				jQuery(this).find('.count-bar').animate({
					width:jQuery(this).attr('data-percent')
				},3000);
				var percent = jQuery(this).attr('data-percent');
				jQuery(this).find('.count').html('<span>' + percent + '</span>');
			});
		});	
	});	
}());


$(".mv").hover(
  function () {
    $(this).addClass('animated swing');
  }, 
  function () {
    $(this).removeClass('animated swing');
  }
);


