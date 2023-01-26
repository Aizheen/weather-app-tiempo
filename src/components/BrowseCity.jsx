import React from 'react'
import '../stylesheets/Card.css'
import icon from "../assets/icon-question.png"


export default function BrowseCity() {

    
  return (
    <div className='container-browse-city'>
    <div className='browse-city'>
      <h2 className="title-city">Consulte el clima de su ciudad</h2>
      <img src={icon} alt="icon-clima" className='card-icon' />
  </div>
  </div>
  )
}
