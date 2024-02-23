import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from "../../assets/productos.json"
import './style.css'
import { BrowserRouter as Link } from 'react-router-dom';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let idtoInt = parseInt(id);
        const prd = productos.find((producto) => producto.id === idtoInt);
        setProduct(prd);
    }, [id]);

    function onGoBack(e) {
        window.location.href = '/';
    }

    //nombre, descripcion, precio, calorias, grasas, carbohidratos, proteinas, azucares, sodio, imagen
    return (
        <div className='product-wrapper'>
            <div className='buy-footer'>
                <button className='buy-button'>Comprar</button>
            </div>
            <img src={product?.imagen} alt={product?.nombre} className='product-image'/>
            <div className='product-info'>
            <div className='main-info'>
            <h1>{product?.nombre}</h1>
        
            <button className='return-menu' onClick={onGoBack}>Go Back</button>
            
            </div>
            
            <p>{product?.descripcion}</p>
            </div>
            
            <div className='product-price'>
                <p>${product?.precio}.00 c/u</p>
            </div>

            <table>
                <tbody>
                <tr>
                    <td>Calorias</td>
                    <td>{product?.calorias}</td>
                </tr>
                <tr>
                    <td>Grasas</td>
                    <td>{product?.grasas}</td>
                </tr>
                <tr>
                    <td>Carbohidratos</td>
                    <td>{product?.carbohidratos}</td>
                </tr>
                <tr>
                    <td>Proteinas</td>
                    <td>{product?.proteinas}</td>
                </tr>
                <tr>
                    <td>Azucares</td>
                    <td>{product?.azucares}</td>
                </tr>
                <tr>
                    <td>Sodio</td>
                    <td>{product?.sodio}</td>
                </tr>
                </tbody>
            </table>
            <div style={{height: "10vh"}}></div>
        </div>
    )
}
