/*
 Explore o conceito de escopo em JavaScript com variáveis declaradas em diferentes blocos.
 1. Declare uma variável x com o valor 100 no escopo global.
 2. Dentro de uma função chamada testScope, declare uma variável x com o valor 50 e imprima-a no
 console.
 3. Crie um bloco if dentro da função e declare uma variável x com o valor 30, e imprima-a no console.
 4. Chame a função testScope e, em seguida, imprima o valor de x fora da função para verificar o escopo
 das variáveis.
*/
var x=100;

function testScope(){
    let x=50;
    console.log(x);

    if(x=30){
        console.log(x);
    }
}

testScope();

console.log(`O valor de x fora do escopo da função ${x}`);
