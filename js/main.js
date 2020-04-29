$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".pre-loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});
$(document).ready(function () {
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: false,
    });
    /////////cats Slider/////////
    $('.cats-slider').owlCarousel({
        margin: 8,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 7
            },
            1500: {
                items: 8
            }
        }
    });
    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        autoplay: false,
        stagePadding: 10,
        margin: 17,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            },
            1500: {
                items: 6
            }
        }
    });
    /////////////////////////////
    $('.cats-btn').click(function (e) {
        $(".cats-dispaly").slideToggle("500");
        $(".mo-overlay").fadeToggle(500);
        if ($(window).width() <= 767) {
            $(".mo-overlay").hide();
            $('body').addClass("overflow");
        }
    });
    $('.mo-overlay').click(function () {
        $(".cats-dispaly").slideUp("500");
        $(".mo-overlay").fadeOut(500);
    });

    if ($(window).width() <= 991) {
        $(".nav-cont").unwrap();
        $(".cats-div").unwrap();
        $(".xs-li .nav-anchor").addClass("mo-accordion");
        $(".xs-log").addClass("mo-panel");
        $(".cats-btn").addClass("mo-accordion");
        $(".cats-div").addClass("mo-panel");
        /////////////////////////////////////////////////////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        /////////////////////////////////////////////////
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
});