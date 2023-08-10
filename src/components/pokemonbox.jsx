import "../index.css";
import typeColors from "../type_colors/typecolors";
import { Link, NavLink, redirect, Route, Routes } from "react-router-dom";



export default function PokemonBox ({pokemon}) {
    return(
        <div className="links">
            <NavLink to={`/pokemon/${pokemon.name}`}>
            <div className="pokemon-container">
                <div className="pokemonbox-number">
                    {pokemon.id}
                </div>
                <div className="pokemonbox-image">
                    <img src={pokemon.sprites.front_default}  alt=''/>
                </div>
                <div className="pokemonbox-name">
                    {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </div>
                <div className="pokemonbox-types">
                    {pokemon.types.map(type => {
                        return (
                                <div                                    
                                className="pokemonbox-type"
                                style={ {backgroundColor : typeColors[type.type.name]}}
                                >
                                    {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                </div>
                                )
                })}
                </div>    
            </div>
            </NavLink>
        </div>
    )
    
}