import { useState, useEffect } from "react";
import "../index.css";  
import PokemonBox from "./pokemonbox";
import "../type_colors/typecolors"



export default function Pokemon () {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            let pokemon = await loadingPokemon(response.results);
        }
        fetchData();
    }, [])

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord
        }))


        setPokemonData(_pokemonData)
    }
    console.log(pokemonData);
    return (     
        
        <div className="wrapper">
            {pokemonData.map((pokemon, i) => {
                return ( 
                    <>
                    <PokemonBox key={pokemon.id} pokemon={pokemon} />
                    </>
                )

            })}
        </div>
        )
    }


async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}

async function getPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data)
            ;
        })
    })
}
