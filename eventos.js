document.getElementById("boton-saluda").addEventListener("click", function() {
    event.stopPropagation();
    alert("Hola!");
});

document.getElementById("div-saluda").addEventListener("click", function() {
    alert("Hola! Soy el div.");
});