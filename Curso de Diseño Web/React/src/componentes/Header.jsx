const Header = (props) => {
    console.log(props);
    return (
        <header className="header">
            <h1>Hola {props.nombre}</h1>
            <p>Hoy es {new Date().toLocaleDateString()}</p>
        </header>
    );
};

export default Header;