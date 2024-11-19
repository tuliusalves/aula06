/*
 Escreva um script JavaScript que utiliza condicionais para verificar e imprimir mensagens baseadas em valores.
 1. Crie uma variável temperature com um valor numérico à sua escolha.
 2. Escreva uma estrutura condicional if-else que imprime "Está quente!" se a temperature for maior que
 30 e "Está frio!" se for menor ou igual a 30.
 3. Adicione uma condição extra para imprimir "Está muito quente!" se a temperature for maior que 40.
*/
var temperature = 30;

if(temperature>30 && temperature<=40){
    console.log(`${temperature}°. Está quente!`);
}
else if(temperature<=30){
    console.log(`${temperature}°. Está frio!`);
}else if(temperature>40){
    console.log(`${temperature}°. Está muito quente!`);

}