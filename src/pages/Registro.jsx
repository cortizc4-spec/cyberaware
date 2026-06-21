import { useState } from "react";
import "../Styles/Registro.css";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Registro() {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrarUsuario = async (e) => {

    e.preventDefault();

    try {

      await createUserWithEmailAndPassword(
        auth,
        correo,
        password
      );

      setMensaje("✅ Usuario registrado correctamente");

    } catch (error) {

      setMensaje("❌ Error: " + error.message);

    }

  };

  return (

    <div className="registro-container">

      <div className="registro-card">

        <h1>Registro de Usuarios</h1>

        <p>
          Complete el siguiente formulario para crear una cuenta.
        </p>

        <form onSubmit={registrarUsuario}>

          <input
            type="email"
            placeholder="Correo Electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Registrarse
          </button>

        </form>

        <p>{mensaje}</p>

      </div>

    </div>

  );
}

export default Registro;