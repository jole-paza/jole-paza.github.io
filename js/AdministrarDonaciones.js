function alert1 () {
    alert ("La solicutud ha sido aceptada");
    }
function alert2 () {
    var mensaje = confirm("¿Estas seguro de rechazar la solicitud?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
    alert("Solicitud Rechazada");
    }
    //Detectamos si el usuario denegó el mensaje
    else {
    alert("No se rechazo la solicitud");
    }
 }
function alert3(){
    var fecha = prompt("Ingresa la nueva fecha", "");
    var hora = prompt("ingresa la hora", "");
//Detectamos si el usuario ingreso un valor
if (fecha && hora!= null){
alert("La fecha y hora se han modificado al " + fecha +""+hora);
}
//Detectamos si el usuario NO ingreso un valor
else {
alert("No has ingresado los datos");
}
    
}
