import React from 'react'
import {useState} from 'react'
import Card from './Card'
import Form from './Form'
import "../stylesheets/WeatherPanel.css"

export default function WeatherPanel() {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?&appid=77243c6839346201c145789f0aee40b5&lang=es"
    let cityUrl = "&q=" // con esto indicamos la ciudad desde nuestro form
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&appid=77243c6839346201c145789f0aee40b5&lang=es"  //forecast es el tiempo en las proximas horas o dias

    const [weather,setWeather] = useState([])// almacenamos la respuesta q nos da la api(el tiempo actual)
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false) 
    const [show, setShow] = useState(false) //visualizar tarjeta con info
    const [location, setLocation] = useState("") // con esto se comunica con el formulario
    

   const getLocation= async(loc) =>{ // esta funcion hace la llamada a la api para obtener la locacion
         setLoading(true) // para q cargue el spinner
         setLocation(loc)

         //weather

         urlWeather = urlWeather + cityUrl + loc;

         await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json()
         }).then((weatherData) =>{
           /*  console.log(weatherData) */
            setWeather(weatherData)
         }) .catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
         })

        //Forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{ //aca sacamos la respuesta
         if(!response.ok) throw {response}
         return response.json()
      }).then((forecastData) =>{
        /*  console.log(forecastData) */
         setForecast(forecastData)


         setLoading(false) // deja de cargar el spiner
         setShow(true) // se visualiza la tarjeta con toda la info

      }) .catch(error => {
         console.log(error)
         setLoading(false)
         setShow(false)
      })
    }
  

  return (
      <React.Fragment>  {/* le pasamos la localizacion a travez del prop */}
      <div className='container-main'>
         <div className='container'>
      <Form newLocation = {getLocation} /> 
      <Card 
      showData={show} 
      loadingData={loading}
      weather={weather}
      forecast={forecast}/>
         </div>
      </div>
      </React.Fragment>
  )
}
