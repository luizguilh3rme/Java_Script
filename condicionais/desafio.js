//Desafio para calcular valor gasto em uma viagem

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const TipoCombustivel = 'Gasolina'
const KmPorLitros = 10;
const DistanciaKmViagem = 100;

const valorViagemGasolina = (DistanciaKmViagem / KmPorLitros) * precoGasolina;

const valorViagemEtanol = (DistanciaKmViagem / KmPorLitros) * precoEtanol;

if (TipoCombustivel === 'Gasolina') {
    console.log(valorViagemGasolina.toFixed(2));
} else if (TipoCombustivel === 'Etanol') {
    console.log(valorViagemEtanol.toFixed(2))
} else {
    console.log('Insira um tipo de combustível válido / Gasolina ou Etanol');
}

//obs: alt+shift+F para formatar o codigo