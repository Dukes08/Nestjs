export const pokemonId = [12,1243,134,121]

interface Pokemon{
    id: number,
    name: String,
}

export const raichu:Pokemon = {
    id: 1,
    name: 'Raichu'
}

//create an array of pokemos using the interface

export const pokemons: Pokemon[] = []

pokemons.push(raichu)


