function esPalindromo(palabra) {
    palabra = palabra.replace(/\s/g, '').toLowerCase();
    
    let invertida = palabra.split('').reverse().join('');
    
    if (palabra === invertida) {
      return true;
    } else {
      return false;
    }
  }
  
  let palabra = prompt('Ingresa algo:');
  let resultado = esPalindromo(palabra);
  
  if (resultado) {
    alert('La palabra es un palíndromo.');
  } else {
    alert('La palabra no es un palíndromo.');
  }
  