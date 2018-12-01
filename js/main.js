var mySwiper = new Swiper('.gallery-top', {
    direction: 'horizontal', // 切换方向选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.what-pagination',
        type: 'progressbar',
        progressbarFillClass: 'my-pagination-progressbar',
    },

    thumbs: {
        swiper: {
            el: '.gallery-thumb',
            spaceBetween: 10,
            slidesPerView: 2,
            watchSlidesVisibility: true,
        },
        slideThumbActiveClass: 'my-slide-thumb-active',
    }
});

var examSwiper = new Swiper('.examdesc-slide', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.examdesc-pagination',
        type: 'progressbar',
        progressbarFillClass: 'my-pagination-progressbar',
    },

    thumbs: {
        swiper: {
            el: '.examdesc-thumb',
            spaceBetween: 5,
            slidesPerView: 4,
            watchSlidesVisibility: true,
        },
        slideThumbActiveClass: 'my-slide-thumb-active',
    }
});

var summarySwiper = new Swiper('.summary-slide', {
    direction: 'horizontal',
    loop:true,
    
    pagination: {
        el: '.summary-pagination',
        type: 'progressbar',
        progressbarFillClass: 'my-pagination-progressbar',
    },

    thumbs: {
        swiper: {
            el: '.summary-thumb',
            spaceBetween: 5,
            slidesPerView: 4,
            watchSlidesVisibility: true,
        },
        slideThumbActiveClass: 'my-slide-thumb-active',
    }
});

var howSwiper = new Swiper('.how-slide', {
    direction: 'horizontal',
    loop:true,
    
    pagination: {
        el: '.how-pagination',
        type: 'progressbar',
        progressbarFillClass: 'my-pagination-progressbar',
    },

    thumbs: {
        swiper: {
            el: '.how-thumb',
            spaceBetween: 10,
            slidesPerView: 2,
            watchSlidesVisibility: true,
        },
        slideThumbActiveClass: 'my-slide-thumb-active',
    }
});

var oTop = $(".tab-nav").offset().top;
//获取导航栏的高度，此高度用于保证内容的平滑过渡
var martop = $('.tab-nav').outerHeight();

var sTop = 0;
// 监听页面的滚动
$(window).scroll(function () {
    // 获取页面向上滚动的距离
    sTop = $(this).scrollTop();
    // 当导航栏到达屏幕顶端
    if (sTop >= oTop) {
        // 修改导航栏position属性，使之固定在屏幕顶端
        $(".tab-nav").css({
            "position": "fixed",
            "top": "0",
            "z-index": "9",
            "opacity": "0.8",
        });
        // 修改内容的margin-top值，保证平滑过渡
        $(".tittle-what").css({
            "margin-top": martop,
        });
    } else {
        // 当导航栏脱离屏幕顶端时，回复原来的属性
        $(".tab-nav").css({
            "position": "static",
            "opacity": "1",
        });
        $(".tittle-what").css({
            "margin-top": "0"
        });
    }
});

