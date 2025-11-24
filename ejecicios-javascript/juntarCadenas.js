const formJuntarCadenas = document.querySelector("#form-juntarCadenas");
formJuntarCadenas.addEventListener("submit", function (event) {
  event.preventDefault();
  const texto1 = document.getElementById("texto1").value;
  const texto2 = document.getElementById("texto2").value;
  
  let mensaje = "";
  if(texto1.length > texto2.length){
    mensaje = texto2 + texto1 + texto2 ;
  }
  if(texto1.length < texto2.length){
    mensaje = texto1 + texto2 + texto1 ;
  }
  alert(`Texto combinadoooo: ${mensaje}`);
});