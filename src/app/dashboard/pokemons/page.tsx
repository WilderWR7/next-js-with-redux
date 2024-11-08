import { PokemonGrid } from "@/pokemons";
import { getPokemons } from "@/pokemons/hooks";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: 'Listado de pokémons',
   description: 'Listado de pokémons'
}

export default async function Pokemonspage() {
   const pokemons = await getPokemons(151,0);
   return (
      <div className="flex flex-col">
         <span className="text-5xl my-2">Listado de Pokémons <small className="text-blue-500">estático</small></span>
         <PokemonGrid pokemons={pokemons}/>
      </div>
   )
}