$(function() {
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

    $(".tab-nav li").click(function(){
        $(this).addClass("actived").siblings().removeClass("actived");

    })
});

function scrollTodiv (id, cls) {
    var div = document.getElementById(id);
    div.scrollIntoView();
    div.classList.add(active);
}
