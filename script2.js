// creo variables que apuntan a las etiquetas HTML que me interesan

// querySelector -> etiqueta, clase o id
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#resultado');

function btnOnClick() {
    const sumaInputs = parseInt(input1.value)+parseInt(input2.value);
    presult.innerText = sumaInputs;
}