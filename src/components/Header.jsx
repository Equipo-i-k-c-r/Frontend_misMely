import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Header.css";

function Header() {
  const [empresa, setEmpresa] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEmpresa = async () => {
      try {
        const response = await axios.get("http://localhost:8080/empresa");
        const data = Array.isArray(response.data)
          ? response.data[0]
          : response.data;

        if (data) setEmpresa(data);
        else setError(true);
      } catch (err) {
        console.error("❌ Error al obtener empresa:", err);
        setError(true);
      }
    };

    fetchEmpresa();
  }, []);

  return (
    <header className="empresa-header">
      {error ? (
        <p className="error-text">No se pudo cargar la información de la empresa.</p>
      ) : empresa ? (
        <div className="empresa-info">
          <h1 className="empresa-nombre">{empresa.nombreE}</h1>
          <p>
            <strong>📞 Teléfono:</strong> {empresa.telefonoE}
          </p>
          <p>
            <strong>📧 Correo:</strong> {empresa.correoE}
          </p>
          <p>
            <strong>🧾 RUC:</strong> {empresa.ruc || "No registrado"}
          </p>
        </div>
      ) : (
        <p className="cargando">Cargando información de la empresa...</p>
      )}
    </header>
  );
}

export default Header;
