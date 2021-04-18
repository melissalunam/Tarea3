$("#btnSend").click(function () {

var parameters = {};
<<<<<<< HEAD
parameters.nombre = $("#nombre").val();
=======
parameters.names = $("#nombre").val();
>>>>>>> dbb3ab2ee4979b457300a383b6359b2624bdd7d4
parameters.numero_tarjeta = $("#numero de tarjeta").val();
parameters.fecha_expiracion = $("#fecha de expiracion").val();
parameters.cvv = $("#cvv").val();

        $.ajax({
            type: "POST",
            contentType: 'application/json; charset=utf-8',
<<<<<<< HEAD
            url: "confirmar.html",
=======
            url: "/",
>>>>>>> dbb3ab2ee4979b457300a383b6359b2624bdd7d4
            data: JSON.stringify(parameters),
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
                //alert(xhr.status + " " + thrownError);
            }
        });

});