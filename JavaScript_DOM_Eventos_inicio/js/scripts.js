//Eventos

window.addEventListener('load', function () {
  //load espera a que todos los archivos estén listos
  console.log(2);
});

document.addEventListener('DOMContentLoaded', function () {
  //DOMContentLoaded solo espera a que se descargue HTML y no las img o css, por eso se ejecuta primero que load
  console.log(4);
});

//seleccionar elemento y crear evento

const btnEnviar = document.querySelector('.boton--primario');

function handleBtn(ev) {
  ev.preventDefault();

  console.log('enviando form');
}

btnEnviar.addEventListener('click', handleBtn);

//para formulario
const datos = {
  nombre: '',
  email: '',
  mensaje: '',
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

function leerTexto(ev) {
  //console.log(ev.target.value);
  datos[ev.target.id] = ev.target.value;
  console.log(datos);
}

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
