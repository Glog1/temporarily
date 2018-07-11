
var App = {

    options: {},

    init: function () {

    },

    burger: function () {
        //Open menu
        $('.c-header__burger').click(function () {
            $(this).toggleClass('active');
            $('.c-navbar').toggleClass('active');
        });
    },
    homeCarousel: function () {
        //Home slider
        $('.c-home-slider').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
        });

    },
    cardCarusel: function () {
        $('.js-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-slider-nav'
        });
        $('.js-slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.js-slider-for',
            dots: true,
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
            centerMode: false,
            prevArrow: $('.prev_thumb-img'),
            nextArrow: $('.next_thumb-img'),
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                    }
                }

            ]
        });
    },
    activeMenu: function () {
        //active menu item
        $('.c-navbar a').each(function () {
            var location = window.location.href;
            var link = this.href;
            if(location == link) {
                $(this).addClass('active');
            }
        });
    }


};


$(document).ready(function () {
    App.init(),
    App.burger(),
    App.activeMenu(),
    App.homeCarousel(),
    App.cardCarusel()
});