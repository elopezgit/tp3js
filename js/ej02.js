// Declarar un array vacío para almacenar las ciudades
const ciudades = [];

// Solicitar al usuario el ingreso de ciudades mediante prompt
while (true) {
    let ciudad = prompt("Ingrese el nombre de una ciudad:");
    if (ciudad === null) {
        break; // Si el usuario selecciona cancelar, salir del bucle
    }
    ciudades.push(ciudad); // Agregar la ciudad al array
}

// Mostrar la longitud del arreglo
console.log("El arreglo de ciudades tiene " + ciudades.length + " elementos");

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write("<p>+ Elemento 1ra posición: " + ciudades[0] + "</p>");
document.write("<p>+ Elemento 3ra posición: " + ciudades[2] + "</p>");
document.write("<p>+ Elemento última posición: " + ciudades[ciudades.length - 1] + "</p>");

// Añadir en última posición la ciudad de París
ciudades.push("París");

// Escribir por pantalla el elemento que ocupa la segunda posición
document.write("<p>+ Elemento 2da posición: " + ciudades[1] + "</p>");

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = "Barcelona";

// Mostrar el arreglo de ciudades en el documento web
document.write("<p>Arreglo de ciudades</p>");
document.write("<ul>");
for (var i = 0; i < ciudades.length; i++) {
    document.write("<li>Elemento: " + ciudades[i] + "</li>");
}
document.write("</ul>");
