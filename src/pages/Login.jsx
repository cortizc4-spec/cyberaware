import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const iniciarSesion = async (e) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        correo,
        password
      );

setMensaje("✅ Inicio de sesión exitoso");

setTimeout(() => {
  navigate("/dashboard");
}, 1000);

    } catch (error) {

      setMensaje("❌ Usuario o contraseña incorrectos");

    }

  };

  return (

    <div className="registro-container">

      <div className="registro-card">

        <h1>Iniciar Sesión</h1>

        <form onSubmit={iniciarSesion}>

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
            Ingresar
          </button>

        </form>

        <p>{mensaje}</p>

      </div>

    </div>

  );
}

export default Login;