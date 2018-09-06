$(document).ready(function(){
  $('.menu_link').on('click', function(){
	var id = $(this).data('link');
	var block = $('body').find('[data-block="'+id+'"]');
	var top = block.offset().top;
    $('html, body').animate({scrollTop: top}, 1500);
	return false;
})
});



//ниже чисто слик//

$(document).ready(function(){
  $('.slick-slider').slick();
});

