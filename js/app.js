// $('body').toggleClass('loaded');
$(document).ready(function() {

  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 3000);

});
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('nav').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    center: true,
    nav: true,
    margin: 32,
    loop: true,
    autoplay: true,
    // autoplayTimeout:2000,
    // autoplayHoverPause:true,
    navText: ["<span></span>", "<span></span>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
});

$('.flip-x').click(function(){
  $(this).find('.flip-x-card').addClass('flipped-x').mouseleave(function(){
    $(this).removeClass('flipped-x');
  });
  return true;
});

$('.flip-y').click(function(){
  $(this).find('.flip-y-card').addClass('flipped-y').mouseleave(function(){
    $(this).removeClass('flipped-y');
  });
  return true;
});



