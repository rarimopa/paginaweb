function ValidarFormulario()
{
    var Nombre = document.getElementById('Nombre').value;
    var Email = document.getElementById('Email').value;
    var Mensaje = document.getElementById('Mensaje').value;

    if(Nombre == "" || Email == "" || Mensaje == "")
    {
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
    else
    {
        Swal.fire(
            'Bien hecho!',
            'El usuario <b>' + Nombre + '</b> ha sido guardado de manera éxitosa!',
            'success'
          )
         document.getElementById('Nombre').value = '';
         document.getElementById('Email').value = '';
         document.getElementById('Mensaje').value = '';

         //Reiniciando las alertas
         document.getElementById('alert_nombre').style.display = 'none';
         document.getElementById('alert_email').style.display = 'none';
         document.getElementById('alert_mensaje').style.display = 'none';
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
    Swal.fire({
        title: 'Fecha y hora',
        icon: 'info',
        html:
          'Fecha actua: ' + FechaCompleta + " hora: " + HoraCompleta,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        cancelButtonAriaLabel: 'Thumbs down'
      })
}