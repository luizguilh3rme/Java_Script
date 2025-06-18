// Calculando Desconto e Juros com funções
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}

const precoOriginal = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
    console.log(aplicarDesconto(precoOriginal, 10));
} else if (formaPagamento === 2){
    console.log(aplicarDesconto(precoOriginal, 15));
} else if (formaPagamento === 3){
    console.log(precoOriginal);
} else{
    console.log(aplicarJuros(precoOriginal, 10));
}