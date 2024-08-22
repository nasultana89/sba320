import React from 'react'
import { useState, useEffect } from 'react'
import Form from '../components/Form';
import CharacterDisplay from '../components/CharacterDisplay';


function Characters() {
    const [characters, setCharacters] = useState([]);
    // useEffect(() => {
    const getCharacter = async (searchTerm) => {
        console.log(searchTerm)
        const baseUrl = 'https://rickandmortyapi.com/api/character'
        const url = baseUrl + '?name=' + searchTerm
        // console.log(url)
        try {
            const response = await fetch(url);
            // console.log(url);
            const data = await response.json();
            setCharacters(data)
            console.log(data);
            setCharacters(data.results);
        } catch (e) {
            console.error(e);
        };
    };
    // getCharacter()
    // }, [searchTerm]);


    return (
        <div>
            <Form characterssearch={getCharacter} />
            <CharacterDisplay characters1={characters} />
        </div>
    )

}


export default Characters