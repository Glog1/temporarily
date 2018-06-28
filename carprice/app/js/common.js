
var App = {

    options: {},

    init: function () {
        //Open location list
        $('.c-location__select').click(function () {
            $(this).parent('.c-location').toggleClass('active');
            $('.c-location__list-wrap').toggleClass('active');
        });

        // $(document).mouseup(function (e) {
        //     var container = $(".c-location__list");
        //     if (container.has(e.target).length === 0) {
        //         container.removeClass('active');
        //         $(".c-location").removeClass('active');
        //     }
        // });

    },
    scrollbar: function () {
        //Scrollbar
        $(".js-scroll").niceScroll({
            cursorwidth: 2,
            cursoropacitymin: 1,
            cursorcolor: '#00a550',
            cursorborder: 'none',
            autohidemode: 'leave'

        });
        $("html").niceScroll({
            cursorcolor: '#00a550',
            cursorwidth: 5,
            cursorborder: 'none'

        })


    },
    modal: function () {
        // Modal
        $('.js-modal-open').on('click', function (event) {
            event.preventDefault();
            var modal = $(this).attr('href');
            $(modal).addClass('active');
            $('.c-modal__overlay').addClass('active');
            $('body').addClass('hidden');

        });

        $('.c-modal__overlay').on('click', function (event) {
            if ($(event.target).is('.c-modal__close') || $(event.target).is('.c-modal__overlay')) {
                $(this).removeClass('active');
                $('.c-modal').removeClass('active');
                $('body').removeClass('hidden');
            }
        });
        $('.c-modal__close').on('click', function () {
            $('.c-modal').removeClass('active');
            $('body').removeClass('hidden');
            $('.c-modal__overlay').removeClass('active');
        });

        $('.js-popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

    },
    validate: function () {

        //validation form
        $("button.send").on("click", function (s) {
            s.preventDefault();
            var e = $(this).closest("form"),
                n = !0;
            return $("form").find("input.required").removeClass("error"), e.find("input.required, textarea.required").each(function () {
                return "" === $(this).val() ? ($(this).addClass("error"), $(this).focus(), n = !1, !1) : void 0
            }), n && ($("form").find("input.required, textarea.required").parent().removeClass("error"), e.submit()), !1


        });
        $(document).mousemove(function () {
            if ($('input.required').hasClass('error')) {
                $(".error-text").addClass('error')
            } else {
                $(".error-text").removeClass('error')
            }
        });
        // Masked
        $('.js-masked').mask('+7 (999) 999 99 99');
    },
    burger: function () {
        //Open menu
        $('.c-header__burger').click(function () {
            $(this).toggleClass('active');
            $('.c-navbar-wrap').toggleClass('active');
        });
    },
    steps: function () {
        $(document).on('click', '[data-main]', function() {
                $('.c-step__item').children('.c-step__content').hide("slow");
                $('.c-step__item').removeClass('active');
                $(this).parent('.c-step__item').addClass('active');
                $(this).parent('.c-step__item').children('.c-step__content').show("slow");
                $('.c-steps__figure').hide("slow");
                $('[data-child=' + $(this).data('main') + ']').show("slow");

        });

    },
    reviewsCarousel: function () {

        $('.c-reviews').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            prevArrow: $('.carousel__btn--prev'),
            nextArrow: $('.carousel__btn--next'),
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

    },
    questions: function () {
        $('.c-questions__content').delay(500).hide('slow');
        $(document).on('click', '.c-questions__btn', function() {
            $(this).parent('.c-questions__item').toggleClass('active');
            $(this).parent('.c-questions__item').children('.c-questions__content').slideToggle();

        });

    }

};
$(document).ready(function () {
    App.init(),
    App.scrollbar(),
    App.modal(),
    App.validate(),
    App.burger(),
    App.steps(),
    App.reviewsCarousel(),
    App.questions()
});