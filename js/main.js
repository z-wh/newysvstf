$(function() {
    // 表单提交
    $('.yuyue').listenForm({
        siteId: 13,
        contentName: '雅思托福机经领取m',
        submitTarget: '#submit',
        successFun: function () {
            alert('您已成功提交！我们将在1个工作日内与您取得联系！谢谢！');
        }
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
});

function scrollTodiv (id, cls) {
    var div = document.getElementById(id);
    div.scrollIntoView();
    div.classList.add(active);
}
