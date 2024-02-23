import React from 'react'
import './style.css'

//nombre, descripcion, precio, caloriass, grasas, carbohidratos, proteinas, azucares, sodio
import Empanada from "/empanada.png"

function TruncateText({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <>{text}</>;
  } else {
    const truncatedText = text.substring(0, maxLength) + '...';
    return <>{truncatedText}</>;
  }
}



export default function Card(props) {
  function onComprar(e) {
    window.location.href = `/product/${props.id}`;
  }

  return (
    <div className="card">
      <img src={Empanada} alt="Empanada" className="card-img"/>
      <div className="sub-card">
        <h1 className="card-title">{props.nombre}</h1>
        <p className="card-description"><TruncateText text={props.descripcion} maxLength={100} /></p>
        <div className='card-payment'>
          <p className="card-price">${props.precio}.00 c/u</p>
          <button className="card-comprar"  onClick={onComprar}>Comprar</button>
        </div>
        
      </div>
    </div>


  )
}
