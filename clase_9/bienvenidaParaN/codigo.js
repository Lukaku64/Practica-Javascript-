// el siguiente codigo puede ser la resolucion al ejercicio
// este codigo fue sacado de la IA ChatGPT
for (let i = 1; i <= 5; i++) {
  let message = "¡Bienvenido, " + i + "! ";
  if (i > 1) {
    message += "Te presento a ";
    for (let j = 1; j < i; j++) {
      message += j + ", ";
    }
    message = message.substring(0, message.length - 2); // elimina la última coma y espacio
  }
  console.log(message);
}

for (let i = 1; i <= 5; i++) {
  let message = "¡Bienvenido, " + i + "! ";

  if (i > 1) {
    message += "Te presento a ";
    for (let j = 1; j < i; j++) {
      message += j;
      if (j < i - 1) {
        message += ", ";
      } else if (j == i - 1) {
        message += " y ";
      }
    }
  }

  console.log(message);
}
