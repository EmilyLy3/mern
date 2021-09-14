import React, {useState} from 'react';


const Pokemon = () => {
    const [allPokemon, setAllPokemon] = useState([]);


    const clickHandler = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
            .then(response => {
                return response.json();
            })
            .then(response => {
                // console.log("--------------");
                // console.log(response);
                setAllPokemon(response.results);
            })
            .catch(error => {
                console.log(error);
            })
        // console.log(allPokemon);
    };


    return (
        <div>
            <h1>Welcome to the Pokemon API!</h1>
            <button onClick={clickHandler}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon, index) => {
                    return <p key={index}>{index+1}. {pokemon.name}</p>
                })
            }
        </div>
    );
};


export default Pokemon;