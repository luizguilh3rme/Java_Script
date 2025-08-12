const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const pokemonList = document.getElementById('pokemonList')

// Função para converter os dados detalhados de um Pokémon em HTML
function convertPokemonToLi(pokemon) {
    const number = pokemon.id.toString().padStart(3, '0')
    const types = pokemon.types
        .map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`)
        .join('')

    const imgUrl = pokemon.sprites.other['dream_world'].front_default || 
                   pokemon.sprites.other['official-artwork'].front_default || 
                   pokemon.sprites.front_default || ''

    return `
        <li class="pokemon">
            <span class="number">#${number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${types}
                </ol>
                <img src="${imgUrl}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

    pokeApi.getPokemons().then(detailedPokemons => {
        // Montar todos os HTMLs e adicionar de uma vez só
        const newHtml = detailedPokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML = newHtml
    })
    .catch(error => console.error(error))
