/*
Crie um script JavaScript que utilize loops para realizar operações repetitivas e manipulação de strings.
 1. Crie uma variável phrase com o valor "JavaScript is fun!".
 2. Use um loop for para imprimir cada caractere de phrase individualmente no console.
 3. Crie uma variável counter para contar quantas vezes a letra 'a' aparece em phrase e imprima esse valor
 ao final do loop.
 4. Utilize um loop while que imprime números de 1 a 10 no console.
*/
var phrase= "JavaScript is fun!";
var counter=0;
for(let i=0;i<phrase.length;i++){
    console.log(phrase[i]);
    if(phrase[i]=='a'){
        counter++;
    }
}
console.log(`Quantidade de letras 'a' na palavra: ${counter}\n`);

var numero=1;
while(numero<=10){
    console.log(`Número:${numero}`);
    numero++;
}