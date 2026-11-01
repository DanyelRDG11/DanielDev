
import { Link } from 'react-router-dom';
import PiePagina from '../componentes/PiePagina';

function NoExiste() {
    return(
        <>
         <img
            src={`${import.meta.env.BASE_URL}imagenes/error404.jpg`}
            alt="Error 404 - Página no encontrada"
         />
         <h1>
            Parece que esta página no existe o fue movida.
         </h1>
         <Link to="/" className="boton-inicio">
            Volver al inicio
         </Link>
         <PiePagina/>
        </>
    )
}

export default NoExiste