import {  useEffect, useState } from "react";

import "./App.css";

import Card from './Card';


import SearchIcon from './search.svg';

// b7ee9859 -> API key

const API_URL = "http://www.omdbapi.com?apikey=b7ee9859"


const App = () => {

    const [movies, setMovies] = useState([]) ;

    const [search, setSearch] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)

        const data = await response.json();

        setMovies(data.Search);
    }
 

    useEffect( () => {
        searchMovies("Batman")
    }, [] )

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder="Search For Movies" 
                value={search} 
                onChange={ (value) => {
                    setSearch(value.target.value)
                }}/>

                <img 
                    src={SearchIcon}
                    alt="Search"
                    onClick={ () => searchMovies(search) }
                />
            </div>


                { movies?.length > 0 
                    ?   (

                        <div className="container">
                            {movies.map((movie) => (
                                <Card movie={movie} />
                            ))}
                        </div>
                    ) :

                    (
                        <div className="empty">
                            <h3>No Movies Found</h3>
                        </div>
                    ) 
                
                }
                    
            </div>

            
           
   
        
    )
}

export default App; 