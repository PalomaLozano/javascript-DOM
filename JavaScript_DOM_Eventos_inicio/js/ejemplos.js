//para que funcione hay que añadir este documento js a contacto.html

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
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById
// const heading2 = document.getElementById('heading');
// console.log(heading2);

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
//agregar texto
nuevoEnlace.textContent = 'Este es un enlace creado desde JS';
//agregar clase
nuevoEnlace.classList.add = 'navegacion__enlace';
//agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);
