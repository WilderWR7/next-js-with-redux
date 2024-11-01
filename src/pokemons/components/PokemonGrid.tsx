import { SimplePokemon } from "@/app/pokemons"
import { PokemonCard } from "./PokemonCard"

interface Props {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-row flex-wrap">
            {
                pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))
            }
        </div>
    )
}
