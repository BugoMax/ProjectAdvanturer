$(document).ready(function() {
	var clickCounter = 0;
	$("p.services__cell_text").hide();
	$("a.services__cell_link").click(function(e) {
		if (clickCounter%2 == 0){
			$(e.target).css("background-color", "#ec4848").parent().children("p.services__cell_text").slideToggle();
		}
		else {
			$(e.target).css("background-color", "#3f444a").parent().children("p.services__cell_text").slideToggle();
		}
		clickCounter++;
	});
});

$(document).ready(function() {
	var width = $('.cutomer').width();
      //dimensions
      $('..cutomer__reviews_card').width(width);
      $('.cutomer__reviews').width(width*$('.customer__reviews_card').length);
      //positioning
      $('.cutomer__reviews').css('left',-width);
      $('.customer__reviews_card:last-child').prependTo('.cutomer__reviews');
      //move slides forward
      function nextSlide() {
      	$('.cutomer__reviews').animate({
      		'margin-left':-width
      	},500, function() {
      		$('.customer__reviews_card:first-child').appendTo('.cutomer__reviews');
      		$('.cutomer__reviews').css('margin-left', 0);
      	});
      }
      //move slides backwards
      function prevSlide() {
      $('.cutomer__reviews').animate({
      	'margin-left':width
      },500, function() {
      	$('.customer__reviews_card:last-child').prependTo('.cutomer__reviews');
      	$('.cutomer__reviews').css('margin-left', 0);
      });
     }
     //controls
     $('.cutomer__reviews_wrap-checkbox').click(nextSlide);
     $('.cutomer__reviews_wrap-checkbox').click(prevSlide)
   });

$(document).ready(function() {
	$('a.main-nav__link').smoothScroll();
	$('p.subnav a').click(function(event) {
		event.preventDefault();
		var link = this;
		$.smoothScroll({
			scrollTarget: link.hash
		});
	});

	$('#change-speed').on('click', function() {
		var $p1 = $('ul.mainnav a').first(),
		p1Opts = $p1.smoothScroll('options') || {};

		p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
		$p1.smoothScroll('options', p1Opts);
	});

	$('button.scrollsomething').click(function() {
		$.smoothScroll({
			scrollElement: $('div.scrollme'),
			scrollTarget: '#findme'
		});
		return false;
	});
	$('button.scrollhorz').click(function() {
		$.smoothScroll({
			direction: 'left',
			scrollElement: $('div.scrollme'),
			scrollTarget: '.horiz'
		});
		return false;
	});
});


$(document).ready(function() {
  
  var width = $('.main-slider').width();
  
  //dimensions
  $('.main-slider__content').width(width);
  $('.main-slider__items').width(width*$('.main-slider__content').length);
  
  //positioning
   $('.main-slider__items').css('left',-width);
   $('.main-slider__content:last-child').prependTo('.main-slider__items');
  
  //move slides forward
  function nextSlide() {
    $('.main-slider__items').animate({
      'margin-left':-width
    },1000, function() {
      $('.main-slider__content:first-child').appendTo('.main-slider__items');
      $('.main-slider__items').css('margin-left', 0);
    });
  }
  //move slides backwards
  function prevSlide() {
    $('.main-slider__items').animate({
      'margin-left':width
    },1000, function() {
      $('.main-slider__content:last-child').prependTo('.main-slider__items');
      $('.main-slider__items').css('margin-left', 0);
    });
  }
    
  //controls
  $('.main-sliderr__nextbutton').click(nextSlide);
  $('.main-slider__prevbutton').click(prevSlide)
});

