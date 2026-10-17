var anio = document.getElementById("anio");
anio.textContent = new Date().getFullYear();

var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var nombre = document.getElementById("nombre").value.trim();
  var correo = document.getElementById("correo").value.trim();
  var mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  alert("Gracias " + nombre + ", tu mensaje se envió.");
  formulario.reset();
});
