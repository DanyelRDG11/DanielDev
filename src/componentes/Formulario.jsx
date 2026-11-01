import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Formulario() {
    const form = useRef();
    const [estado, setEstado] = useState('');
    const [enviando, setEnviando] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setEnviando(true);
        setEstado('');

        try {
            await emailjs.sendForm(
                'service_mtd578z',
                'template_ku18md7',
                form.current,
                {
                    publicKey: 'tkhjb1oTnJAGyFXm3',
                }
            );

            setEstado('¡Mensaje enviado correctamente!');
            form.current.reset();
        } catch (error) {
            console.error('Error al enviar:', error);
            setEstado('No se pudo enviar el mensaje. Intentá nuevamente.');
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div className="contenedor-formulario">
            <h2>Envianos tu consulta</h2>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="formulario-contacto"
            >
                <label htmlFor="nombre">Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    name="name"
                    placeholder="Ingresá tu nombre"
                    required
                />

                <label htmlFor="email">Correo electrónico</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Ingresá tu correo"
                    required
                />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="message"
                    rows="5"
                    placeholder="Escribí tu consulta..."
                    required
                />

                <button type="submit" disabled={enviando}>
                    {enviando ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {estado && <p role="status">{estado}</p>}
            </form>
        </div>
    );
}

export default Formulario;