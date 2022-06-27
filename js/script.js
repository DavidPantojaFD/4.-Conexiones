var conexion500 = 500;
var conexion2 = 2;

var user500 = document.querySelector(".circulo500 h2")
var user2= document.querySelector(".circulo2 h2")

function cambiarnombre(){
    var nombreusuario = document.querySelector(".username")
    nombreusuario.innerText = "David Pantoja"
}

function eliminarelementomas(user){
    conexion500++;
    conexion2--;
    var usuario = "#usuario" + user;
    var usuariodoc= document.querySelector(usuario);
    usuariodoc.remove();
    user500.innerText= (conexion500);
    user2.innerText= conexion2;
}

function eliminarelementomenos(user){
    conexion2--;
    var usuario = "#usuario" + user;
    var usuariodoc= document.querySelector(usuario);
    usuariodoc.remove();
    user2.innerText=conexion2;
}