$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  })

  let typed = new Typed(".typed", {
    strings: ['Software Engineer.', 'Web Developer.', 'Student.'],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showcursor: false
  })

});