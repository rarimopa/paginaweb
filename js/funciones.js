function ValidarFormulario()
{
    var Nombre = document.getElementById('Nombre').value;
    var Email = document.getElementById('Email').value;
    var Mensaje = document.getElementById('Mensaje').value;

    if(Nombre == "" || Email == "" || Mensaje == "")
    {
        alert("Debe escribir algo en los campos!");
    }
    else
    {
        alert("Bien hecho! Datos correctos..");
    }

    //Limpiando los campos
    document.getElementById('Nombre').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Mensaje').value = '';
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