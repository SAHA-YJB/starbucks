// badge 제어////////////////////////////////////////////////////////////////////////
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
//하나의 탭(창)을 의미, 보고 있는 화면 자체//////////////////////////////////////////////////////
//로대시씨디엔 쓰로틀메소드로 스크롤이 .3초로 제한 실행//////////////////////////////////////////////////////
//너무 많이 실행되는 것을 방지////////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지숨기기////////////////////////////////////
    //badgeEl.style.display = 'none';
    //gsap.to(요소, 지속시간, 옵션);  지삽사용법/////////////////////////////////////////////
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  //최상단이동 버튼 보이기
  gsap.to(toTopEl, .2, {
    x: 0
  });
  } else {
    //배지보여주기///////////////////////////////////////////////////////////////
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //최상단 이동 버튼 숨김
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300)); //0.3초/////////////////////////////////////////////
//_.throttle(함수, 시간)/////////////////////////////////////////////

//최상단으로 이동
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// visual순차적 애니메이션/////////////////////////////////////////////
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, {옵션});  지삽사용법////////////////////////////////////
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .7,
    opacity: 1
  });
});

//new Swiper(선택자, {옵션})//////////////////////////////////////////
//비쥬얼 부분 슬라이드 왼쪽오른쪽 버튼, 하단부분
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드 가운데 보이기
  loop: true,
  autoplay: {
    dleay: 5000
  },
  pagination: {
    el: '.swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자가 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

//토글버튼
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

// 유튜브이미지띄움
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, {옵션});
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션동작시간
    { //옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true, 
      ease: Power1.easeInOuteaseInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

//scrollmagic//////////////////////////////////
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  //메소드체이닝//////////////////////
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());   
});

