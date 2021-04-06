(function ($) {
    $.aniPage = function (e, type) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $.subtr = $(window).scrollTop() - $(window).height();
            if ($(window).scrollTop() > 0) {
                if ($(window).scrollTop() % $(window).height() > 0) {
                    $.subtr = $(window).scrollTop()
                        - ($(window).scrollTop() % $(window).height());
                }
            }
            $("body, html").animate({
                scrollTop: $.subtr
            }, 200, function () {
                $.aniOk = 0;
            });
        } else {
            $.addit = $(window).scrollTop() + $(window).height();
            if ($(window).scrollTop() > 0) {
                if ($(window).scrollTop() % $(window).height() > 0) {
                    $.addit = $(window).scrollTop()
                        - ($(window).scrollTop() % $(window).height())
                        + $(window).height();
                }
            }
            $("body, html").animate({
                scrollTop: $.addit
            }, 100, function () {
                $.aniOk = 0;
            });
        }
    };
})(jQuery);
$(function () {
    $("section").height($(window).height());
    $.aniOk = 0;
    $(window).scrollTop(0);
});
$(document).on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    if ($.aniOk == 0) {
        $.aniPage(e, e.type);
        $.aniOk = 1;
    }
});

// new fullpage('#fullpage', {
//     sectionsColor: ['black', 'black', 'black', 'black'],
// });


