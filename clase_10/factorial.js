// En este ejercico deberas crear una Funcion factorial que reciba un numero y devuelva el factorial de ese numero. 
//Por ejemplo, si hacemos factorial(5) la Funcion deberá devolver el resultado de 120
//Indicaciones:
// - Debera hacer una Variable para almacenar el resultado.
// - Deberás usar un Loop hasta alcanzar el numero que recibis como input.
// - En cada vuelta del loop deberas actualizar el resultado para no caer en un Loop Infinito.
// - En caso de que el usuario ingrese 0 o un numero negativo, deberas generar acciones compatibles con la definicion del Factorial de un Numero.


//Caso recusivo de factorial 
// const factorial = n => {
//     if(n <= 1 ) return 1
//     return n * factorial(n-1)
// }


const factorialLoop = n => {
    let resultado = 1
    for (i = 1; i <= n ; i++){
        resultado*=i
    }
    console.log(resultado);
}

factorialLoop(5)