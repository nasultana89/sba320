import React from 'react'
import { useState, useEffect } from 'react'
function Locations() {
    const [location, setLocation] = useState([]);
    useEffect(() => {
        const getLocation = async () => {
            try {
                const url = 'https://rickandmortyapi.com/api/location'
                // console.log(url);
                const response = await fetch(url);
                const data = await response.json();
                setLocation(data.results);
                // console.log(data);
            } catch (e) {
                console.error(e);
            }
        }
        getLocation();
    }, []);
    const loaded = () => {
        return (
            <div>
                <h1>Locations</h1>
                <ol>
                    {location.map(location => (

                        <li key={location.id}>
                            <h2>{location.name}</h2>
                            <h3>{location.type}</h3>
                            <h4>{location.url}</h4>
                        </li>

                    ))}
                </ol>
            </div>
        )
    }

    const loading = () => {
        return <h1>No locations display</h1>
    }

    return location ? loaded() : loading();

}
export default Locations