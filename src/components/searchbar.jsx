
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../index.css"
var data = require("../NAMES.json");

export default function SearchBar() {

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }
    
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        console.log('search ', searchTerm);
    }

    return (
        
        <div className='search-container'>
            <div className='search-inner'>
                <input type="text" value={value} onChange={onChange} />
                <button onClick={() => onSearch(value)}> Search </button>
            </div>
            <div className='dropdown'>
                {data.filter(item => {
                    const searchTerm = value.toLowerCase();
                    const name = item.name.toLowerCase();

                    return searchTerm && name.startsWith(searchTerm) && name !== searchTerm
                }).slice(0,4)
                .map((item) => (
                <div className='links'>
                    <NavLink to={`/pokemon/${item.name}`}>
                        <div 
                            onClick={()=>onSearch(item.name)}
                            className='dropdown-row'
                            key={item.name}
                        >
                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        </div>
                    </NavLink>
                </div>
            ))}
            </div>
        </div>
    )
}