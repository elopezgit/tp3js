// Crear un array para almacenar el número de apariciones de cada suma
const resultados = [];

// Función para lanzar dos dados y sumar sus resultados
function lanzarDados() {
    const dado1 = Math.floor(Math.random() * 6) + 1; // Generar un número aleatorio entre 1 y 6 para el primer dado
    const dado2 = Math.floor(Math.random() * 6) + 1; // Generar un número aleatorio entre 1 y 6 para el segundo dado
    return dado1 + dado2; // Devolver la suma de los resultados de los dos dados
}

// Realizar 50 lanzamientos de dados
for (let i = 0; i < 50; i++) {
    let suma = lanzarDados(); // Lanzar los dados y obtener la suma
    if (resultados[suma] === undefined) {
        resultados[suma] = 1; // Si es la primera aparición de esta suma, inicializar el contador en 1
    } else {
        resultados[suma]++; // Incrementar el contador de apariciones de esta suma
    }
}

// Mostrar los resultados de los lanzamientos 
document.write("<h2>SUMA  -- APARICIONES</h2>");
document.write("<ul>");
for (let j = 2; j <= 12; j++) {
    document.write("<li>" + j + " - " + (resultados[j] || 0) + "</li>"); // Si no hubo apariciones de la suma, mostrar 0
}
document.write("</ul>");
