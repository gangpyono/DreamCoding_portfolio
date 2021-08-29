'use strict';

//스크롤 내릴시 보이는 페이지에 냅바 고정
const navbar = document.querySelector('#Navbar');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navbar.getBoundingClientRect().height) {
    navbar.classList.add('dark-mode');
  } else {
    navbar.classList.remove('dark-mode');
  }
});

// 냅바 메뉴 누르면 해당 메뉴로 스크롤 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  scrollIntoView(link);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
}

//홈화면 버튼클릭시 contact로 이동
const contactBtn = document.querySelector('.home__btn');
contactBtn.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  scrollIntoView(link);
});
