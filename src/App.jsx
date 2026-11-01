import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Inicio from './paginas/Inicio';
import  Productos from "./paginas/Productos";
import Contacto from './paginas/Contacto';
import NoExiste from "./paginas/NoExiste";
import './estilos/global.css';

function App() {


  return (
    <>
    
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<NoExiste />} />
    </Routes>

    </BrowserRouter>
     
     
    </>
  )
}

export default App
