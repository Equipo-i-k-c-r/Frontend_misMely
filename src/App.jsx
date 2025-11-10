import "./styles/App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <h1>Bienvenido a MisMely</h1>
        <p>Contenido principal aquí...</p>
      </main>
    </div>
  );
}

export default App;
