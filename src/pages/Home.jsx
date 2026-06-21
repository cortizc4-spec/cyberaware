import "../Styles/Home.css";

function Home() {
  return (
    <div className="home-container">

      <nav className="navbar">
        <h2>CyberSecurity Platform</h2>

        <div>
          <a href="/login">
  <button className="btn-login">
    Iniciar Sesión
  </button>
</a>
        <a href="/registro">
  <button className="btn-register">
    Registrarse
  </button>
</a>
        </div>
      </nav>

      <section className="hero">

        <h1>
          Sistema Web de Concienciación en Ciberseguridad
        </h1>

        <p>
          Plataforma diseñada para fortalecer la cultura de seguridad digital
          mediante simulaciones de phishing, evaluaciones y reportes interactivos.
        </p>

<a href="/registro">
  <button className="btn-primary">
    Comenzar Ahora
  </button>
</a>

      </section>

      <section className="cards">

        <div className="card">
          <h3>🔐 Seguridad</h3>
          <p>Capacitación continua en buenas prácticas de ciberseguridad.</p>
        </div>

        <div className="card">
          <h3>📧 Phishing</h3>
          <p>Simulaciones para detectar correos fraudulentos.</p>
        </div>

        <div className="card">
          <h3>📊 Reportes</h3>
          <p>Resultados personalizados para cada usuario.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;