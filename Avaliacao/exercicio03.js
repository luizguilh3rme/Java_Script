//Calculando o valor de um salario de acordo com seus imposto e beneficios

const { gets, print } = require('./funcoes-auxiliares-ex3')

// Pegando o valor salario bruto e valor beneficios 
const SalarioBruto = gets()
const valorbeneficios = gets()

// Função para calcular a porcentagem do imposto
function calcularPercentualImposto(valor, percentual) {
    return valor * (percentual / 100);
}

// Função para pegar a porcentagem do imposto, ex: 5%, 10% ou 15%
function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5; // =5%
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10; // =10%
    } else {
        return 15; // =15%
    }
}

// Pegando qual seria a  porcentagem
const AliquotaImposto = pegarAliquota(SalarioBruto);

// Pegando o valor do salario bruto - a porcentagem
const valorImposto = calcularPercentualImposto(SalarioBruto, AliquotaImposto);

// Para achar o valor final do salario é o valor do salario bruto - a porcentagem do imposto + valor beneficios
const valorParaSerTransferido = SalarioBruto - valorImposto + valorbeneficios;


print(valorParaSerTransferido);