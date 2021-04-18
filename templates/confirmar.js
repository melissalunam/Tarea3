var time, position, resultados;
var nombre,numero_tarjeta,fecha_expiracion,cvv; // variables Globales

function obtenerDatos(){
 nombre = document.getElementById("nombre").value;
 numero_tarjeta = document.getElementById("numero de tarjeta").value;
 fecha_expiracion = document.getElementById("fecha de expiracion").value;
 cvv = document.getElementById("cvv").value;

    var r = [nombre, numero_tarjeta, fecha_expiracion, cvv];
    return r;
}

var input = document.getElementsByTagName("INPUT");

for (i=0; i<input.length; i++) {
 input[i].addEventListener("change",  function(){
  resultados = obtenerDatos();
  console.log(resultados);
  print(resultados)
 });
};
