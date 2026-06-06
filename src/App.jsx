import { Nav } from "./components/Nav.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { ListaProyectos } from "./components/ListaProyectos.jsx";
import "./css/App.css";

function App() {
  return (
    <>
      <Header />
      <Nav activo="2" />
      <ListaProyectos />
      <Footer />
    </>
  );
}

export default App;