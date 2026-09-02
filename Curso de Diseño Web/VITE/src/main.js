import './assets/estilos.css';

import imagen from './assets/bosque.png';
import cargarContador from './contador';
import clases from './assets/imagen.module.css';


console.log('Hola mundo');

document.querySelector('#app').innerHTML = `
  <h1>Hola Gabriel!</h1>
  <img src="${imagen}" alt="Imagen de un bosque" id="imagen" class="${clases.imagen}" />
  <h2>Veces clickeado: <span id="cuenta" class="${clases.contador}">0</span></h2>
`;

cargarContador();