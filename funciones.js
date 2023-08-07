window.addEventListener('load', inicio);

function inicio(){
   const boton = document.querySelector("button");
   boton.onclick = saludar;
}

function saludar(){
    alert('Hola!');
}