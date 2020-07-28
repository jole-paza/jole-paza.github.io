var nombre = document.getElementById("txtNombreCompleto");
var cedula = document.getElementById("txtNumeroCedula");
 var fecha = document.getElementById("DtFecha");
var ciudad =  document.getElementById("txtCiudad");
 var seleccionar = document.getElementById("Seleccion");
 var btnEnviar = document.getElementById("validar");




 
btnEnviar.addEventListener ('submit', function(event){
    event.preventDefault();
    SolicitarTurno();
    
  
    
    });
    

function SolicitarTurno() {
    if (nombre.value === null || nombre.value === "")
    {
       alert("El campo Nombres esta vacio");
        return false;
    }
    if (cedula.value === null || cedula.value === "")
     {
        alert("El campo Cedula esta vacio");
        return false;
     } 
    if (fecha.value === null || fecha.value === "")
    {
        alert("Debes escoger una fecha");
        return false;
    } 
    if (ciudad.value === null || ciudad.value === "")
    {
        alert("El campo Ciudad esta vacio");
        return false;
    } 
    if (seleccionar.value === null || seleccionar.value === "")
    {
        alert("Debes Eligir el proceso a realizar");
        return false;
    } 
    else{
        alert("Solicitud Enviada Correctamente");
        LimpiarDatos();
    
    }  
    
}





function LimpiarDatos() {
    document.getElementById("txtNombreCompleto").value = "";
    document.getElementById("txtNumeroCedula").value="";
   document.getElementById("DtFecha").value="";
   document.getElementById("txtCiudad").value= "";
   document.getElementById("Seleccion").value="";
    
}




