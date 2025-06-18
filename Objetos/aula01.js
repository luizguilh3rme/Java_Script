const pessoa = {
    nome: 'Guilherme',
    idade: 20,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

pessoa.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}

//Bom exemplo seria usando o "if" e gerar condições diferentes com a function "descrever"

pessoa.descrever();