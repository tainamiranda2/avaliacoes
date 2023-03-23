import React from 'react'
import * as C from './style';
function CardMost({titulo, onClick,text,subtitulo}){
    return (
        <C.Container>
            <div className='CardMost'>
            <h3>
                {titulo}
            </h3>
            <p>{subtitulo}</p>
            <button onClick={onClick}>{text}</button>
            </div>
        </C.Container>
    )
}

export default CardMost;