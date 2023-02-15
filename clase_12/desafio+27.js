// Tenemos un Arreglo de Objetos, donde cada uno representa a una persona. Usando .filter()
// creá un nuevo Arreglo con las personas que tengan más de 27 años.
let personas = [
  { nombre: "Ana", edad: "28" },
  { nombre: "María", edad: "24" },
  { nombre: "José", edad: "31" },
];
let personasConMasDe27 = personas.filter((Element) => {
  if (Element.edad >= 27) {
    return Element;
  }
}); // Codeá la solución
console.log(personasConMasDe27);
// [{ nombre: 'Ana', edad: '28' }, { nombre: 'José', edad: '31' }]
