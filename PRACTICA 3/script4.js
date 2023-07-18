function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var rangoMin = parseInt(prompt('Ingresa el valor mínimo del rango:'));
  var rangoMax = parseInt(prompt('Ingresa el valor máximo del rango:'));
  
  var numeroAleatorio = generarNumeroAleatorio(rangoMin, rangoMax);
  
  alert('El número aleatorio dentro del rango ' + rangoMin + ' - ' + rangoMax + ' es: ' + numeroAleatorio);
  