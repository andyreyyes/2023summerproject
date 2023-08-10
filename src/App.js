import React from "react";
import Logo from "./pictures/pngegg.png"
import SearchBar from "./components/searchbar";
import "./index.css"
import Pokemon from "./components/pokemon";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainPage from "./Pages/MainPage/MainPage"
import PokemonPage from "./Pages/PokemonPage/pokemonpage";
import NAMES from "./NAMES.json"



export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="pokemon/:name" Component={PokemonPage} />
                
                
            </Routes>
        </Router>
    )
}

