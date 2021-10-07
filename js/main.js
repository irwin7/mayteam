let elOpenBtn =  document.querySelector('.site-header__menu-btn');
let elDarkBtn =  document.querySelector('.nav__dark-btn');
let elNav = document.querySelector('.nav');
let elBody = document.querySelector('body')


var image = document.querySelector("#logo");
var imageFoot = document.querySelector("#footer-logo");

elOpenBtn.addEventListener('click' , function(){
  elNav.classList.toggle('open')
})
elOpenBtn.addEventListener('click' , function(){
  elOpenBtn.classList.toggle('rotate')
})
elDarkBtn.addEventListener('click' , () =>{
  elBody.classList.toggle('dark');
  console.log(elBody.classList.value);
  if(document.body.classList.value == 'dark'){
    image.src = "img/logo-wh.svg";
    imageFoot.src = "img/logo-wh.svg";
  }else{
    image.src = "img/logo.svg";
    imageFoot.src = "img/logo.svg";
  }
})
