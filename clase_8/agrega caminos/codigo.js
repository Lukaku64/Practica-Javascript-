let edad = prompt("Ingrese su edad");

if (edad < 0) {
  console.log("Error, su edad no es valida");
} else if (edad >= 21) {
  alert("Welcome!, felicitaciones por la mayoria de edad.");
  if (edad % 2 !== 0) {
    alert("¿Sabias que tu edad es impar?");
  }
}
