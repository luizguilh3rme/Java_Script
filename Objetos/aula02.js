const pessoa = {
    nome: 'Guilherme',
    idade: 20,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

console.log(pessoa['nome']); //puxando nome pelo atributo "nome"
console.log(pessoa['idade'] = '17'); //editando atributo "idade"