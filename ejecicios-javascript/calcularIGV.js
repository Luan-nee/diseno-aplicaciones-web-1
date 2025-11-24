const formCalcularIGV = document.querySelector("#form-calcularIGV");
formCalcularIGV.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const monto = parseFloat(document.getElementById("monto").value);
  if (isNaN(monto)) {
    alert("Por favor, ingresa un monto válido.");
    return;
  }
  const igv = monto * 0.18;
  alert(`Monto ${monto} + IGV ${igv} = Total ${monto + igv}`);
});