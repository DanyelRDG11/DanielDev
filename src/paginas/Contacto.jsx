

import PiePagina from '../componentes/PiePagina';
import Formulario from '../componentes/Formulario';
import Mapa from '../componentes/Mapa';
import '../estilos/contacto.css';

function Contacto() {
    return (
        <>
          <main className="pagina-contacto">
               <h1>Contactanos</h1>
               <section className="contenido-contacto">
                  <Formulario />
                  <Mapa />
                </section>
          </main>
          <PiePagina />
        </>
    );
}

export default Contacto;
