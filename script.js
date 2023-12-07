const menu = document.querySelector('.menu');
const closeMenu =document.querySelector('.close-menu');
const navMenu =document.querySelector('.mid-navbar');
const maobileNav =document.querySelector('.mobile-nav');
let width = window.innerWidth;
console.log(width);

menu.addEventListener('click', (e) =>{
  if(e.clientX < 809){
    navMenu.style.display = 'none';
    maobileNav.style.display = 'flex'
    // maobileNav.style.display = 'none'
    menu.style.display = 'none'
    closeMenu.style.display = 'block'
  }else{
   navMenu.style.display = "flex";
   navMenu.classList.toggle('nav-menu');
   menu.style.display = 'none'
   closeMenu.style.display = 'block'
  }
});

closeMenu.addEventListener('click', (e) =>{
  if(e.clientX < 809){
    navMenu.style.display = 'none';
    maobileNav.style.display = 'none'
    menu.style.display = 'block'
    closeMenu.style.display ='none'
  }else{
   navMenu.style.display = "none";
   navMenu.classList.toggle('nav-menu');
   closeMenu.style.display = 'none'
   menu.style.display = 'block';
  }
});

// swiper

var swiper = new Swiper(".mySwiper", {
     spaceBetween: 30,
     centeredSlides: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });