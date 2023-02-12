// En este ejercicio deberás crear la Función isUniform que tome un Arreglo como Parámetro y devuelva true si todos los elementos del Arreglo son idénticos.
// De lo contrario, deberá devolver false.
// ⚠️ Importante: Salvo que sea necesario, tu Función no debe recorrer todo el Arreglo si no es idéntico. Es decir, al momento que encuentre una diferencia deberá cortar.
// Usá este código para testear tu solución:

const isUniform = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] != arr[i]) {
      return false;
    }
  }
  return true;
};
//El ejercico ya esta, tengo un problema que no puedo corroborar si estan bien con codeRunner y con "node", pero en la web si se ejecuta

// function isUniform(array) {
//   return array.every((element) => element === array[0]);
// }

isUniform([1, 1, 1, 1]); // true
isUniform([1, 2, 1, 1]); // false
isUniform(["a", "b", "p"]); // false
isUniform(["b", "b", "b"]); // true
isUniform([2, 2, 2, 2]);
isUniform([2, 2, 3, 4]);
