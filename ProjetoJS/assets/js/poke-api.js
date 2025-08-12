const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    // Função principal
    fetch(url)
    .then(response => response.json())
    .then(jsonBody => {
        const pokemons = jsonBody.results

        // Para cada Pokémon, buscar os dados completos e exibir
        return Promise.all(
            pokemons.map(pokemon => 
                fetch(pokemon.url)
                    .then(response => response.json())
            )
        )
    })
    .catch((error) => console.error(error));

}