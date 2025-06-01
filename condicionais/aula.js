//Bolean
const camisetaAzul = true;
const camisetaVerde = false;

//teste para ver se o numero é par, utiliza o "is" no inicio de uma Bolean
const numero = 10;
const isNumeroPar = (numero % 2) === 0;

if (isNumeroPar){
    console.log('Numero par');
}
else{
    console.log('Numero impar')
}


//teste para ver se o numero é divisivel por 5, utiliza o "is" no inicio de uma Bolean
const numero_5 = 0;
const isNumeroDivisivelPor5 = (numero_5 % 5) === 0;

if (numero_5 === 0){
    console.log('Número inválido')
} else if (isNumeroDivisivelPor5){
    console.log('Sim');
} else{
    console.log('Não')
}
