//variables a usar
let suma = document.getElementById('suma');
let resta = document.getElementById('resta');
let multiplicacion = document.getElementById('multiplicacion');
let division = document.getElementById('division');
let igual = document.getElementById('igual');
let reset = document.getElementById('reset');
let resultado = document.getElementById('resultado');
let resultadoPre; // esta variable se usará para guardar temporalmente el resultado de las operaciones
let lista = document.getElementById('lista');
let resetLista = document.getElementById('resetLista');

// funciones
function sumar() {
  let num1 = document.getElementById('numero1').value;
  let num2 = document.getElementById('numero2').value;

  let numero1 = parseFloat(num1);//parseFloat() convierte el value de num1 y num2 en números.
  let numero2 = parseFloat(num2);

  resultadoPre = numero1 + numero2;//se guarda temporalmente el resultado de la operación en la variable resultadoPre, que será mostrado después con el botón =
  return resultadoPre;
}

function restar() {
  let num1 = document.getElementById('numero1').value;
  let num2 = document.getElementById('numero2').value;

  let numero1 = parseFloat(num1);
  let numero2 = parseFloat(num2);

  resultadoPre = numero1 - numero2;
  return resultadoPre;
}

function multiplicar() {
  let num1 = document.getElementById('numero1').value;
  let num2 = document.getElementById('numero2').value;

  let numero1 = parseFloat(num1);
  let numero2 = parseFloat(num2);

  resultadoPre = numero1 * numero2;
  return resultadoPre;
}

function dividir() {
  let num1 = document.getElementById('numero1').value;
  let num2 = document.getElementById('numero2').value;

  let numero1 = parseFloat(num1);
  let numero2 = parseFloat(num2);

  resultadoPre = numero1 / numero2;
  return resultadoPre;
}

//helper function #1 para cambiar de color la lista de resultados
function colorValue() {
  return Math.floor(Math.random() * 256);
}

//helper function #2 para cambiar de color la lista de resultados
function colorChange() {
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  lista.style.backgroundColor = randomColor;
}

function mostrarResultado() {//esta función se usará como eventHandler para el botón =
  resultado.value = resultadoPre;
  let li = document.createElement('li');//crea elemento li para poder ser agregado a la lista
  li.textContent = resultadoPre;//se le da al elemento li el valor de resultadoPre
  lista.appendChild(li);
  colorChange();
}

//reseteo de números a operar
function resetear() {
  let num1 = document.getElementById('numero1');
  let num2 = document.getElementById('numero2');

  num1.value = '';
  num2.value = '';
  resultado.value = '';
}

//eventHandlers
suma.addEventListener('click', sumar);
resta.addEventListener('click', restar);
multiplicacion.addEventListener('click', multiplicar);
division.addEventListener('click', dividir);
igual.addEventListener('click', mostrarResultado);
reset.addEventListener('click', resetear);
resetLista.addEventListener('click', () => {
  lista.innerText = '';
})

