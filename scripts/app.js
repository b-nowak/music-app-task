$(document).on('ready', function () {

  function toggleRight() {
    $("#mySideNav").toggleClass("open");
    $(".drawer-content-wrap").toggleClass("active");
    $("html").toggleClass("ovf-h");
  };
  $("#openRight").click(toggleRight);

  // Bottom drawer opening/closing
  function openBottom() {
    $('#myBottomNav').addClass("open");
    $("html").addClass("ovf-h");
  };

  function closeBottom() {
    $('#myBottomNav').removeClass("open");
    $("html").removeClass("ovf-h");

  };
  $("#openBottom").click(openBottom);
  $("#closeBottom").click(closeBottom);

  var glide = new Glide('.glide', {
    perView: 1,
    focusAt: 'center',
    gap: 10,
    animationDuration: 350,
    rewind: false,
    animationTimingFunc: 'ease',
    peek: 100,
    startAt: 0,
    breakpoints: {
      480: {
        gap: 7
      }
    }

  }).mount();

  $(".btn-play").click(function () {
    $(this).toggleClass("active");
    $(".eq-col").toggleClass("active");
    $(".inside-img").toggleClass("active");
  });


  $(".mini-play-wrap.btn-play-mini").click(function () {
    $(this).toggleClass("active");
  });

  for (var i = 1; i <= 200; i++) {
    $(".equalizer").append("<div class='eq-col'><div class='eq-" + i + "-1'></div><div class='eq-" + i + "-2'></div></div>");
  }

});