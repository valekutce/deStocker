$(document).ready(function (){
let burg = document.querySelector('.header-nav .fa');
let headerMobilemenu = document.querySelector('.header-mobilemenu');
let headerMobilemenuClose = document.querySelector('.header-mobilemenu-close'); 
burg.addEventListener('click', function(){
    burg.classList.toggle('fa__active');
    burg.classList.toggle('fa-bars');
    burg.classList.toggle('fa-times');
    headerMobilemenu.classList.toggle('header-mobilemenu__active');
});
headerMobilemenuClose.addEventListener('click', function() {
    burg.classList.toggle('fa__active');
    burg.classList.toggle('fa-bars');
    burg.classList.toggle('fa-times');
    headerMobilemenu.classList.toggle('header-mobilemenu__active');
})
window.addEventListener('scroll', function(){
        burg.classList.remove('fa__active');
        burg.classList.add('fa-bars');
        burg.classList.remove('fa-times');
        headerMobilemenu.classList.remove('header-mobilemenu__active');
});

let contentLeftMore = document.querySelector('.content-lef-wrap__more'),
clickMore = document.getElementById('clickMore');
clickMore.addEventListener('click', function(event) {
    event.preventDefault();
    contentLeftMore.style.display = 'block';
});
let allBtn = document.querySelector('.content-lef-wrap__more .btn');
    allBtn.addEventListener('click', function(event) {
        event.preventDefault();
        let hasAttr = contentLeftMore.style.display;
        if (hasAttr === "block") {
            contentLeftMore.setAttribute('style', 'none');
        }
        console.log(hasAttr);
    });

});