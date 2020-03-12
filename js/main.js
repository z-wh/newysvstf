$(function() {
    // 表单提交
    $('.yuyue').listenForm({
        siteId: 13,
        contentName: '雅思托福机经领取msem',
        submitTarget: '#submit',
        yzmRequired: true,
        yzmTarget: '#btn-captcha',
    });

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
        loop: true,

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

    $(".tab-nav li").click(function () {
        $(this).addClass("actived").siblings().removeClass("actived");
    });

    $('.course-tabbar li').click(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.course-tab-content').eq(index).addClass('current').siblings().removeClass('current');
    });
});

function scrollTodiv (id, cls) {
    var div = document.getElementById(id);
    div.scrollIntoView();
    div.classList.add(active);
}
