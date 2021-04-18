$("#btnSend").click(function () {

var parameters = {};
parameters.names = $("#nombre").val();
parameters.numero_tarjeta = $("#numero de tarjeta").val();
parameters.fecha_expiracion = $("#fecha de expiracion").val();
parameters.cvv = $("#cvv").val();

        $.ajax({
            type: "POST",
            contentType: 'application/json; charset=utf-8',
            url: "/",
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