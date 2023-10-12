
function popupcont(){
  const bttn = document.querySelector('#contact-container')
  bttn.classList.add('popup')
  console.log(bttn)
  
}
function popdown(){
  const close= document.querySelector('#contact-container')
  close.classList.remove('popup')
}
 

function cartpage(){
  // let cart=document.querySelector('#cart-page')
  const cart=document.querySelector('.cart-page').style.position;
  //  if(cart.style.right==='-600px'){
  //   console.log('good');
  // }
  // else{
     console.log(cart)
  // }
}
const cart=document.querySelector('.cart-page').style.transform;
console.log(cart);

function vreveal(){
  let img=document.querySelector('#images-container');
  let vdo=document.querySelector('#vdo-container');
   if(img.classList.contains("images-container"))
   {
    img.classList.add('images-container-func');
    img.classList.remove('images-container');
    vdo.classList.add('vdo-container-func')
    vdo.classList.remove('vdo-container');
  }
}

function imgreveal(){
  let img=document.querySelector('#images-container');
  let vdo=document.querySelector('#vdo-container');
   if(img.classList.contains("images-container-func"))
   {
    img.classList.remove('images-container-func');
    img.classList.add('images-container');
    vdo.classList.remove('vdo-container-func')
    vdo.classList.add('vdo-container');
  }
}