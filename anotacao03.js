// Funções junto com funções
function falarMeuNome() {
    console.log('Meu nome é Guilherme')
}

function falarMeuNomeCompleto(falarMeuNome){
    falarMeuNome()
    console.log('Muniz Barreto')
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)()


// Funções com variaveis
function nomeDaFuncao(){
    console.log('nome da funcao')
}

const nomeDaOutraFuncao = function(){
    console.log('nomeDeOutra funcao')
}
nomeDaFuncao()
nomeDaOutraFuncao()
