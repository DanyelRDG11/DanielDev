
function Mapa() {
    return (
        <div className="contenedor-mapa">
            <h2>Nuestra ubicación</h2>
            <p>Centro de Salta Capital</p>

            <iframe
                title="Mapa del centro de Salta"
                src="https://maps.google.com/maps?q=Centro%20de%20Salta%20Capital%2C%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
            />
        </div>
    );
}

export default Mapa;