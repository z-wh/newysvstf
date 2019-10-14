window.onload = function () {
    setHtmlFontSize();
    showBody();
    fixNav();
};

window.addEventListener("resize", function () {
    setHtmlFontSize();
});

function setHtmlFontSize() {
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var htmlDOM = document.getElementsByTagName("html")[0];
    htmlDOM.style.fontSize = htmlWidth / 10 + "px";
}

function showBody() {
    document.getElementsByTagName("body")[0].style.visibility = "visible";
}

function fixNav() {
    var oTop = $(".tab-nav").offset().top;
    //获取导航栏的高度，此高度用于保证内容的平滑过渡
    var martop = $('.tab-nav').outerHeight() + 40;

    var sTop = 0;
    // 监听页面的滚动
    $(window).scroll(function () {
        // 获取页面向上滚动的距离
        sTop = $(this).scrollTop() + 40;
        // 当导航栏到达屏幕顶端
        if (sTop >= oTop) {
            // 修改导航栏position属性，使之固定在屏幕顶端
            $(".tab-nav").css({
                "position": "fixed",
                "top": "40px",
                "z-index": "9",
                "opacity": "0.8",
            });
            // 修改内容的margin-top值，保证平滑过渡
            $("#tittle-what").css({
                "margin-top": martop,
            });
        } else {
            // 当导航栏脱离屏幕顶端时，回复原来的属性
            $(".tab-nav").css({
                "position": "static",
                "opacity": "1",
            });
            $("#tittle-what").css({
                "margin-top": "0"
            });
        }
    });
}
