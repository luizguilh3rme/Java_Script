const precoOriginal = 100;
const formaPagamento = 1;

if (formaPagamento === 1){
    console.log(precoOriginal - (precoOriginal * 0.1));
} else if (formaPagamento === 2){
    console.log(precoOriginal - (precoOriginal * 0.15));
} else if (formaPagamento === 3){
    console.log(precoOriginal);
} else{
    console.log(precoOriginal + (precoOriginal * 0.1))
}