$(function(){

    if($(window).width() > 1169){
        var perWidth = $(window).width() - 1169;
    }else{
        var perWidth = 0;
    }

    HomeScrollR(".detail_r","#menu");

    function HomeScrollR(a, d) {

        if ($(a).length > 0 && $(d).length > 0) {

            var e = $(a), c = $(d), b = c.offset().top;

            function f() {
                var m = $(window).scrollLeft(),  //  m是获取元素距离滚动条左侧的偏移
                    n = $(window).scrollTop(),    // n代表浏览器滚动条高度
                    k = $(document).height(),     // k代表文档高度
                    h = $(window).height(),       // h代表浏览器高度
                    g = e.height(),                // 传入元素a的高度
                    j = c.height(),                 // 传入元素d的高度
                    l = e.offset().left + e.outerWidth(!0) - m, // 传入元素a在当前视口的相对偏移 - 传入元素a的宽度 - 传入元素a距离滚动条左侧的偏移
                    i = parseInt(g - h) - parseInt(j - h); // a.d元素的高度差

                if (k < h || j > g || n < b || n <= j - h + b) {
                    // 不需要跟随的情况
                    c.removeAttr("style")
                } else {
                    if (h > j && (n - b + 20) >= i || h < j && (n - b) >= (g - h)) {
                        c.attr("style", "margin-top:" + i + "px;")
                    } else {
                        c.attr("style", "_margin-top:" + (n - b) + "px;position:fixed;left:" + perWidth/2 + "px;" + (h > j ? "top:0px;" : "bottom:20px;"))
                    }
                }
            }
            $(window).resize(f).scroll(f).trigger("resize")
        }
    };




})