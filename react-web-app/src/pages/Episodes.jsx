import React from 'react'
import { useState, useEffect } from 'react'
function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        const getEpisodes = async () => {
            try {
                const url = 'https://rickandmortyapi.com/api/episode'
                // console.log(url);
                const response = await fetch(url);
                const data = await response.json();
                setEpisodes(data.results);
                // console.log(data);
            } catch (e) {
                console.error(e);
            }
        }
        getEpisodes();
    }, []);
    const loaded = () => {
        return (
            <div>
                <h1>Episodes</h1>
                <ol>
                    {episodes.map(episode => (

                        <li key={episode.id}>
                            <h2>{episode.name}</h2>
                            <h3>{episode.url}</h3>
                            <h4>{episode.created}</h4>
                        </li>

                    ))}
                </ol>
            </div>
        )
    }

    const loading = () => {
        return <h1>No episodes display</h1>
    }

    return episodes ? loaded() : loading();

}




export default Episodes;