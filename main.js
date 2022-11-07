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
/* Crear listado de productos */
/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */
const Cartcontainers = document.querySelector('.cards-container');
const produclist = [];
produclist.push({
    name: 'moto',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produclist.push({
    name: 'Lucero',
    price: '220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
produclist.push({
    name: 'Iphone',
    price: '1200',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
function renderproduct (arr){//esta funcion se puede llamar al dar click en otro lado
    for (const product of arr) {//for para crear los elementos del html
        const productcart = document.createElement('div');
        productcart.classList.add('product-card');//asignar la clase
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);//cambia la imagen por lo que esta en el objeto
    
        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
    
        const productdescrip = document.createElement('div');
        const productprice = document.createElement('p');
        productprice.innertext = '$' + product.price;
        const producttitle = document.createElement('p');
        producttitle.innertext = product.name;
        
        productdescrip.append(productprice,producttitle);
        //productdescrip.appendChild(producttitle);
    
        const iconcart = document.createElement('figure');
        const imgcar= document.createElement('img');
        imgcar.setAttribute('src', './icons/bt_add_to_cart.svg' );
        
        iconcart.appendChild(imgcar);
        
        productinfo.appendChild(productdescrip);
        productinfo.appendChild(iconcart);
        productcart.appendChild(img);
        productcart.appendChild(productinfo);
    
        Cartcontainers.appendChild(productcart);
    }
}

renderproduct(produclist);