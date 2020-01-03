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

