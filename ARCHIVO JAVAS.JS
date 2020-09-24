// JavaScript Document

function ejecuta (){
    document.getElementsByTagName("p")[0].onclick=saludo;
}
function saludo() {
alert("HOLA QUE HAY DE NUEVO");
}
window.onload=ejecuta;