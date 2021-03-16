//nav
$(document).ready(function(){
  $('.navPanelToggle').click(function(event){
    $('.close').addClass('show');
    var i = document.getElementById("myTopnav");
	  if (i.className === "topnav") {
		   i.className += " responsive";
	  } else {
		   i.className = "topnav";
	  }
  });
  $('.topnav a').click(function(e){
    var href = $(this).attr( 'href' );
    $( 'html, body' ).animate({
        scrollTop: $( href ).offset().top-50
    }, '300' );
    e.preventDefault();
    //nav icon
  	$('.topnav').removeClass('responsive');
    $('.close').removeClass('show');
  });
  $('.close').click(function(e){
    $('.topnav').removeClass('responsive');
    $('.close').removeClass('show');
  });
});

//owl-carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 70,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})