import React from 'react'
import {useState} from 'react'
import "../stylesheets/Form.css"
import icon from "../assets/icon-title.png"

export default function Form({newLocation}) {


    const [city, setCity] = useState("") // para buscar la ciudad


    function onSubmit(e){
        e.preventDefault()
       /*  console.log({city}) */
        if(city === "" || !city) return; // si city no tiene ningun valor

        newLocation(city) // le pasamos la ciudad a newLocation
    }

  return (
    <div className='container-form' >
        <form onSubmit={onSubmit}>  

            <div className='container-input-form'>
                <div className='container-title'>
                <h1 className="title-form">Tiempo</h1>  
                <img className='title-icon' src={icon} alt="icon-clima" />
                </div>

                <p className='description-form'>Consulte el estado del tiempo en todo momento.</p>                   
                <input type="text" className='input-text' placeholder='Ciudad'  onChange={(e) => setCity(e.target.value)} /* evento onchange para obtener esa info dentro del campo*//>
                <button className='input-btn' type='submit'> Buscar </button>
            </div>
        </form>
    </div>
  )
}
