import "../Styles/Dashboard.css";

import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Dashboard() {

  const cerrarSesion = async () => {

    try {

      await signOut(auth);

      alert("Sesión cerrada correctamente");

      window.location.href="/login";

    } catch(error){

      console.log(error);

    }

  };

  return (

    <div className="dashboard-container">

      <h1>Panel Principal</h1>

      <p>
        Bienvenido al Sistema Web de Concienciación en Ciberseguridad
      </p>

      <div className="cards">

        <div className="dashboard-card">
          <h2>5</h2>
          <p>Simulaciones</p>
        </div>

        <div className="dashboard-card">
          <h2>3</h2>
          <p>Reportes</p>
        </div>

        <div className="dashboard-card">
          <h2>Bajo</h2>
          <p>Nivel de Riesgo</p>
        </div>

      </div>

      <div className="buttons">

        <a href="/simulacion">
          <button>
            Ir a Simulación
          </button>
        </a>

        <a href="/reportes">
          <button>
            Ver Reportes
          </button>
        </a>

        <button
          onClick={cerrarSesion}
        >
          Cerrar Sesión
        </button>

      </div>

    </div>

  );

}

export default Dashboard;