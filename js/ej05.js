// Definir la función para determinar información sobre una cadena de texto
function analizarCadena(cadena) {
    let esSoloMayusculas = /^[A-Z]+$/.test(cadena);
    let esSoloMinusculas = /^[a-z]+$/.test(cadena);

    if (esSoloMayusculas) {
        document.write("La cadena '" + cadena + "' está formada solo por mayúsculas.");
    } else if (esSoloMinusculas) {
        document.write("La cadena '" + cadena + "' está formada solo por minúsculas.");
    } else {
        document.write("La cadena '" + cadena + "' es una mezcla de mayúsculas y minúsculas.");
    }
}

// Solicitar al usuario que ingrese una cadena de texto usando prompt
let cadena = prompt("Ingrese una cadena de texto:");

// Llamar a la función para analizar la cadena ingresada por el usuario
analizarCadena(cadena);