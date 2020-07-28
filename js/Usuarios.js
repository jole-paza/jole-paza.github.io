const  Usuarionav = document.getElementById('usernav');
const  CerrarSesion = document.getElementById('close');

let NombreUsuario = JSON.parse(localStorage.getItem('NombreUser'));
console.log(NombreUsuario);

CerrarSesion.addEventListener('click', function(){
    localStorage.clear(NombreUsuario);
    location.href='IniciarSesion.html';
});