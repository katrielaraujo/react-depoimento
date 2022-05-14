import React from 'react';
import '../stylesheets/Depoimento.css';

function Depoimento(props){
    return (
        <div className='container-depoimento'>
            <img 
            className='img-depoimento'
            src={require(`../images/depoimento-shawn1.png`)}
            alt='Foto da Emma'/>

            <div className='container-texto-depoimento'>
                <p className='nome-depoimento'>
                {} de {} 
                </p>
                <p className='cargo-depoimento'>
                {} n {} 
                </p>
                <p className='texto-depoimento'>
                {}
                </p>
            </div>
        </div>
    );
}
//Asignar Estilos con CSS
export default Depoimento;