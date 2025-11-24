const formCalcularMontoEquitativo = document.querySelector("#form-calcularMontoEquitativo");
formCalcularMontoEquitativo.addEventListener("submit", function (event) {
  event.preventDefault();
  const precio = parseFloat(document.getElementById("precio").value);
  if (isNaN(precio)) {
    alert("Por favor, ingresa un monto válido.");
    return;
  }
  const montoEquitativo = precio / 3;
  alert(`Cada amigo debe pagar: ${montoEquitativo}`);
});