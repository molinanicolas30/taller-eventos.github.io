window.addEventListener('load', inicio);

function inicio(){
   const boton = document.querySelector("button");
   boton.onclick = saludar;
   const elDiv = document.querySelector("div");
   elDiv.onclick = saludar2;
}

function saludar(){
    alert('Hola!');
}

function saludar2(){
    alert("Hola! Soy el div");
}