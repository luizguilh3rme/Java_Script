class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'baixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade grave';
        }
    }

}

const jose = new Pessoa('José', 100, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());

const guilherme = new Pessoa('Guilherme', 69, 1.75);
console.log(guilherme.calcularImc());
console.log(guilherme.classificarImc());