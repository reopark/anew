// main이랑 section2 자동 슬라이드
$(function() {
    const $group = $('.main .img_group');
    const $imgs = $group.find('img');
    const $title = $('.main .main_title');
    const $indi = $('.main .indi_group .indi');
    const $banner = $('.section2 .container');
    const $indis = $('.section2 .indi_group .indi');

    const total = $imgs.length;  // 전체 슬라이드 개수
    let index = 0;   // 현재 슬라이드 인덱스
    const duration = 800;   // 슬라이드 전환 속도(ms)

    //슬라이드 이동 처리
    function slide() {
        // 슬라이드 이동시 타이틀 숨기기 
        $title.addClass('hide');
        // 메인 슬라이드 이동
        $group.css({
            transform: `translateX(-${index * 100}%)`,
            transition: `transform ${duration}ms ease`
        });
        
        // section2 슬라이드 이동
        $banner.css({
            transform : `translateX(-${index * 100}%)`
        });
        
        // 메인 indi
        $indi.removeClass('active');
        $indi.eq(index).addClass('active');
        
        // sectino2 indi
        $indis.removeClass('active item2-active');
        $indis.eq(index).addClass('active');

        // item2 일때만 색 변경 
        if(index === 1) {
            $indis.eq(index).addClass('item2-active')
        }

        // main_title 제어 // 첫번째 슬라이드에서만 타이틀 노출 
        if(index === 0) {
            $title.removeClass('hide');
        }else {
            $title.addClass('hide');
        }
    }
        
    // 8초마다 자동 슬라이드 
    setInterval(function() {
        index = (index + 1) % total;
        slide();
    },8000)
})
/*
// 공통 슬라이드 
function slider(selector, counts) {
    const $section = $(selector);
    const $container = $section.find('.container');
    const $prev = $section.find('.prev');
    const $next = $section.find('.next');
    const $page = $section.find('.page');
    const $total = $section.find('.total');
    const $bar = $section.find('.bar');
    const $barcolor = $section.find('.bar .color');
    const $filterbtn = $section.find('.title2 li');

    let $item = $section.find('.item');
    
    let index = 0;       // 현재 슬라이드 인덱스
    let isDown = false;    // 마우스 눌림 여부
    let isDragging = false;    // 드래그 여부
    let startX = 0;     // 드래그 시작 위치
    let translate = 0;    // 현재 이동 거리

    let totalitem = $item.length;       // 전체 아이템 수
    let totalpage = totalitem - counts + 1;   // 현재 페이지 수

    // 필터 변경 시 페이지 다시계산
    function updatePagination() {
        $item = $section.find('.item:not(.hide)');
        totalitem = $item.length;
        totalpage = Math.max(totalitem - counts + 1, 1);

        index = 0;

        $page.text(1);
        $total.text(totalpage);

        slide();
    }

    // 슬라이드 이동
    function slide() {
        if ($item.length === 0) return;

        const offset = $item.eq(index).position().left;
        translate = -offset;

        $container.css({
            transition: 'transform 0.4s ease',
            transform: `translateX(${translate}px)`
        });

        $page.text(index + 1);

        // 이전 버튼 색상 처리
        $prev.css({
            color: index === totalpage - 1  ?  '#000' :'rgba(0,0,0,0.5)'
        });
        

        // 진행 바 업데이트
        const progress = ((index + 1) / totalpage) * 100;
        $barcolor.css({width : `${progress}%`});
    }


    // 다음 버튼
    $next.on('click', function (e) {
        e.preventDefault();
        if (index < totalpage - 1) {
            index++;
            slide();
        }
    });

    // 이전 버튼
    $prev.on('click', function (e) {
        e.preventDefault();
        if (index > 0) {
            index--;
            slide();
        }
    });

    // 드래그 중 링크 이동 방지
    $section.on('mousedown','a' ,function (e) {
        e.preventDefault();
    });

    $section.on('click', 'a', function (e) {
        if (isDragging) {
            e.preventDefault();
        }
    });

    // 드래그 시작
    $container.on('mousedown', function (e) {
        isDown = true;
        isDragging = false;
        startX = e.pageX;
        $container.css({ transition: 'none'});
    });


    // 드래그 중
    $(document).on('mousemove', function (e) {
        if (!isDown) return;
        const moveX = e.pageX - startX;
        
        if (Math.abs(moveX) > 5) {
            isDragging = true; 
        }
        
        $container.css({
            transform: `translateX(${translate + moveX}px)`
        });
    });


    // 드래그 종료
    $(document).on('mouseup', function (e) {
        if (!isDown) return;
        isDown = false;

        $container.removeClass('dragging');

        const diff = e.pageX - startX;

        if (diff < -50 && index < totalpage - 1) {
            index++;
        } else if (diff > 50 && index > 0) {
            index--;
        }

        slide(); 
    });

    $total.text(totalpage);
    slide();
    
    // 외부에서 페이지 갱신용 함수 저장
    $section.data('updatePagination', updatePagination);
}

// 반응형 슬라이더 초기화
function initSliders() {
    const isMobile = window.innerWidth <= 1000;

    slider('.section1', isMobile ? 2 : 4);
    slider('.section3', isMobile ? 2 : 4);
    slider('.section5', isMobile ? 2 : 3);
    slider('.section6', isMobile ? 2 : 3);
}

// 최초 실행 + 리사이즈 대응 
$(function () {
    initSliders();

    $(window).on('resize', function () {
        $('.section1, .section3, .section5, .section6').each(function () {
            $(this).find('.container').css('transform', 'translateX(0)');
        });

        initSliders();
    });
});*/

// section1
$(function() {
    const s3Swiper = new Swiper('.s1-swiper', {
        slidesPerView: 4,
        slidesPerGroup : 1,
        spaceBetween: 30,
        speed : 400,
        on: {
            init(swiper) {
                updateSection1Bar(swiper);
            },
            slideChange(swiper) {
                updateSection1Bar(swiper);
            }
        },
        // 이전 / 다음 버튼 
        navigation : {
            nextEl : ".section1 .next",
            prevEl : ".section1 .prev",
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 4
            }
        },
    })

    function updateSection1Bar(swiper) {

        const $bar = $('.section1 .bar .color');

        // 현재 위치 (0부터 시작 → +1)
        const current = swiper.realIndex + 1;

        // 전체 아이템 수
        const totalItem = swiper.slides.length;

        // 현재 화면에서 보이는 개수
        const viewCount = swiper.params.slidesPerView;

        // 이동 가능한 전체 단계 수
        const totalStep = Math.max(totalItem - viewCount + 1, 1);

        // 퍼센트 계산
        const percent = (current / totalStep) * 100;

        // bar 적용
        $bar.css('width', percent + '%');
    }
})

// section3
$(function () {

    let s3Swiper;

    // 원본 슬라이드 백업 (한 번만)
    const $originSlides = $('.section3 .swiper-slide').clone();

    // swiper 생성 함수
    function initSection3Swiper() {

        if (s3Swiper) {
            s3Swiper.destroy(true, true);
        }

        s3Swiper = new Swiper('.s3-swiper', {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
            speed: 400,

            navigation: {
                nextEl: '.section3 .next',
                prevEl: '.section3 .prev',
            },

            breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 4
            }
            },

            on: {
                init(swiper) {
                    updateSection3Bar(swiper);
                },
                slideChange(swiper) {
                    updateSection3Bar(swiper);
                }
            }
        });
    }

    // bar 업데이트
    function updateSection3Bar(swiper) {

        const $bar = $('.section3 .bar .color');

        const current = swiper.realIndex + 1;
        const totalItem = swiper.slides.length;
        const viewCount = swiper.params.slidesPerView;

        const totalStep = Math.max(totalItem - viewCount + 1, 1);
        const percent = (current / totalStep) * 100;

        $bar.css('width', percent + '%');
    }

    // 필터 클릭
    $(document).on('click', '.section3 .title2 li', function () {

        const filter = $(this).data('filter');

        $('.section3 .title2 li').removeClass('active');
        $(this).addClass('active');

        const $wrapper = $('.s3-swiper .swiper-wrapper');
        $wrapper.empty();

        // 원본 기준으로 필터링
        $originSlides.each(function () {
            const $slide = $(this).clone();
            const category = $slide.find('a').attr('class');

            if (filter === 'all' || category === filter) {
                $wrapper.append($slide);
            }
        });

        // 항상 첫 슬라이드부터
        initSection3Swiper();
    });

    // 최초 실행
    initSection3Swiper();
});

// section5
$(function() {
    const s3Swiper = new Swiper('.s5-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,

        // 이전 / 다음 버튼 
        navigation : {
            nextEl : ".section5 .next",
            prevEl : ".section5 .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 3
            }
        },
    })
})

// section6
$(function() {
    const s3Swiper = new Swiper('.s6-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        // 이전 / 다음 버튼 
        navigation : {
            nextEl : ".section6 .next",
            prevEl : ".section6 .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 3
            }
        },
    })
})


// 해더 스크롤 다운 처리 
$(function() {
    $(window).scroll(function() {
        header_low()
    })
    function header_low() {
        scrolls = $(window).scrollTop()
        if(scrolls > 30) {
            $('header').addClass('down')
        }else {
            $('header').removeClass('down')
        }
    }
})


// 모바일 메뉴 열기 / 닫기
$(function() {
    $(document).on('click', 'header .ham', function () {
        $('.m_menu').css({ transform: 'translateX(0)' });
        $('.bg').show();
    });

    $(document).on('click', '.bg', function () {
        $(this).hide()
        $('.m_menu').css({transform : `translateX(-100%)`});
    })
})

$(function() {

    $(document).on('mouseenter', 'header .left .menu .menu_list', function (e) {
        $(this).find('.sub').stop().slideDown()
    });
    
    $(document).on('mouseleave', 'header .left .menu .menu_list', function (e) {
        $(this).find('.sub').stop().slideUp()
    });
})
