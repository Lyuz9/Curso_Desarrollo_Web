import Header from "./componentes/layout/Header"
import Hero from "./componentes/layout/Hero"
import Clientes from "./componentes/layout/Clientes"
import Trabajos from "./componentes/layout/Trabajos"
import AcercaDe from "./componentes/layout/AcercaDe"

function App() {
  return (
    <>
      <div className="contenedor">
        <Header></Header>
        <Hero></Hero>
        <Clientes></Clientes>
        <Trabajos></Trabajos>
        <AcercaDe></AcercaDe>
      </div>
    </>
  )
}

export default App
