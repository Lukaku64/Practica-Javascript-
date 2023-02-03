let valo = parseInt(
  prompt(
    "Valora la pelicula con 1 = Muy Mala, 2 = Mala, 3 = Mediocre, 4 = Buena y 5 = Muy Buena"
  )
);

switch (valo) {
  case 1:
    alert("Calificaste la pelicula como Muy Mala, lo lamentamos muchos");
    break;
  case 2:
    alert("Calificaste la pelicula como Mala, lo sentimos");
    break;
  case 3:
    alert("Calificaste la pelicula como Mediocre, Mejoraremos");
    break;
  case 4:
    alert("Calificaste la pelicula como Buena, dinos que nos falto");
    break;
  case 5:
    alert("Calificaste la pelicula como Muy Buena, te agradecemos");
    break;
  default:
    alert("Pero espicifica algo por lo menos!!");
}
