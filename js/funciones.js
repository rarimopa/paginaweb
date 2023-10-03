function ValidarFormulario()
{
    var Nombre = document.getElementById('Nombre').value;
    var Email = document.getElementById('Email').value;
    var Mensaje = document.getElementById('Mensaje').value;

    if(Nombre == "")
    {
        var Alerta = document.getElementById('alert_nombre').style.display = 'block';
    }
    if(Email == "")
    {
        var Alerta = document.getElementById('alert_email').style.display = 'block';
    }
    if(Mensaje == "")
    {
        var Alerta = document.getElementById('alert_mensaje').style.display = 'block';
    }

    //Ahora lo contrario
    if(Nombre != "")
    {
        var Alerta = document.getElementById('alert_nombre').style.display = 'none';
    }
    if(Email != "")
    {
        var Alerta = document.getElementById('alert_email').style.display = 'none';
    }
    if(Mensaje != "")
    {
        var Alerta = document.getElementById('alert_mensaje').style.display = 'none';
    }
}
function VerFechaHora()
{
    var FechasActual = new Date();
    var Día = FechasActual.getDate();
    var Mes = FechasActual.getMonth();
    var Año = FechasActual.getFullYear();

    var Hora = FechasActual.getHours();
    var Minuto = FechasActual.getMinutes();

    var HoraCompleta = Hora + ":" + Minuto;
    var FechaCompleta = Día + "/" + Mes + "/" + Año;
    alert("Fecha: " + FechaCompleta + " hora: " + HoraCompleta);
}