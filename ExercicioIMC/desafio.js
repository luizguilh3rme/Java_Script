function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}


function classificarImc(IMC) {
if (IMC < 18.5) {
    return 'baixo do peso';
} else if (IMC >= 18.5 && IMC < 25) {
    return 'Peso normal';
} else if (IMC >= 25 && IMC < 30) {
    return 'Acima do peso';
} else if (IMC >= 30 && IMC < 40) {
    return 'Obeso';
}else {
    return 'Obesidade grave';
    } 
}

//Main,  codigo principal
(function (){  //Dessa forma a função é criada e ja se auto executa sem precisar ser chamada novamente 
    const peso = 75;
    const altura = 1.75;
    
    const IMC = calcularImc(peso, altura);
    console.log(classificarImc(IMC));
})();

