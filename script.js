// creo variables que apuntan a las etiquetas HTML que me interesan

// querySelector -> etiqueta, clase o id
const h1 = document.querySelector('h1');
const p = document.querySelector("p");

const parrafito = document.querySelector('.parrafito');
// o const parrafito = document.getElementsByClassName('parrafito');

const pid = document.querySelector('#pid');
// const pid = document.getElementById('pid');

const input = document.querySelector('input');

p.innerHTML = "Texto HTML <br> (toma hasta saltos de línea)";

h1.innerText = "Nuevo título <br> Modificado desde script.js";

h1.setAttribute('class', 'rojo');

h1.classList.add('azul');

h1.classList.remove('rojo');        // va a quedar solo la clase azul

const img = document.createElement('img');
img.setAttribute('src', './images/bike.png')

pid.append(img);
