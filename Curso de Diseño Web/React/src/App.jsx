import Header from "./componentes/Header";
import Lista from "./componentes/Lista";
import LoginForm from "./componentes/Login";
import { useState } from "react";

function App() {
  //const nombre = 'Gabriel';

  //const amigos = ['Fernando', 'Angel', 'Juan', 'Abril'];
  // const lista = [
  //   <li>Fernando</li>,
  //   <li>Angel</li>,
  //   <li>Juan</li>,
  //   <li>Abril</li>
  // ];

  const amigos = [
    { nombre: 'Fernando', telefono: '123-456-789' },
    { nombre: 'Mauricio', telefono: '123-456-789' },
    { nombre: 'Angel', telefono: '123-456-789' },
    { nombre: 'Juan', telefono: '123-456-789' },
    { nombre: 'Abril', telefono: '123-456-789' }
  ];

  const famosos = [
    { nombre: 'CR7', telefono: '123-456-789' },
    { nombre: 'Scarlett Johansson', telefono: '123-456-789' },
    { nombre: 'Nicolas Cade', telefono: '123-456-789' },
    { nombre: 'Andrew Garfiel', telefono: '123-456-789' },
  ];

  //  Condicionales en JSX - Forma 2:------------------
  //const sesionIniciada = true;
  const [sesionIniciada, setSesionIniciada] = useState(false);

  const cerrarSesion = () => {
    setSesionIniciada(false);
  }

  return (
    <>
      {sesionIniciada ? (
        <div className="contenedor">
          <Header nombre={'Gabriel'}></Header>
          <Lista titulo="Lista de amigos" contactos={amigos}></Lista>
          <Lista titulo="Lista de famosos" contactos={famosos}></Lista>
          <button className="btnCerrarSesion" onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
      ) : (
        <LoginForm setSesionIniciada={setSesionIniciada}></LoginForm>
      )}
    </>
  );

  //  Condicionales en JSX - Forma 1:------------------
  // const sesionIniciada = true;
  // if (sesionIniciada === true) {
  //   return(
  //     <div className="contenedor">
  //       <Header nombre={'Gabriel'}></Header>
  //       <Lista titulo="Lista de amigos" contactos={amigos}></Lista>
  //       <Lista titulo="Lista de famosos" contactos={famosos}></Lista>
  //       <button className="btnCerrarSesion">Cerrar Sesión</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <LoginForm></LoginForm>
  //   );
  // }
}

export default App;
