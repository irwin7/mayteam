let ElOpenBtn =  document.querySelector('.site-header__menu-btn');
let ElNav = document.querySelector('.nav');

ElOpenBtn.addEventListener('click' , function(){
  ElNav.classList.toggle('open')
})
ElOpenBtn.addEventListener('click' , function(){
  ElOpenBtn.classList.toggle('rotate')
})
