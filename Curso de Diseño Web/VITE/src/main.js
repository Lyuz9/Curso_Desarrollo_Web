import imagen from './assets/bosque.png';
import cargarContador from './contador';

console.log('Hola mundo');

document.querySelector('#app').innerHTML = `
  <h1>Hola Gabriel!</h1>
  <img src="${imagen}" alt="Imagen de un bosque" id="imagen" />
  <h2>Veces clickeado: <span id="cuenta">0</span></h2>
`;

cargarContador();