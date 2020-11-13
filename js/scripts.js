function menuToggle() {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

/* Smooth Scroll */

$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    },
    500,
    'linear'
  )
})

/* Scroll to top */

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    $('#return-to-top').fadeIn(200)
  } else {
    $('#return-to-top').fadeOut(200)
  }
})
$('#return-to-top').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 500)
})

/* Beam me up Animation */

const beams = document.querySelectorAll('#beam');

beams.forEach(beam => {
  let duration = Math.random() * (1.2 - 0.6) + 0.6;
  beam.style.animation = `beams ${duration}s infinite linear`;
})
