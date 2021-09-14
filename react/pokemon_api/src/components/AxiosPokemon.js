import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AxiosPokemon = () => {
    const [allPokemon, setAllPokemon] = useState([]);


    const [responseData, setResponseData] = useState([]);


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1200")
        .then(response => {
            // console.log(response);
            setResponseData(response.data.results);
        })
        .catch(error => {
            console.log(error)
        })
    }, [])


    const clickHandler = () => {
        setAllPokemon(responseData);
    }


    return (
        <div>
            <h1>Welcome to Axios Pokemon!</h1>
            <button onClick={clickHandler}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon, index) => {
                    return <p key={index}>{index+1}. {pokemon.name}</p>
                })
            }
        </div>
    );
};


export default AxiosPokemon;