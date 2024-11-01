// import { notFound } from "next/navigation";

import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offser = 0):Promise<SimplePokemon[]> => {
   const data:PokemonsResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offser)
      .then(res => res.json())
   const pokemons = data.results.map((pokemon, index) => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
   }));

   // throw notFound();
   return pokemons;
}

export default async function Pokemonspage() {

   const pokemons = await getPokemons();
   return (
      <div className="flex flex-col">
         <PokemonGrid pokemons={pokemons}/>
      </div>
   )
}
