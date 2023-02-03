let word = prompt(
  "Elige una palabra casa, perro, pelota, arbol o genio, y te lo traduzco al Ingles "
);

switch (word) {
  case "casa":
    alert("House");
    break;
  case "perro":
    alert("Dog");
    break;
  case "pelota":
    alert("Ball");
    break;
  case "arbol":
    alert("Tree");
    break;
  case "genio":
    alert("Genius");
    break;
  default:
    alert("Pero elegi los que te di");
}
