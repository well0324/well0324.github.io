$(function() {
	// Favorite Button - Heart
$('.favme').click(function() {
	$(this).toggleClass('active');
});

/* when a user clicks, toggle the 'is-animating' class */
$(".favme").on('click touchstart', function(){
  $(this).toggleClass('is_animating');
});

/*when the animation is over, remove the class*/
$(".favme").on('animationend', function(){
  $(this).toggleClass('is_animating');
});
  //goTop
  $(window).scroll(function() {
    if ($(this).scrollTop() > 240) {
      $("#gotop").fadeIn();
    } else {
      $("#gotop").fadeOut();
    }
  });
  $("#gotop").click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
  });
});