import { useState } from "react";

import LocationWeather from './LocationWeather.jsx';

import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'http://api.weatherstack.com/current?access_key=38b2aeb0fe541d0bc294766845114657';

const App = () =>  {

    const [weather, setWeather] = useState([]);
    const [searchLocation, setSearchLocation] = useState('');

    const searchWeather = async (location) => {
        const response = await fetch(`${API_URL}&query=${location}`);
        const data = await response.json();
        console.log(data);
        setWeather(data);
    };

    return (
        <div className="app">
            <h1>Weather</h1>
            <div className="search">
                <input placeholder="Your Location" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={() => searchWeather(searchLocation)}  />
            </div>
            {
                weather.length === 0
                    ? (
                        <div className="empty">
                            <h2>No Weather Found</h2>
                        </div>
                    ) : (
                        <div className="container">
                            <LocationWeather weather={weather}/>
                        </div>
                    )
            }
        </div>
    );
}

export default App;