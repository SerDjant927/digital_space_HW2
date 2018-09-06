/*$(document).ready(function(){
 	
 if($('.slider').length > 0) {

 }
 sliderInit();

 function sliderInit(){
 
 var count = $('.slider li').length;
 $('.slider').append('<div class="nav"></div>');
 for(var i = 0; i < count; i++){
 $('.nav').find('.nav').append('<span>'+i+'</span>');
}
 console.log(count);

 	}
 });*/
$(document).ready(function(){
  $('.slider_dir).slick({
    setting-name: setting-value
  });
});