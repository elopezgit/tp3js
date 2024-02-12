// Definir la función para determinar si un número es par o impar
function determinarParidad(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

// Solicitar al usuario que ingrese un número usando prompt
let numero = prompt("Ingrese un número entero:");

// Convertir el valor ingresado a un número entero
numero = parseInt(numero);

// Obtener el resultado utilizando la función
let resultado = determinarParidad(numero);

// Mostrar el resultado en el documento HTML usando document.write
document.write("<h2>" + resultado + "</h2>");
