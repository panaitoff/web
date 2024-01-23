new Swiper('.banner-example',{
    slidesPerView: 1,
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    
    // If we need pagination
    pagination: {
      el: '.banner-nav__pagination',
      clickable: true,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.banner-nav__next',
      prevEl: '.banner-nav__prev',
    },

    autoplay: {
      delay : 10000,
    }
});


new Swiper('.new__selector',{
    slidesPerView: 4,
    loop: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: '.new-nav__pagination',
      clickable: true,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.new-nav__next',
      prevEl: '.new-nav__prev',
    },

    autoplay: {
      delay : 10000,
    },

    breakpoints: {
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
      },
      425: {
        slidesPerView: 1,
        centerSlidesBounds: true,
      },
      375: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      320: {
        slidesPerView: 1,
        centeredSlides: true,
      },
    }
});


new Swiper('.stock-content',{
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: '.stock-nav__next',
      prevEl: '.stock-nav__prev',
    },
     // If we need pagination
     pagination: {
      el: '.stock-nav__pagination',
      clickable: true,
    },
});

// Кнопка со скроллом

var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()', 15);
	} else clearTimeout(t);
	return false;
}

// Menu burger

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// 2-e Menu burger

$(document).ready(function() {
  $('.catalog__burger').click(function(event) {
    $('.catalog__burger,.catalog__category').toggleClass('active');
    //$('body').toggleClass('lock');
  });
});