import React from 'react';
import '../stylesheets/Depoimento.css';

function Depoimento(props){
    return (
        <div className='container-depoimento'>
            <img 
            className='img-depoimento'
            src={require(`../images/depoimento-${props.img}.png`)}
            alt='Foto da Emma'/>

            <div className='container-texto-depoimento'>
                <p className='nome-depoimento'>
                {props.nome} de {props.pais} 
                </p>
                <p className='cargo-depoimento'>
                {props.cargo} na {props.empresa} 
                </p>
                <p className='texto-depoimento'>
                "{props.depoimento}"
                </p>
            </div>
        </div>
    );
}
//Asignar Estilos con CSS
export default Depoimento;