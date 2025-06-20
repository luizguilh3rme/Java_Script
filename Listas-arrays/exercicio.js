const notas = [];

//Adicionando valores com o método Push
notas.push(8);
notas.push(7);
notas.push(10);
notas.push(8);
notas.push(10);
notas.push(10);


// Calculando a media das notas com a estrutura de repetição "for"
let soma = 0;

for (let i = 0; i < notas.length; i++){
    const nota = notas[i];

    soma = soma + nota;
}

const media = soma / notas.length;

console.log(media);