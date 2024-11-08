import { notFound } from "next/navigation";
import { PokemonsResponse } from "../interfaces/pokemons-response";
import { SimplePokemon } from "../interfaces/simple-pokemon";

export const getPokemons = async (limit = 151, offser = 0): Promise<SimplePokemon[]> => {
    try {
        
        const data: PokemonsResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offser)
            .then(res => res.json())
        const pokemons = data.results.map((pokemon) => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }));
        return pokemons;
    } catch (error) {
        console.log(error);
        throw notFound();
    }
}