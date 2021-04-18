<<<<<<< HEAD
var url_string = window.location.href; //
var url = new URL(url_string);
var nombre = url.searchParams.get("nombre");
var nombre = url.searchParams.get("numero de tarjeta");
var nombre = url.searchParams.get("fecha de expiracion");
var nombre = url.searchParams.get("cvv");
document.getElementById("nombre").value = nombre;
document.getElementById("numero de tarjeta").value = numero_tarjeta;
document.getElementById("fecha de expiracion").value = fecha_expiracion;
document.getElementById("cvv").value = cvv;
=======
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
>>>>>>> dbb3ab2ee4979b457300a383b6359b2624bdd7d4
