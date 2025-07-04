// common.js

$(function () {

  // 카운트
  $('.ct').each(function () {
    var num = $(this).attr('data-count');
    $(this).text(num);
  });
  var dd = 0;
  // $(window).scroll(function () {
  //   var ct_position = $('.count').offset().top - window.innerHeight;
  //   if (dd == 0 && $(window).scrollTop() > ct_position) {
  $('.ct').each(function () {
    var $this = $(this)
    var countTo = $this.attr('data-count');
    $(this).text('');

    $({
      countNum: $this.text()
    }).animate({
      countNum: countTo
    },
      {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
  });
  dd = 1;
  //   }
  // });

  var ee = 0;
  $(window).scroll(function () {
    var ct_position = $('.count').offset().top - window.innerHeight;
    console.log(ct_position);
    if (ee == 0 && $(window).scrollTop() > ct_position) {
      $('.ct02').each(function () {
        var $this = $(this)
        var countTo02 = $this.attr('data-count');
        $(this).text('');

        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo02
        },
          {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          });
      });
      ee = 1;
    }
  });


  // 케이스 탭 버튼
  var tabContent = $('.tab-content-wrapper > .tab-content');
  var tabMenu = $('.tab-menu > li > button');
  var tabConIndex = tabContent.index(this);


  tabMenu.on('click', function () {
    var tabMenuIndex = tabMenu.index(this);
    console.log(tabMenuIndex);
    //모든 div의 on 클래스 제거
    tabContent.removeClass('on');
    tabMenu.removeClass('on');
    //클릭된 index에 해당하는 div에 on 추가
    tabContent.eq(tabMenuIndex).addClass('on');
    tabMenu.eq(tabMenuIndex).addClass('on');
  })


  // 케이스 슬라이드

  if ($(window).width() < 720) {
    swiper01 = new Swiper(".case-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    //gnb 메뉴
    let secMove;
    let menu = 0;
    var menuLi = $(".header-menu > ul > li");
    var headerMenu = $(".header-menu");

    // menuLi.on("click", function (event) {
    //   event.preventDefault();
    //   let menu = $(this).index();
    //   secMove = $("#container > section").eq(menu).offset().top;

    //   $(this).removeClass("on");
    //   $(this).eq(secMove).addClass("on");


    //   $("html, body").stop().animate({ "scrollTop": secMove - 70 }, 500);
    // });

    var menuBtn = $('.menu-btn');
    //m-btn X자로 바뀌게
    menuBtn.on("click", function (event) {
      event.preventDefault();
      $(this).toggleClass("mb");
      headerMenu.toggleClass("on");
    })

    menuLi.on("click", function (event) {

      event.preventDefault();

      let menu = $(this).index();
      secMove = $("#container > section").eq(menu).offset().top;
      headerMenu.fadeToggle(50);
      menuBtn.removeClass("mb");

      $("html, body").stop().animate({ "scrollTop": secMove - 70 }, 500);
    });

  } else {
    // 2번섹션 슬라이드
    var swiper01 = new Swiper(".case-swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }


  // 스크롤 영역 당 기능 동작


  // //  header
  // var win = $(window);
  // var header = $('#header');
  // var headOffset = $(header).offset().top;

  // win.on('scroll', function (e) {
  //   setPage();
  // });

  // var setPage = function () {

  //   if (headOffset > lineGraph01 && scTops < scTopsQna) {
  //     $(".graph-01 .linegraph-ul").addClass('on');
  //   }
  //   if (scTops > scTopsPoint && scTops < scTopsQna) {
  //     pointSecUl.addClass('onpoint');
  //   }
  // }
});