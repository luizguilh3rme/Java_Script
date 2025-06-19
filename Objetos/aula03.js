//Estudo de classes

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos, nasci no ano de ${this.anoDeNascimento}`);
    }
}

const guilherme = new Pessoa ('Guilherme', 20);
const geovani = new Pessoa ('Geovani', 18);

guilherme.descrever();
geovani.descrever();