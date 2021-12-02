//.class
//#id
//h1

//querySelector
const heading = document.querySelector('.header__texto h2');

//querySelector retorna 0 o 1 elemento

heading.textContent = 'Contacto';
heading.classList.add('nueva-clase');

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para enlace';
//enlaces[0].href = 'https://www.google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

//getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);
