/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    'use strict';
    $(window).on("resize", function () {
        var viewport_width = $(window).width();
        if (viewport_width < 1200 && viewport_width > 760) {
            console.log(viewport_width);
            $(".ourteam .leadership ul li").attr("id", "remover");
        } else if (viewport_width < 760) {
            $(".ourteam .leadership ul li").attr("id", "xs");
        } else {
            $(".ourteam .leadership ul li").attr("id", "");
        }
    });
    var viewport_width = $(window).width();
    if (viewport_width < 1200 && viewport_width > 760) {
        console.log(viewport_width);
        $(".ourteam .leadership ul li").attr("id", "remover");
    } else if (viewport_width < 760) {
        $(".ourteam .leadership ul li").attr("id", "xs");
    } else {
        $(".ourteam .leadership ul li").attr("id", "");
    }
    
    /*  Tool Box  */
    $(".option_box .icon_box").click(function () {
        $(".option_box .color_option").fadeToggle();
    });
});