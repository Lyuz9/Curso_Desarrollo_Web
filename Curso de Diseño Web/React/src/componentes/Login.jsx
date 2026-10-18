import { useState } from "react";

const LoginForm = ({setSesionIniciada}) => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');

    // const iniciarSesion = () => {
    //     setSesionIniciada(true);
    // };

    const handleUsuario = (evento) => {
        setUsuario(evento.target.value);
    };

    const handleContraseña = (evento) => {
        setContraseña(evento.target.value);
    };

    const handleSubmit = (evento) => {
        evento.preventDefault();

        //Forma insegura de validacion (login)
        if(usuario === 'Gabriel' && contraseña === 'Lyuz.0917@'){
            setSesionIniciada(true);
        }else{
            alert('Datos incorrectos');
        }
        //------------
    }

    return(
        <div className="contenedor">
            <form className="login" onSubmit={handleSubmit}>
                <h3>Inicia Sesión</h3>
                <input type="text" placeholder="Usuario" onChange={handleUsuario} value={usuario}/>
                <input type="password" placeholder="Contraseña" onChange={handleContraseña} value={contraseña}/>
                <button>Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default LoginForm;