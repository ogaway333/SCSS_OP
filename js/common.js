$(function () {
  var $slideContainer = $('.p-blog__slide-container');
  var slideItemNum = $('.p-blog__slide-box').length;
  var slideItemWidth = $('.p-blog__slide-box').innerWidth();
  var slideContainerWidth = slideItemWidth * slideItemNum;
  $slideContainer.attr('style', 'width:' + slideContainerWidth + 'px');
  var SLIDE_DURATION = 300;
  var HERO_DURATION = 10000;

  //ズーム後のhero画像切替
  var HeroCount = 0;
  var heroImages = ['images/hero.png', 'images/hero2.png', 'images/hero3.png'];
  $('.js-change-image').css('background-image', 'url(' + heroImages[HeroCount] + ')');
  setInterval(function () {
    HeroCount++;
    $('.js-change-image').css('background-image', 'url(' + heroImages[HeroCount] + ')');
    if (HeroCount === 2) HeroCount = 0;

  }, HERO_DURATION);
  //スライダー
  var Slide_Check = function () {
    console.log('act');
    if ($('.js-slide-1').hasClass('is-active')) {
      $slideContainer.attr('style', 'left:0px; width:' + slideContainerWidth + 'px;');
    }
    if ($('.js-slide-2').hasClass('is-active')) {
      $slideContainer.attr('style', 'left:-' + slideItemWidth + 'px; width:' + slideContainerWidth + 'px;');
    }
    if ($('.js-slide-3').hasClass('is-active')) {
      $slideContainer.attr('style', 'left:-' + slideItemWidth * 2 + 'px; width:' + slideContainerWidth + 'px;');
    }

  }
  $(window).resize(function () {
    slideItemNum = $('.p-blog__slide-box').length;
    slideItemWidth = $('.p-blog__slide-box').innerWidth();
    slideContainerWidth = slideItemWidth * slideItemNum;
    Slide_Check();

  });

  $('.js-slide-1').on('click', function () {
    if (!$('.js-slide-1').hasClass('is-active')) {
      if ($('.js-slide-2').hasClass('is-active')) {
        $('.js-slide-1').toggleClass('is-active');
        $('.js-slide-2').toggleClass('is-active');
        $slideContainer.animate({ left: '+=' + slideItemWidth + 'px' }, SLIDE_DURATION);
      }
      if ($('.js-slide-3').hasClass('is-active')) {
        $('.js-slide-1').toggleClass('is-active');
        $('.js-slide-3').toggleClass('is-active');
        $slideContainer.animate({ left: '+=' + slideItemWidth * 2 + 'px' }, SLIDE_DURATION);
      }
    }
  });

  $('.js-slide-2').on('click', function () {
    if (!$('.js-slide-2').hasClass('is-active')) {
      if ($('.js-slide-1').hasClass('is-active')) {
        $('.js-slide-2').toggleClass('is-active');
        $('.js-slide-1').toggleClass('is-active');
        $slideContainer.animate({ left: '-=' + slideItemWidth + 'px' }, SLIDE_DURATION);
      }
      if ($('.js-slide-3').hasClass('is-active')) {
        $('.js-slide-2').toggleClass('is-active');
        $('.js-slide-3').toggleClass('is-active');
        $slideContainer.animate({ left: '+=' + slideItemWidth + 'px' }, SLIDE_DURATION);
      }
    }
  });

  $('.js-slide-3').on('click', function () {
    if (!$('.js-slide-3').hasClass('is-active')) {
      if ($('.js-slide-1').hasClass('is-active')) {
        $('.js-slide-3').toggleClass('is-active');
        $('.js-slide-1').toggleClass('is-active');
        $slideContainer.animate({ left: '-=' + slideItemWidth * 2 + 'px' }, SLIDE_DURATION);
      }
      if ($('.js-slide-2').hasClass('is-active')) {
        $('.js-slide-3').toggleClass('is-active');
        $('.js-slide-2').toggleClass('is-active');
        $slideContainer.animate({ left: '-=' + slideItemWidth + 'px' }, SLIDE_DURATION);
      }
    }
  });

  //ハンバーガーメニュ
  $('.p-header__menu-trigger').on('click', function () {
    $(this).toggleClass('is-active');
    $('.js-toggle-sp-menu-target').toggleClass('is-active');
  });
});
