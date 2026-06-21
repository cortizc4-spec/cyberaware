import { useState } from "react";
import "../Styles/Simulacion.css";

import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Simulacion() {

  const correos = [

    {
      remitente: "seguridad@bancointernacional.com",
      asunto: "Verificación urgente de cuenta",
      mensaje:
        "Hemos detectado movimientos inusuales en su cuenta bancaria. Verifique sus datos para evitar el bloqueo temporal.",
      avatar: "🏦"
    },

    {
      remitente: "soporte@microsoft-security.com",
      asunto: "Su cuenta será suspendida",
      mensaje:
        "Se detectó actividad sospechosa en su cuenta Outlook. Confirme sus credenciales para evitar la suspensión.",
      avatar: "💻"
    },

    {
      remitente: "facturacion@netflix-soporte.com",
      asunto: "Problema con su método de pago",
      mensaje:
        "No hemos podido procesar el pago de su suscripción. Actualice la información de facturación.",
      avatar: "🎬"
    },

    {
      remitente: "pedidos@amazon-security.com",
      asunto: "Compra no reconocida",
      mensaje:
        "Se registró una compra desde un dispositivo desconocido. Verifique si reconoce esta actividad.",
      avatar: "📦"
    }

  ];

  const [correoAleatorio] = useState(

    correos[
      Math.floor(
        Math.random() * correos.length
      )
    ]

  );

  const [mensaje, setMensaje] = useState("");

  const guardarResultado = async (resultado) => {

    try {

      // RESULTADOS

      await addDoc(
        collection(db, "resultados"),
        {

          id_usuario: "usuario1",

          correo: "usuario@ejemplo.com",

          id_simulacion: correoAleatorio.asunto,

          resultado: resultado,

          puntaje:
            resultado === "Correcto"
              ? 100
              : resultado === "Ignorado"
              ? 70
              : 40,

          vulnerabilidad:
            resultado === "Correcto"
              ? "Baja"
              : resultado === "Ignorado"
              ? "Media"
              : "Alta",

          fecha_resultado:
            new Date().toLocaleString()

        }
      );

      // SIMULACIONES

      await addDoc(
        collection(db, "simulaciones"),
        {

          nombre:
            correoAleatorio.asunto,

          remitente:
            correoAleatorio.remitente,

          fecha:
            new Date().toLocaleString()

        }
      );

      console.log(
        "Datos guardados correctamente"
      );

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="simulacion-container">

      <div className="correo-card">

        <div className="gmail-header">

          <div className="avatar">
            {correoAleatorio.avatar}
          </div>

          <div>

            <h2>
              {correoAleatorio.remitente}
            </h2>

            <p>
              {correoAleatorio.asunto}
            </p>

          </div>

        </div>

        <div className="correo-body">

          <p>
            Estimado usuario:
          </p>

          <p>
            {correoAleatorio.mensaje}
          </p>

        </div>

        <div className="buttons">

          <button
            className="danger"
            onClick={() => {

              setMensaje(
                "⚠ Has caído en una simulación de phishing."
              );

              guardarResultado(
                "Incorrecto"
              );

            }}
          >

            Abrir Enlace

          </button>

          <button
            className="warning"
            onClick={() => {

              setMensaje(
                "ℹ Has ignorado el correo."
              );

              guardarResultado(
                "Ignorado"
              );

            }}
          >

            Ignorar

          </button>

          <button
            className="success"
            onClick={() => {

              setMensaje(
                "✅ Excelente. Has identificado phishing."
              );

              guardarResultado(
                "Correcto"
              );

            }}
          >

            Reportar Phishing

          </button>

        </div>

        <h3>

          {mensaje}

        </h3>

      </div>

    </div>

  );

}

export default Simulacion;