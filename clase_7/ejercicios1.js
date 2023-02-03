let miEdad = parseInt(prompt("Dime tu edad"));
const maxEdad = parseInt(prompt("Tu esperanza de vida"));
const MiniTorta = 1 * 365;
let snackLife = maxEdad - miEdad;
let snackLife0 = MiniTorta * snackLife;
alert(
  "Necesitaras " +
    snackLife0 +
    " MiniTortas para que te alcancen hasta los " +
    maxEdad +
    " años"
);
