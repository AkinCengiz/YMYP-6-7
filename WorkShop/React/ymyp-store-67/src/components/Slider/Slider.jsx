import React from 'react'
import "./Slider.css"

const Slider = () => {
  return (
    <section className='slide-wrapper'>
        <div className="slide-info">
            <h2>İlkbahar Kampanyası</h2>
            <p>Her kesime hitap eden uygun ürünler!!!</p>
            <a href="#">Keşfet</a>
        </div>
        <div className="image-wrapper">
            <img src="/images/campaigne2.png" alt="Kampanya" className='slider-image'/>
        </div>
    </section>
  )
}

export default Slider