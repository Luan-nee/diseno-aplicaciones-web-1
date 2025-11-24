const formDatosUsuarios = document.querySelector("#form-datosUsuarios");
formDatosUsuarios.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
  console.log("Edad:", edad);
  alert(`Hola ${nombre} ${apellido}, tienes ${edad} años.`)
});
