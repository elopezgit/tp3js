// Definir la función para calcular el perímetro de un rectángulo
function calcularPerimetro(ladoA, ladoB) {
    let perimetro = 2 * (ladoA + ladoB);
    return perimetro;
}

// Solicitar al usuario que ingrese el valor de los lados del rectángulo
let ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
let ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));

// Calcular el perímetro del rectángulo utilizando la función
let perimetro = calcularPerimetro(ladoA, ladoB);

// Mostrar el resultado por pantalla
document.write("<p>El perímetro del rectángulo con lado A = " + ladoA + " y lado B = " + ladoB + " es: " + perimetro + "</p>");
