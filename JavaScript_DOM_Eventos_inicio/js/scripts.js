//Eventos

// window.addEventListener('load', function () {
//   //load espera a que todos los archivos estén listos
//   console.log(2);
// });

// document.addEventListener('DOMContentLoaded', function () {
//   //DOMContentLoaded solo espera a que se descargue HTML y no las img o css, por eso se ejecuta primero que load
//   console.log(4);
// });

const btnEnviar = document.querySelector('.boton--primario');
const form = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const datos = {
  nombre: '',
  email: '',
  mensaje: '',
};

function handleForm(ev) {
  const { nombre, email, mensaje } = datos;
  ev.preventDefault();
  if (nombre === '' || email === '' || mensaje === '') {
    mostrarError('Todos los campos son requeridos');
    return;
  } else {
    formSuccess('Se ha enviado con éxito el formulario');
  }
}

//para formulario, eventos de input y textArea
function leerTexto(ev) {
  //console.log(ev.target.value);
  datos[ev.target.id] = ev.target.value;
  console.log(datos);
}

// function handleBtn(ev) {
//   ev.preventDefault();

//   console.log('enviando form');
// }

//mostrar error en pantalla
function mostrarError(mensaje) {
  const error = document.createElement('P');
  error.textContent = mensaje;
  error.classList.add('error');
  form.appendChild(error);
  console.log(error);
}

function formSuccess(mensaje) {
  const success = document.createElement('P');
  success.textContent = mensaje;
  success.classList.add('success');
  form.appendChild(success);
  setTimeout(() => {
    success.remove();
  }, 5000);
}

form.addEventListener('submit', handleForm);
nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
//btnEnviar.addEventListener('click', handleBtn);
