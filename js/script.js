

$(document).ready(function() {
    var leftUIEl = $('.slider_arrow_left');
    var rightUIEl = $('.slider_arrow_right');
    var elementsList = $('.slick-slider');
 
    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
});





//ниже чисто слик//

$(document).ready(function(){
  $('.slick-slider').slick();
});

