function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

/* Smooth Scroll */

$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})
