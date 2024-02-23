import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from "../../assets/productos.json"
import './style.css';

export default function Buy() {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [cantidad, setCantidad] = useState(1);

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let idtoInt = parseInt(id);
        const prd = productos.find((producto) => producto.id === idtoInt);
        setProduct(prd);
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Compra realizada: ${cantidad} ${product?.nombre} por un total de $${product?.precio * cantidad} a nombre de ${nombre} con dirección ${direccion}`);
        window.location.href = '/';

    };

    return (
        <div className='buy-body'>
            <img src={product?.imagen} alt={product?.nombre} className='product-image' />
            <h1 className='product-name'>{product?.nombre}</h1>
            <form onSubmit={handleSubmit} className='buy-form'>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Dirección:
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Cantidad:
                    <input
                        type="number"
                        value={cantidad}
                        onChange={(e) => setCantidad(parseInt(e.target.value))}
                        min="1"
                        required
                    />
                </label>
                <button type="submit">Comprar</button>
            </form>
            {
                (product?.precio * cantidad) != NaN && <div className='product-price'> <p>${product?.precio * cantidad}</p></div>
            }
        </div>

    );
}
