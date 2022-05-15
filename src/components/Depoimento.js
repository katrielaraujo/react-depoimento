import React from 'react';
import '../stylesheets/Depoimento.css';

function Depoimento(props){
    return (
        <div className='container-depoimento'>
            <img 
            className='img-depoimento'
            src={require(`../images/depoimento-${props.img}.png`)}
            alt={`Foto da ${props.nome}`} />

            <div className='container-texto-depoimento'>
                <p className='nome-depoimento'>
                <strong>{props.nome}</strong> de {props.pais} 
                </p>
                <p className='cargo-depoimento'>
                {props.cargo} na <strong>{props.empresa}</strong> 
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