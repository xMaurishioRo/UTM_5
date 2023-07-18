function generarSecuenciaFibonacci(numero) {
    var secuencia = [0, 1];
  
    while (secuencia[secuencia.length - 1] < numero) {
      var siguienteNumero = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
      if (siguienteNumero <= numero) {
        secuencia.push(siguienteNumero);
      } else {
        break;
      }
    }
  
    return secuencia;
  }
  
  var numero = parseInt(prompt('Ingresa un número:'));
  var secuenciaFibonacci = generarSecuenciaFibonacci(numero);
  
  alert('La secuencia de Fibonacci hasta ' + numero + ' es: ' + secuenciaFibonacci.join(', '));
  