import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import typeColors from "../../type_colors/typecolors";

export default function PokemonPage() {
    
    let pokemonId = useParams()
    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.name}`)
        .then((r) => r.json())
        .then(setPokemon)
        .catch(setError)
        .finally(() => setLoading(false));
    }, []);
    

    if (error) return <div>Error</div>;
    if (loading) return <div> Loading....</div>;
    

    console.log(pokemon.types.length)
    if (pokemon.types.length > 1){
    return (
        <>
            <div className="links">
                <NavLink to={`/`}>
                    <h1 className="pokedex-link"> Pokedex </h1>
                </NavLink>
            </div>
            <div className="pokemon-page-outer-container">
                <div className="pokemon-page-inner-container">
                    <div className="pokemon-page-name">
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </div>
                    <img className="pokemon-page-image" alt="" src={pokemon.sprites.front_default} />
                    <hr className="pokemon-page-seperator"/>
                    <div className="pokemon-page-information-container">
                        <div className="pokemon-page-item-name"> Name <br /> 
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} 
                        </div>
                        <div className="pokemon-page-item-weight">Weight <br /> {pokemon.weight}kg </div>
                        <div className="pokemon-page-item-height">Height <br /> {pokemon.height}m</div>
                        {pokemon.types.map((pokemonTypes) => {
                            return (
                                <div className="pokemon-page-item-types"> 
                                    Type <br/> {pokemonTypes.type.name.charAt(0).toUpperCase() + pokemonTypes.type.name.slice(1)}
                                </div>
                            )
                        })}
                    </div>

                    
                </div>
                
            </div>
        </>
    )}
    else {
        return (
            <>
                <div className="links">
                    <NavLink to={`/`}>
                        <h1 className="pokedex-link"> Pokedex </h1>
                    </NavLink>
                </div>
                <div className="pokemon-page-outer-container">
                    <div className="pokemon-page-inner-container">
                        <div className="pokemon-page-name">
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </div>
                        <img className="pokemon-page-image" alt="" src={pokemon.sprites.front_default} />
                        <hr className="pokemon-page-seperator"/>
                        <div className="pokemon-page-information-container-2">
                            <div className="pokemon-page-item-name"> Name <br /> 
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} 
                            </div>
                            <div className="pokemon-page-item-weight">Weight <br /> {pokemon.weight}kg </div>
                            <div className="pokemon-page-item-height">Height <br /> {pokemon.height}m</div>
                            {pokemon.types.map((pokemonTypes) => {
                                return (
                                    <div className="pokemon-page-item-types"> 
                                        Type <br/> {pokemonTypes.type.name.charAt(0).toUpperCase() + pokemonTypes.type.name.slice(1)}
                                    </div>
                                )
                            })}
                        </div>
    
                        
                    </div>
                    
                </div>
            </>
        )
    }

}