var names = ["Uziel", "Arath", "Anthony", "Geovany", "Angel", "Obrian", "Vald", "David", "Christian", "Lizandro", "Isaias", "Jonathan", "Hugo", "Diego"];
var names2 = ["Uziel", "Arath", "Anthony", "Geovany", "Angel", "Obrian", "Vald", "David", "Christian", "Lizandro", "Isaias", "Jonathan", "Hugo", "Diego"];
var lastname = ["Mauricio", "Rodriguez", "Puc", "Balam", "Cetina", "Roca", "Misael", "Guerrero", "Padron"];
var lastname2 = ["Mauricio", "Rodriguez", "Puc", "Balam", "Cetina", "Roca", "Misael", "Guerrero", "Padron"];

function generarNombre() {
    var nombreAleatorio = names[Math.floor(Math.random() * names.length)];
    var nombreAleatorio2 = names2[Math.floor(Math.random() * names2.length)];
    var apellidoAleatorio = lastname[Math.floor(Math.random() * lastname.length)];
    var apellidoAleatorio2 = lastname2[Math.floor(Math.random() * lastname2.length)];
    var nombreCompleto = nombreAleatorio + " " + nombreAleatorio2 + " " + apellidoAleatorio + " " + apellidoAleatorio2;


    // Mostrar el nombre en algún elemento HTML
    document.getElementById("nombre-generado").innerHTML = nombreCompleto;
  }

