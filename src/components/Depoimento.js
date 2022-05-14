import React from 'react';

function Depoimento(){
    return (
        <div className='container-depoimento'>
            <img 
            className='img-depoimento'
            src={require('../imagens/depoimento-emma.png')}
            alt='Foto da Emma'/>

            <div className='container-texto-depoimento'>
                <p className='nome-depoimento'>
                Emma Bostian en Suecia
                </p>
                <p className='cargo-depoimento'>
                Engenharia de Software no Spotify
                </p>
                <p className='texto-depoimento'>
                Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.
                </p>
            </div>
        </div>
    );
}

export default Depoimento;