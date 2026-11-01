


import PiePagina from '../componentes/PiePagina';
import productos from '../datos/productos';
import '../estilos/productos.css';

function Productos() {
    return (
        <>
            <main className="catalogo">
                <h1>Nuestro catálogo</h1>
                <p>Conocé nuestros productos disponibles.</p>

                <section className="lista-productos">
                    {productos.map((producto) => (
                        <article className="tarjeta-producto" key={producto.id}>
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                            />

                            <h2>{producto.nombre}</h2>

                            <p>{producto.descripcion}</p>

                            <p>Categoría: {producto.categoria}</p>

                            <p className="precio">
                                Precio: ${producto.precio.toLocaleString('es-AR')}
                            </p>
                        </article>
                    ))}
                </section>
            </main>

            <PiePagina />
        </>
    );
}

export default Productos;

