let diasViaje = 14;
let presupuestoMax = 130000;
let comida = 56;
let comidaPresupuesto = Math.round(presupuestoMax / comida);
alert(
  "Podras gastar $" +
    comidaPresupuesto +
    " en cada comida para que te alcance la plata durante los " +
    diasViaje
);
