// 1- Crear un array llamado meses y que almacene el nombre de 
// los doce meses del año. Mostrar por pantalla 
// en forma de lista los doce nombres del arreglo.

// Output:
// . enero 
// .febero


const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Mostrar por pantalla en forma de lista los doce nombres del arreglo usando console.log
for (var i = 0; i < meses.length; i++) {
    console.log(". " + meses[i]);
}

// Mostrar por pantalla en forma de lista los doce nombres del arreglo usando document.write
document.write("<ul>");
for (var i = 0; i < meses.length; i++) {
    document.write("<li>" + meses[i] + "</li>");
}
document.write("</ul>");
