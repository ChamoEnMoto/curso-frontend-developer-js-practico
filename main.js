/* Aparecer Menu Desktop */
const menuDer =  document.querySelector('.navbar-email');
const DesktopMenuClick =  document.querySelector('.desktop-menu');
menuDer.addEventListener('click',toggledesktopMenu);
function toggledesktopMenu (){
    CartDetails.classList.add('inactive');//desabilita los detalles del producto
    DesktopMenuClick.classList.toggle('inactive');
}
/* Aparecer Menu Mobile */
const MobileMenuClick =  document.querySelector('.menu');
const MobileMenu =  document.querySelector('.mobile-menu');
MobileMenuClick.addEventListener('click',toggleMobileMenu);
function toggleMobileMenu(){
    CartDetails.classList.add('inactive');//desabilita los detalles del producto
    MobileMenu.classList.toggle('inactive');
}
/* Aparecer Items del carrito de Compras */
const CartClick =  document.querySelector('.navbar-shopping-cart');
const CartDetails =  document.querySelector('.product-detail');
CartClick.addEventListener('click',toggleCartDetails);
function toggleCartDetails(){
    MobileMenu.classList.add('inactive');//Desabilita el menu mobile
    CartDetails.classList.toggle('inactive');
    DesktopMenuClick.classList.add('inactive');//desabilita el menu desktop
}