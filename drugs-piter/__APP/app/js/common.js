var App = {

    options: {},

    init: function () {

        //Open sub menu
        $('.c-navigation__item').click(function () {
            $(this).parent('.c-navigation__mobile-item').toggleClass('active');

        });
        $(document).mouseup(function (e) {
            var $target = $(e.target);
            if ($target.closest(".c-navigation__mobile-item.active").length == 0) {
                $(".c-navigation__mobile-item").removeClass("active");
            }
        });


    },
    dropdown: function () {
        //Filter
        $(document).on('click', '[data-main]', function () {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).children('.c-filter__dropdown').removeClass('active');
            }
            else{
                $('.c-filter').removeClass('active');
                $('.c-filter__dropdown').removeClass('active');
                $(this).toggleClass('active');
                $('[data-child=' + $(this).data('main') + ']').toggleClass('active');
            }
        });

        $(document).mouseup(function (e) {
            var container = $("[data-main]");
            if (container.has(e.target).length === 0) {
                container.removeClass('active');
                $(".c-filter__dropdown").removeClass('active');
            }
        });
        //Value select input
        $(document).on('click', '.c-filter__item', function () {
            $selectInputVal = $(this).data('value');
            $filterLable = $(this).parents('.c-filter__wrapp').find('.js-value-name');
            $filterHiddenInput = $(this).parents('.c-filter__wrapp').find('.js-value-input');

            $filterLable.html($selectInputVal);
            $filterHiddenInput.val($selectInputVal);

        });

    },
    carousel: function () {
        //Carousel home
        $('.js-full-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            arrows: true,
            fade: true,
            dots: false
        });

        // Carousel document
        $('.js-carousel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        // Slider only mobile
        $slick_slider = $('.js-mobile-carusel');
        settings_slider = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
        slick_on_mobile($slick_slider, settings_slider);
        // slick on mobile
        function slick_on_mobile(slider, settings) {
            $(window).on('load resize', function () {
                if ($(window).width() > 575) {
                    if (slider.hasClass('slick-initialized')) {
                        slider.slick('unslick');
                    }
                    return
                }
                if (!slider.hasClass('slick-initialized')) {
                    return slider.slick(settings);
                }
            });
        };
        //Carusel review
        //Carousel home
        $('.js-carousel-review').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
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
        // Masked
        $('.js-masked').mask('+7 (999) 999 99 99');
    },
    filter: function () {
        $('.js-filter-btn').on('click', function () {
            $('.js-filter-btn').removeClass('active');
            $(this).addClass('active'); // выделяем выбранную категорию

            var cat = $(this).attr('data-filter'); // определяем категорию

            if (cat == 'all') { // если all
                $('.c-centers__item').show(); // отображаем все позиции
            } else { // если не all
                $('.c-centers__item').hide(); // скрываем все позиции
                $('.c-centers__item[data-filter="' + cat + '"]').show(); // и отображаем позиции из соответствующей категории
            }
        });
    },
    fancybox: function () {
        $('[data-fancybox]').fancybox({
            protect: true,
            buttons : [
                'zoom',
                'thumbs',
                'close'
            ]
        });
            $('[data-fancybox="document"]').fancybox({
                protect    : true,
                slideClass : 'document',
                toolbar    : false,
                smallBtn   : true
            });
        $('[data-fancybox="gallery"]').fancybox({
            protect    : true,
            slideClass : 'gallery',
            toolbar    : false,
            smallBtn   : true
        });
    }

};

$(document).ready(function () {
    App.validate(),
    App.carousel(),
    App.filter(),
    App.fancybox(),
    App.dropdown(),
    App.init();
});
