import React from 'react'
import Spineer from './Spineer'
import '../stylesheets/Card.css'
import icon from "../assets/icon-question.png"
import BrowseCity from './BrowseCity'
import {useState, useEffect} from 'react'

export default function Card({loadingData,showData,weather,forecast}) {
 

  const [showComponent, setShowComponent] = useState(false);

  React.useEffect(() => {
    setShowComponent(true);
  }, []);

  let fecha = new Date();
  let fechaEnPalabra = fecha.toLocaleDateString("es-ES", {weekday: "long", year: "numeric", month: "long", day: "numeric"});

  let url = "";
  let iconUrl = "";

  let iconUrl3 = "";
  let iconUrl6 = "";
  let iconUrl9 = "";

  let forecastDate3 = "";
  let forecastDate6 = "";
  let forecastDate9 = "";


  if (loadingData) {
    return <Spineer />;
  }

  if (showData) {
    url = "https://openweathermap.org/img/wn/"; //se accede al icono
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[1].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      "/" +
      forecast.list[1].dt_txt.substring(11, 13); //substring extrae caracteres
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      "/" +
      forecast.list[2].dt_txt.substring(11, 13); //substring extrae caracteres
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      "/" +
      forecast.list[3].dt_txt.substring(11, 13); //substring extrae caracteres

      
    
    }

  return (
    
    
    <div>

      {showData === true ? (
     
          <div className="card-container">

            <div className="card-1-container">
                <div className='card-1'>

                  <div className='card-1-desk'>
              <h3 className="card-title">{weather.name}</h3>
              <p className="card-date"> {fechaEnPalabra}</p>
              <h1 className="card-temp">
                {(weather.main.temp - 273.15).toFixed(1)}°C
              </h1>
                  </div>

              <div className='desc-container'>
                <img src={iconUrl} alt="weather-icon" className='card-1-img'  />
              <p className="card-desc">
                {weather.weather[0].description}
              </p>
              </div>
                </div>

            </div>

              <div className="card-2">
                <h5 className="card-text">
                  Temperatura máxima:{" "}{(weather.main.temp_max - 273.15).toFixed(1)}
                </h5>
                <h5 className="card-text">
                {" "}Temperatura minima:{" "}
                  {(weather.main.temp_min - 273.15).toFixed(1)}
                </h5>
                <h5 className="card-text">
               {" "}Sensacion termica:{" "}
                  {(weather.main.feels_like - 273.15).toFixed(1)}
                </h5>
                <h5 className="card-text">
               {" "}Humedad: {weather.main.humidity}%
                </h5>
                <h5 className="card-text">
               {" "}Velocidad del viento: {weather.wind.speed} m/s
                </h5>
              </div>

              <div className="card-3-container">

                <div className="card-3">
                  <p>Proximas 6hs</p>
                  <p className="description">
                    {forecast.list[1].weather[0].description}
                  </p>
                  <img src={iconUrl3} alt="icon" className='icon-desc' />
                  <p className="temp">
                    {(forecast.list[1].main.temp - 273.15).toFixed(1)}°C
                  </p>
                </div>

                <div className="card-3">
                  <p>Proximas 9hs</p>
                  <p className="description">
                    {forecast.list[2].weather[0].description}
                  </p>
                  <img src={iconUrl6} alt="icon" className='icon-desc' />
                  <p className="temp">
                    {(forecast.list[2].main.temp - 273.15).toFixed(1)}°C
                  </p>
                </div>

                <div className="card-3">
                  <p>Proximas 12hs</p>
                  <p className="description">
                    {forecast.list[3].weather[0].description}
                  </p> 
                  <img src={iconUrl9} alt="icon" className='icon-desc'/>
                  <p className="temp">
                    {(forecast.list[3].main.temp - 273.15).toFixed(1)}°C
                  </p>
                </div>
          </div>
        </div>
      ) : (
      <BrowseCity/>        
      )}
   
    </div>
  );
}
