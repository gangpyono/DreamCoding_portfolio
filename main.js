'use strict';

//스크롤 내릴시 냅바 고정 및 변경
const navbar = document.querySelector('#Navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY >= navbar.getBoundingClientRect().height) {
    navbar.classList.add('dark-mode');
  } else {
    navbar.classList.remove('dark-mode');
  }
});

// 냅바 메뉴 누르면 해당 메뉴로 스크롤 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const link = event.target.dataset.link;
  const target = event.target;
  if (link == null) return;
  scrollIntoView(link);
  selectNavMenu(target);
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

//project 필터링버튼 클릭시 해당 project만 나타내기
const workBtns = document.querySelector('.work__filterBtns');
const projectsContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtns.addEventListener('click', (event) => {
  const key = event.target.dataset.key || event.target.parentNode.dataset.key;
  if (key == null) return;

  const target =
    event.target.nodeName == 'BUTTON' ? event.target : event.target.parentNode;
  const selectedBtn = document.querySelector('.filterBtn.selected');
  selectedBtn.classList.remove('selected');
  target.classList.add('selected');

  projectsContainer.classList.add('scale-in');
  setTimeout(() => {
    if (key === '*') {
      projects.forEach((project) => {
        project.classList.remove('none');
      });
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
function scrollIntoView(link) {
  const scrollto = document.querySelector(link);
  const navMenu = document.querySelector(
    `.navbar__menu li[data-link='${link}']`
  );
  scrollto.scrollIntoView({ behavior: 'smooth', block: 'center' });
  selectNavMenu(navMenu);
}

// 섹션 이동시 메뉴탭 자동 이동.

const sectionIds = [
  '#Home',
  '#About',
  '#Skills',
  '#Work',
  '#Testimonials',
  '#Contact',
];

const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('li[data-link]');

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const id = entry.target.id;
      let index = sectionIds.indexOf(`#${id}`);
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const options = {
  root: null,
  threshold: 0.3,
  rootMargin: '0px',
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section));

window.addEventListener('wheel', () => {
  if (window.scrollY == 0) {
    // 맨위
    selectedNavIndex = 0;
  } else if (
    window.scrollY + window.innerHeight ==
    document.body.clientHeight
  ) {
    //맨끝
    selectedNavIndex = navItems.length - 1;
  }
  selectNavMenu(navItems[selectedNavIndex]);
});

function selectNavMenu(selected) {
  selectedNavItem.classList.remove('active');
  selected.classList.add('active');
  selectedNavItem = selected;
}
