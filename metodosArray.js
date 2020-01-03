let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c'];

// Concatenação
let arrayFinal = array1.concat(array2);

// Every
let everyArray = arrayFinal.every(
  function verificarElementos(elemento, indice, objeto){
    return(typeof elemento === 'number');
  }
)

//
console.log(arrayFinal);
console.log(everyArray);