const menuBtn = document.querySelector(' .menu-btn ');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('nav');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.menu-nav_item')

let showMenu = false;

menuBtn.addEventListener('click' , toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('show');
        nav.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        showMenu  = true;
    } else{
        hamburger.classList.remove('show');
        nav.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}
