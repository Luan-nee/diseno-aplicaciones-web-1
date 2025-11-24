const formCalcularTriangulos = document.querySelector("#form-calcularTriangulos");
formCalcularTriangulos.addEventListener("submit", function (event) {
  event.preventDefault();
  const baseTrianguloA = parseFloat(document.getElementById("base-triangulo-a").value);
  const alturaTrianguloA = parseFloat(document.getElementById("altura-triangulo-a").value);
  const baseTrianguloB = parseFloat(document.getElementById("base-triangulo-b").value);
  const alturaTrianguloB = parseFloat(document.getElementById("altura-triangulo-b").value);
  const areaTrianguloA = (baseTrianguloA * alturaTrianguloA) / 2;
  const areaTrianguloB = (baseTrianguloB * alturaTrianguloB) / 2;
  
  mensaje = "Área del triangulo A: " + areaTrianguloA + "\n" + "Área del triangulo B: " + areaTrianguloB + "\n";

  if (areaTrianguloA > areaTrianguloB) {
    mansaje = mensaje + `Mayor área: A \nDiferencia: ${areaTrianguloA - areaTrianguloB}`
  } else if (areaTrianguloB > areaTrianguloA) {
    mansaje = mensaje + `Mayor área: B \nDiferencia: ${areaTrianguloB - areaTrianguloA}`
  } else {
    mansaje = mensaje + `Mayor área: nadie \nDiferencia: 0`;
  }

  alert(mansaje);
});