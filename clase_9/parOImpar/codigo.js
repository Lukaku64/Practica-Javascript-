let preg;
while (
  (preg = prompt("Ingrese un Numero Real y te Digo si es Par o Impar")) &&
  preg >= 1
) {
  if (preg % 2 == 0) {
    alert("Tu numero es Par");
  } else if (preg % 3 == 0) {
    alert("Tu numero es Impar");
  }
}

// Onda Math.floor es como redondean los programadores, en cambio
// Math.ceil redondea como si fueras un Fisico

let pregu;
while (
  (pregu = Math.floor(
    prompt("Ingrese un Numero Real y te Digo si es Par o Impar")
  )) &&
  pregu >= 1
) {
  if (pregu % 2 == 0) {
    alert("Tu numero es Par");
  } else if (pregu % 3 == 0) {
    alert("Tu numero es Impar");
  }
}
