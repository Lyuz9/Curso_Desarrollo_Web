import './Hero.css';

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="contenido">
                    <h3 className="titulo">
                        <span>Hola!</span>Soy Luis Gabriel
                    </h3>
                    <p className="subtitulo">
                        Desarrollado web y freelancer
                    </p>
                    <div className="botones">
                        <a href="#trabajos" className="boton transparente">
                            Ver trabajos
                            <div className="icono">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
                                </svg>
                            </div>
                        </a>

                        <a href="#contacto" className='boton'>
                            Mandame un mensaje de texto
                            <div className="icono">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='video-container'>
                    <video src="./assets/background.mp4" loop autoPlay className='video' type="video/mp4"></video>
                </div>
            </section>
        </>
    );
}

export default Hero;