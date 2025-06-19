class Carros{
    marca;
    cor;
    gastoMedioCombustivelPorKm;

    //construtor exige que esses atributos sejam obrigatorios ter um valor
    constructor(marca, cor, gastoMedioCombustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioCombustivelPorKm * precoCombustivel;
    }

}

const uno = new Carros ('Fiat', 'Preto', 1/12); //atribuido modelo, cor e gasto de litro por KM
console.log(uno.calcularGastoDePercurso(70,5));

const palio = new Carros ('Fiat', 'Branco', 1/10); //atribuido modelo, cor e gasto de litro por KM
console.log(palio.calcularGastoDePercurso(70,5));