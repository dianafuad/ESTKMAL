let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.secrch-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.form-login-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav-bar');
let imgBtn = document.querySelectorAll('.img-btn')

// search btn scroll
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
    loginForm.classList.remove('active');
};
// search btn click
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
});
// form btn 
formClose.addEventListener('click', () =>{
    loginForm.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.toggle('active');
});
// nav-bar meun
menu.addEventListener('click' , () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
    searchBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
});
// image button
imgBtn.forEach(btn =>{
    btn.addEventListener('click' , () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active')
        let src = btn.getAttribute('data-src');
        document.querySelector('#img-slider').src = src;
    })
});
var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
