$(document).ready(function() {

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		}
		else {
			$('.top').removeClass('active');
		}
	});

	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');x`x	`
	});

 	$('#services').owlCarousel({
	    loop: false,
	    nav: true,
	    smartSpeed: 700,
	    navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        700:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$("#call-form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.call-send').addClass('.call-send--active');
			setTimeout(function() {
				$('.call-send').removeClass('.call-send--active');
				th.trigger("reset");
			}, 2000);
		});
		return false;
	});

	$('.owl-carousel').owlCarousel({
	    loop: false,
	    nav: false,
	    smartSpeed: 700,
	    dots: true,
	   	items: 1,
	   	autoHeight: true,
	});
	
});