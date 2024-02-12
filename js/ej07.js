// Definir una función para crear y mostrar la tabla de multiplicar
function tablaMultiplicar(numero) {
    document.write("<h2>Tabla de multiplicar del " + numero + ":</h2>");
    document.write("<ul>");
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        document.write("<li>" + numero + " x " + i + " = " + resultado + "</li>");
    }
    document.write("</ul>");
}

// Solicitar al usuario que ingrese un número usando prompt
let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

// Validar si el valor ingresado es un número
if (!isNaN(numero)) {
    // Llamar a la función para mostrar la tabla de multiplicar
    tablaMultiplicar(numero);
} else {
    // Mostrar un mensaje de error si el valor ingresado no es un número
    document.write("<p>Debe ingresar un número válido.</p>");
}
