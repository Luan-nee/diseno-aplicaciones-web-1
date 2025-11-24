const formDeterminarNumero = document.querySelector("#form-determinarNumero");
formDeterminarNumero.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const numero = parseInt(document.getElementById("numero").value);
  if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
    return;
  }
  if (numero > 0) {
    alert("El número es POSITIVO.");
  } else if (numero < 0) {
    alert("El número es NEGATIVO.");
  } else {
    alert("El número es CERO.");
  }
});