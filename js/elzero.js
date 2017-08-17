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
    var viewport_width = $(window).width(),
        ColorLi = $(".option_box .color_option ul li");
        
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
    
    
    ColorLi.eq(0).css("backgroundColor", "#C62727").end().eq(1).css("backgroundColor", "#4508ff").end().eq(2).css("backgroundColor", "#ff0fc0").end();
    
    ColorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr('data-value'));
    });
    
    
});