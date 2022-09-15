import { useEffect, useState } from "react";
import LocationWeather from "./LocationWeather";

const API_URL = 'http://api.weatherstack.com/current?access_key=38b2aeb0fe541d0bc294766845114657';

const App = () =>  {

    const [weather, setWeather] = useState([]);
    const [searchLocation, setSearchLocation] = useState('');

    const searchWeather = async (location) => {
        const response = await fetch(`${API_URL}&query=${location}`);
        const data = await response.json();
        setWeather(data);
    };

    useEffect(() => {
        searchWeather('Lisboa')
    }, []);

    return (
        <div className="app">
            <h1>Weather</h1>
            <div className="search">
                <input placeholder="Your Location" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)}/>
            <input type="submit" onClick={() => searchWeather(searchLocation)} />
            </div>
            {
                weather
                    ? (
                        <div className="container">
                            <LocationWeather weather={weather} />
                        </div>
                    ) : 
                    (
                        <div className="empty">
                            <h2>No location found.</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;