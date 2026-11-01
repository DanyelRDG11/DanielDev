
import { useEffect, useState } from 'react';
import axios from 'axios';
import PiePagina from '../componentes/PiePagina';
import '../estilos/productos.css';

function Inicio() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function obtenerProductos() {
            try {
                const respuesta = await axios.get(
                    'https://dummyjson.com/products/category/smartphones'
                );

                setProductos(respuesta.data.products);
            } catch (error) {
                setError('No se pudieron cargar los productos.');
                console.error(error);
            } finally {
                setCargando(false);
            }
        }

        obtenerProductos();
    }, []);

    return (
        <>
        <main className="catalogo">
            <h1>Bienvenido a DanielDev tu tienda tecnologica</h1>
            <p>Descubrí nuestros productos destacados.</p>

            {cargando && <p>Cargando productos...</p>}
            {error && <p>{error}</p>}

            <section className="lista-productos">
                {productos.map((producto) => (
                    <article
                        className="tarjeta-producto"
                        key={producto.id}
                    >
                        <img
                            src={producto.thumbnail}
                            alt={producto.title}
                        />

                        <h2>{producto.title}</h2>
                        <p>{producto.description}</p>

                        <p className="precio">
                            Precio: ${producto.price.toLocaleString('es-AR')}
                        </p>
                    </article>
                ))}
            </section>
        </main>

        <PiePagina />
    </>
    );
}

export default Inicio;
