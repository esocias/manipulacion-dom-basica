// creo variables que apuntan a las etiquetas HTML que me interesan

// querySelector -> etiqueta, clase o id
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#resultado');

btn.addEventListener('click', btnOnClick); // la funcion a ejecutar debe ir sin paréntesis
                                            // solo va el nombre de la funcion a llamar
function btnOnClick(event) {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = parseInt(input1.value)+parseInt(input2.value);
    presult.innerText = sumaInputs;
}

// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e){
//     e.preventDefault();

//     alert("virus")
// }

input1.addEventListener("click", iClick)

function iClick(e) {
    if(e.button < 1){
        console.log('Left click detected');
    } else {
        console.log('Que pasa???');
        console.log({e});
    }
}

hl.addEventListener('contextmenu', (event) => {
    alert("✋ no right click here")
    event.preventDefault()
  })