import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import './style.css';
import productos from "../../assets/productos.json";

export default function Menu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 500;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='menu'>
      <h1 className='menu-title'>Menu</h1>
      {isMobile && (
        <div className='menu-cards'>
          {productos.map((producto) => (
            <Card
              id={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              calorias={producto.calorias}
              grasas={producto.grasas}
              carbohidratos={producto.carbohidratos}
              proteinas={producto.proteinas}
              azucares={producto.azucares}
              sodio={producto.sodio}
            />
          ))}
        </div>
      )}
    </div>
  );
}

