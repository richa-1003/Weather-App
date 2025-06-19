import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp()
{
    const[weatherInfo, setWeatherInfo]= useState({
        city: "Pune",
        temp: 29.45,
        tempMin: 29.45,
        tempMax: 29.45,
        humidity: 71,
        feelsLike:33.45,
        weather: "overcast clouds"
    });
    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App By Richa</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/> 
        </div>
    )
}