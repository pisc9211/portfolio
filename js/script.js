$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });
})

$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  })

  let typed = new Typed(".typed", {
    strings: ['Software Engineer.', 'Web Developer.', 'Problem Solver.'],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showcursor: false
  })

  // $('.owl-carousel').owlCarousel({
  //   loop:false,
  //   items: 4,
  //   responsive:{
  //     0:{
  //       items:1
  //     },
  //     480:{
  //       items:2
  //     },
  //     768:{
  //       items:3
  //     },
  //     938:{
  //       items: 5
  //     }
  //   },
  //   rewind: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000
  // })

  $('.owl-carousel').owlCarousel({
		autoplay:true,
		items:4,
		// itemsDesktop:[1000,4],
		// itemsDesktopSmall:[900,3],
		// itemsTablet:[600,2],
    // itemsMobile:[480,1],
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      768:{
        items:3
      },
      938:{
        items: 5
      }
    },
    margin: 10,
    rewind: true,
	})
  
  let skillsTopOffset = $(".skillsSection").offset().top
  // let statsTopOffset = $(".statsSection").offset().top
  let countUpFinished = false
  
  $(window).scroll(function() {
    if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent))
        }
      })
      // if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
      //   $(".counter").each(function() {
      //     let element = $(this)
      //     let endVal = parseInt(element.text())  
      
      //     element.countup(endVal)
      //   });
      //   countUpFinished = true;
      // }
    }
  })

  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  })

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current")
    $(this).addClass("current")

    let selector = $(this).attr("data-filter")
    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    })

    return false
  })

  $("#navigation li a").click(function(e) {
    e.preventDefault()

    let targetElement = $(this).attr("href")
    let targetPosition = $(targetElement).offset().top
    $("html, body").animate({ scrollTop: targetPosition - 50}, "slow")
  })

  $(".borderBtn").click(function(e) {
    e.preventDefault()

    let targetElement = $(this).attr("href")
    let targetPosition = $(targetElement).offset().top
    $("html, body").animate({ scrollTop: targetPosition - 50}, "slow")
  })

  const nav = $("#navigation")
  const navTop = nav.offset().top
  
  function stickyNavigation() {
    const body = $("body")
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px")
      body.addClass("fixedNav")
    } else {
      body.css("padding-top", "0px")
      body.removeClass("fixedNav")
    }
  }
  
  $('.timeLine').timeLine({
    mainColor: '#66fcf1',
    opacity: '0.9',
    itemAnimateDuration: 1
  });

  $(window).on("scroll", stickyNavigation)
});