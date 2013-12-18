$(document).ready(function(){
  <!-- Scroll To -->
  $('.nav a').click(function(e){
    e.preventDefault();
    var selector = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(selector).offset().top
    }, 1000);
  });
});