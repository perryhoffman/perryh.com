var imgs        = [{url: 'img/trees.jpg', color: '#62A894'}, {url: 'img/mountains.jpg', color: '#6289A8'}];
var randomIndex = Math.floor(Math.random()*((imgs.length - 1)-0+1)+0);
var header      = document.getElementsByClassName('header')[0];
var logo        = document.getElementsByClassName('logo')[0];
header.style.backgroundImage = "url(" + imgs[randomIndex].url + ")";
logo.style.backgroundColor = imgs[randomIndex].color;

$(document).ready(function(){
  var $window = $(window);

  <!-- Scroll To -->
  $('.nav a').click(function(e){
    e.preventDefault();
    var selector = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(selector).offset().top
    }, 1000);
  });

  <!-- Fade Header -->
  $('section.header .nav').fadeIn(2000);

  <!-- Watch Scrollbar -->
  $window.scroll(function(e){
    var scrollHeight = $window.scrollTop();
    var $btn         = $('.top-btn');
    if (scrollHeight >= 300) {
      $btn.fadeIn('slow');
    } else if($btn.css('display') != 'none') {
      $btn.fadeOut('slow');
    }
  });
});
$(document).foundation();