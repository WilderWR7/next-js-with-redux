export const getPokemon = async (value: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`, {
        cache: 'force-cache', //todo: cambiar en el futuro
        next: {
            revalidate: 60 * 60 * 30 * 6 //en 6 meses
        }
    }).then(res => res.json());
    return response;
}

