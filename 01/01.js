/*
Escreva um script JavaScript que manipula arrays e faz uso de métodos comuns de arrays.
 1. Crie um array chamado numbers com os valores [10, 20, 30, 40, 50].
 2. Use o método .push() para adicionar o número 60 ao final do array e imprima o array atualizado no
 console.
 3. Utilize o método .pop() para remover o último elemento do array e imprima o resultado no console.
 4. Use o método .indexOf() para encontrar a posição do número 30 e imprima essa posição no console.
*/

let numbers= [10,20,30,40,50];

numbers.push(60);
console.log("'numbers' após a inclusão:"+numbers);

numbers.pop();
console.log("'numbers' após a exclusão:"+numbers);

console.log(`A posição do número 30 é:${numbers.indexOf(30)}`);