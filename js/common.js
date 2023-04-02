/////////input 요소 제어///////////////////////////////////////////////////////////////
const searchEl = document.querySelector('.search');
// class search를 찾았기 때문에 도큐먼트가 아닌 searchEl을 작성/////////////////////////////////////////////
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  //logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  // 포커스 이벤트 발생시 포커스드 클래스 추가//////////////////////////////////////////////////////
  searchEl.classList.add('focused');
  // 포커스 이벤트시 속성 추가////////////////////////////////////////////////////////////////////////
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  // 포커스 해제시 포커스드 클래스 삭제///////////////////////////////////////////////////////////////
  searchEl.classList.remove('focused');
  // 삭제 후 빈문자열로 글자를 없앰///////////////////////////////////////////////////////////////
  searchInputEl.setAttribute('placeholder', '');
});

//푸터섹션 년도 자동계산 /
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 