const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//Fetch retorna uma Promise
fetch(url)
    //utilizando arrow function "=>", com encadeamento de THEN, o primeiro then vem do retorno da PROMISE,
    //o segundo then, vem do retorno do primeiro e por ultimo o error
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))// Atraves desse Json de resposta conseguimos manipular o body
    .catch((error) => console.error(error))