var usuario = document.getElementById("UsuarioNombre");
var contraseña = document.getElementById("ContraseñaUser");
var btnLogin = document.getElementById("form");
var NombreAdmin, ContraAdmin
NombreAdmin = 'admin';
ContraAdmin = '12345';



btnLogin.addEventListener ('submit', function(event){
    event.preventDefault();
   
     if (usuario.value === NombreAdmin && contraseña.value === ContraAdmin) {
      alert("Inicio de sesion como Administrador exitoso");
      location.href="AdministrarDonaciones.html";
     } 
      else if (usuario.value != NombreAdmin){
        alert("Inicio de sesion exitoso");
        location.href="Inicio.html";
      }
     else {
       alert("Datos Incorrectos al iniciar como Administrador");
     }
    
    });
    
   