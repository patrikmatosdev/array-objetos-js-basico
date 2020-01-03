# O que é um Array ?

- O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

> ## Criando um ARRAY

````javascript
// indice =>   [0]      [1]      [2]
let frutas = ['Maçã', 'Banana', 'Melão'];
console.log(frutas.length);
````
- o Length serve para contar quantos indices tem um ARRAY.

> ## Acessando um Item Pelo Indice

- Cada coluna tem o seu indice.
- O indice [0], tem sempre o valor da primeira coluna.

```javascript
  console.log(frutas[0]);
```

> ## Adicionando um Novo Valor

````javascript
  //             [0]      [1]       [2]
  let frutas = ['Maçã', 'Banana', 'Melão']

  furtas[3] = 'uva';
````

> ## Adicionando um Objeto

````javascript
  // indice =>      [0]     [1]      [2]
  let meuArray = ['Patrik', 22, {cidade:'São Paulo'}]

  console.log(meuArray[2].cidade);
````

# Métodos de Arrays 

>## Concatenação

-
```javascript
  let array1 = [1, 2, 3, 4, 5];
  let array2 = ['a', 'b', 'c'];

  let arrayFinal = array1.concat(array2);

  console.log(arrayFinal);
```
>## Every

- O método every percorre todo o array, no caso o arrayFinal, para verificação do tipo do Elemento.

- Os Elementos estao sendo comparado se o tipo do array esta dando valor como 'number', sendo assim irá retornar false.

````javascript

  let everyArray = arrayFinal.every(
    function verificarElementos(elemento,       indice, objeto){
        return(typeof elemento === 'number');
    }
  )

console.log(arrayFinal);
console.log(everyArray);

````
