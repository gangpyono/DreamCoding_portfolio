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
  navbarMenu.classList.remove('active');
});

//navbar버튼 클릭시 메뉴 보이기
const navbarBtn = document.querySelector('.navbar__menu-btn');
navbarBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

//홈화면 버튼클릭시 contact로 이동
const contactBtn = document.querySelector('.home__btn');
contactBtn.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  scrollIntoView(link);
});

//project 필터링 버튼 클릭시 해당 project만 나타내기
const workBtns = document.querySelector('.work__filterBtns');
const projectsContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtns.addEventListener('click', (event) => {
  const target = event.target;
  const key = target.dataset.key;
  if (key == null) return;

  const selectedBtn = document.querySelector('.filterBtn.selected');
  if (!target.classList.contains('selected')) {
    target.classList.add('selected');
    selectedBtn.classList.remove('selected');
  }

  projectsContainer.classList.add('scale-in');
  setTimeout(() => {
    if (key === '*') {
      projects.forEach((project) => {
        project.classList.remove('none');
      });
      projectsContainer.classList.remove('scale-in');
    } else
      projects.forEach((project) => {
        if (project.dataset.key !== key) project.classList.add('none');
        else project.classList.remove('none');
      });
    projectsContainer.classList.remove('scale-in');
  }, 300);
});

// 보이는 화면의 화살표클릭시 맨위로 자동 스크롤

const arrowBtn = document.querySelector('.arrow-btn');
arrowBtn.addEventListener('click', () => {
  scrollIntoView('#Home');
});

// 스크롤 이동
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
}
