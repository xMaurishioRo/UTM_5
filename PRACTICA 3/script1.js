var numeromax = 0;
var numeros = [];

while (true) {
  let numero = parseInt(prompt('Ingresa un número:'));

  if (isNaN(numero)) {
    alert('No ingresaste un número válido. Intenta nuevamente.');
    continue; 
  }

  if (numero > numeromax) {
    numeromax = numero;
  }

  let respuesta = prompt('¿Deseas ingresar otro número? (s/n)');
  if (respuesta.toLowerCase() !== 's') {
    break;
  }
}

alert(`El número más alto ingresado es: ${numeromax}`); 
