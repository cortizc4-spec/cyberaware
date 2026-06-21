import { useEffect, useState } from "react";
import "../Styles/Reportes.css";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Reportes() {

  const [total, setTotal] = useState(0);
  const [correctas, setCorrectas] = useState(0);
  const [incorrectas, setIncorrectas] = useState(0);
  const [riesgo, setRiesgo] = useState("Bajo");

  useEffect(() => {

    cargarReportes();

  }, []);

  const cargarReportes = async () => {

    const querySnapshot = await getDocs(
      collection(db, "simulaciones")
    );

    let totalSimulaciones = 0;
    let respuestasCorrectas = 0;
    let respuestasIncorrectas = 0;

    querySnapshot.forEach((doc) => {

      totalSimulaciones++;

      const dato = doc.data();

      if (dato.resultado === "Correcto") {

        respuestasCorrectas++;

      }

      if (dato.resultado === "Incorrecto") {

        respuestasIncorrectas++;

      }

    });

    setTotal(totalSimulaciones);
    setCorrectas(respuestasCorrectas);
    setIncorrectas(respuestasIncorrectas);

    if (respuestasIncorrectas >= 5) {

      setRiesgo("Alto");

    } else if (respuestasIncorrectas >= 3) {

      setRiesgo("Medio");

    } else {

      setRiesgo("Bajo");

    }

  };

  return (

    <div className="reportes-container">

      <h1>Reportes de Seguridad</h1>

      <div className="reportes-cards">

        <div className="reporte-card">
          <h2>{total}</h2>
          <p>Simulaciones Realizadas</p>
        </div>

        <div className="reporte-card">
          <h2>{correctas}</h2>
          <p>Correctas</p>
        </div>

        <div className="reporte-card">
          <h2>{incorrectas}</h2>
          <p>Incorrectas</p>
        </div>

        <div className="reporte-card">
          <h2>{riesgo}</h2>
          <p>Nivel de Riesgo</p>
        </div>

      </div>

    </div>

  );
}

export default Reportes;