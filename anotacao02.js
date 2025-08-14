// Praticando a função "Proto" como se fosse uma extensão para acessar outros objetos
const pessoa = {
    genero:'maculino'
}

const guilherme = {
    nome: 'Guilherme',
    idade: 30,
    __proto__: pessoa
}

console.log(guilherme.genero)

//-----------------------------//

// Praticando a função "Prototype" para criar function nos objetos
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

const guilherme2 = new Pessoa('Guilherme', 20)
guilherme2.falar()

