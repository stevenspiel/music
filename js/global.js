jQuery(function($){
  $(window).load(function() {
    $(".home-icons").addClass("in-place");
    $("#cta, #ctabutton, .logo, #footer, .menu-item").addClass("fade-in");
    $('#wrapper').css('min-height', $(window).height());
    if($('.fancybox').length) {
      $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        fitToView: true
      });
    }

    $('#wrapper').css('min-height', $(window).height());
  });

  var ch = $('.menu-item a img').width();
  $('.menu-item a img').css({
    'height': '50px'
  });

  var ch = $('.menu-item a img').height();
  $('.menu-item a img').css({
    'width': ch + 'px'
  });

  $(window).resize(function() {
    var ch = $('.menu-item a img').height();
    $('.menu-item a img').css({
      'width': ch + 'px'
    });
    $('.section').css({
      'min-height': '190px !important'
    });
  });

});
