function Home() {
  return (
    <div>
      <h2 className="mb-3">Bienvenido a Viajes Odisea IA</h2>
      <p className="lead">¡Descubre destinos increíbles y planifica tu viaje perfecto con nosotros!</p>
      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img src="/Tropical_beach_LIL_192401.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">Destinos de Playa</h3>
              <p className="card-text">Relájate en playas prístinas con aguas cristalinas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img src="/Hiking_trail_through_redwood_forest_LIL_114268.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">Aventuras en la Montaña</h3>
              <p className="card-text">Explora impresionantes cadenas montañosas y rutas de senderismo.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100">
            <img src="/Paris_city_LIL_193338.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">Tours por la Ciudad</h3>
              <p className="card-text">Experimenta culturas vibrantes en increíbles ciudades de todo el mundo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home