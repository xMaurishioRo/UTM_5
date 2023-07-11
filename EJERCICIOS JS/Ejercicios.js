// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var edad = prompt("Ingresa tu edad:");

// if (parseInt(edad) >= 18) {
//   alert("Ya puedes conducir");
// }
// else{
//     alert("No puedes conducir eres menor de edad :)");
// }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var nota = prompt("Ingresa una nota (número): ");

// if (isNaN(parseInt(nota))) {
//     alert("Solo se permiten valores numéricos");
//   } else {
//     var valorNota = parseInt(nota);
    
//     if (valorNota === 0 || valorNota === 1 || valorNota === 2 || valorNota === 3) {
//       alert("Muy deficiente");
//     } else if (valorNota === 4 || valorNota === 5) {
//       alert("Insuficiente");
//     } else if (valorNota === 6 || valorNota === 7) {
//       alert("Suficiente");
//     } else if (valorNota === 8) {
//       alert("Notable");
//     } else if (valorNota === 9 || valorNota === 10) {
//       alert("Sobresaliente");
//     } else {
//       alert("Valor de nota no válido");
//     }
//   }
  
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// var cadenas = [];

// while(true){
//     var text = prompt("Ingresa un texto: ");
//     if(text === null){
//         break;
//     }
//     cadenas.push(text);
// }

// var print = cadenas.join("-");
// alert("texto en forma de cadenas: " + print);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// while (true) {
//     var numeroStr = prompt("Ingresa el número de DNI:");
  
//     if (numeroStr === null) {
//       break;
//     }
  
//     var numero = parseInt(numeroStr);
  
//     if (isNaN(numero)) {
//       alert("El valor ingresado no es un número válido. Por favor, intenta nuevamente.");
//       continue;
//     }
  
//     if (numero < 0 || numero > 99999999) {
//       alert("El número de DNI debe estar entre 0 y 99999999. Por favor, intenta nuevamente.");
//       continue;
//     }
  
//     var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
//     var indice = numero % 23;
//     var letra = letras.charAt(indice);
  
//     alert("La letra correspondiente al número de DNI " + numero + " es: " + letra);
//   }
  
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  
  