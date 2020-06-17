// Closes the sidebar menu
$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("active");
  $("#menu-close").toggleClass("show");  
  $(".overlay").toggleClass("show");   
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("active");
  $("#menu-close").toggleClass("show");  
  $(".overlay").toggleClass("show");        
});
$(".overlay").click(function(e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("active");
  $("#menu-close").toggleClass("show"); 
  $(".overlay").toggleClass("show");        
});

//gotop
$(function(){
  $("#gotop").click(function(){
    jQuery("html,body").animate({
      scrollTop:0
    },1000);
  });
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
      $('#gotop').fadeIn("fast");
    } else {
      $('#gotop').stop().fadeIn("fast");
    }
  });
});
// Initialize tooltip component
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover();
})