import SearchBar from "../../components/searchbar";
import Logo from "../../pictures/pngegg.png";
import Pokemon from "../../components/pokemon";

export default function MainPage() {
    return(
        <>
                    <header>
                        <img src={Logo} alt="" />
                    </header>
                    <div className="search-section">
                        <div className="search-type-bar">
                            <b>Name:</b> <SearchBar/> 
                        </div>
                    </div>
                    
                        <div className="pokemon-display-section">
                            <Pokemon />
                        </div>
            </>
            )
}