//variaveis
let x = {number:10}
x = {number:20}
console.log(x.number)

let y = 30
y = 40
console.log(y)


//template string
console.log(`<div id="10">teste<div>`)


//Symbol deixa o valor único
const z = Symbol(10);
const w = Symbol(10);
console.log(z === w)


//Declaração de objetos
const pessoa = {
    'nome': 'Guilherme',
    'sobrenome': 'Muniz',
    'idade': '20',
    falar: function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

pessoa.pais = 'Brasil'

console.log(pessoa)
pessoa.falar()

