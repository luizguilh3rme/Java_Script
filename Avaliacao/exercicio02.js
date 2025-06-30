//Encontrando o maior numero Par e Impar em uma lista

const { gets, print } = require('./funcoes-auxiliares-ex2');

const listanumeros = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < listanumeros; i++) {
    const numero = gets();

    //Encontrando maior numero Par
    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        } 

        //Encontrando menor numero Impar
    } else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        } 
    }
}

print(`Maior número par: ${maiorPar}`);
print(`Menor número impar: ${menorImpar}`);

