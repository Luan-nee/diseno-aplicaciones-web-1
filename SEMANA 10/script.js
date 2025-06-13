// Declarar variables
let name = "Juan";      // String
const edad = 25;          // Number (const no cambia)
let esEstudiante = true;  // Boolean

// Mostrar en consola
console.log(name, edad, esEstudiante);

let suma = 5 + 3;         // 8
let resta = 10 - 2;       // 8
let producto = 4 * 2;     // 8
let division = 16 / 2;    // 8
let modulo = 9 % 2;       // 1 (resto)

// Condicional if-else
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Bucle for
for (let i = 0; i < 3; i++) {
  console.log("Iteración:", i);
}

function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

console.log(saludar("Ana"));

let frutas = ["manzana", "banana", "uva"];
console.log(frutas[0]); // manzana

frutas.push("naranja"); // Agrega al final
console.log(frutas.length); // 4

let persona = {
  nombre: "Luis",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

persona.saludar();

let texto = "JavaScript es genial";
console.log(texto.toUpperCase()); // JAVASCRIPT ES GENIAL

let numeros = [1, 2, 3];
let dobles = numeros.map(n => n * 2); // [2, 4, 6]


let nombre = prompt("¿Cómo te llamas?");
alert("Hola, " + nombre + "!");