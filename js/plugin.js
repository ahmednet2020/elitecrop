/*global $, alert, document, window, console */

$(document).ready(function () {
    "use strict";
    $(window).on("resize load", function () {
        $(".navbar .bgHover").css({
            "width": $(".navbar .active").width(),
            "height": $(".navbar .active").height(),
            "left": $(".navbar .active").position().left,
            "top": $(".navbar .active").position().top

        });
    });
    $(".navbar .nav-item").hover(function (e) {
        $(".navbar .bgHover").css({
            "width": $(e.target).parent("li").width(),
            "height": $(e.target).parent("li").height(),
            "left": $(e.target).parent("li").position().left,
            "top": $(e.target).parent("li").position().top

        });
    }, function () {
        $(".navbar .bgHover").css({
            "width": $(".navbar .active").width(),
            "height": $(".navbar .active").height(),
            "left": $(".navbar .active").position().left,
            "top": $(".navbar .active").position().top
        });
    });
    $(".navbar .nav-item").on("click", function () {
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    
    $(".featuredwork").find("li").on("click", function (e) {
        var x = e.target.dataset.value;
        $(this).addClass("active").siblings("li").removeClass("active");
        if (x === "all") {
            $(".gallry .row").find("div").fadeIn(500);
        } else {
            $(".gallry .row").find("div").hide().end().find("div[data-value=" + x + "]").fadeIn(500);
        }
    });
});
