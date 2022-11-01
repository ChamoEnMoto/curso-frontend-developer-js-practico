const menuDer =  document.querySelector('.navbar-email');
const DesktopMenuClick =  document.querySelector('.desktop-menu');

menuDer.addEventListener('click',toggledesktopMenu);

function toggledesktopMenu (){
    DesktopMenuClick.classList.toggle('inactive');
}