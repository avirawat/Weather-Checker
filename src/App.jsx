import React, {useState} from 'react';
import './Index.css';
import {fetchWeatherApi} from './api/fetchWeather'

const App =()=>{
    const [query ,setQuery]=useState('')
    const [weather,setWeather] =useState('')

    const search= async(e)=>{
       if (e.key ==="Enter"){
          const result= await fetchWeatherApi(query)
          setWeather(result)
          setQuery('')
       }
    }
    
    return (
        <div className ="main-container">
        <h1>check weather in just one search</h1>
           <input
               type ="text"
               placeholder="Search..."
               className="search"
               value={query}
               onChange ={(e)=>setQuery(e.target.value)}
               onKeyPress ={search}
           />
           {weather.main && (
               <div className ="city">
                   <h2 className ="city-name">
                       <span>{weather.name}</span>
                       <sup>{weather.sys.country} </sup>
                   </h2>
                   <div className ="city-temp">
                       {Math.round(weather.main.temp)}
                       <sup>&deg;C</sup>
                   </div>
                   <div>
                   <img className="city-icon" 
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                   </div>
               </div>
           )}
          
            
        </div>
    )
}
export default App;
