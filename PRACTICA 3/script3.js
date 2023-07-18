function sumarDigitos(numero) {
    var suma = 0;
  
    while (numero > 0) {
      suma += numero % 10;
      numero = Math.floor(numero / 10);
    }
  
    return suma;
  }
  
  var numero = prompt('Ingresa un número:');
  var resultado = sumarDigitos(numero);
  
  alert('La suma de los dígitos de ' + numero + ' es: ' + resultado);
  