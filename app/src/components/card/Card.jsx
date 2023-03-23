import React from 'react';
import * as C from './style';

function Card({ text, title,email,nota }) {
    return (
        <C.Container>
            <main className="Container">
            <article className='card'>         
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span>{ email}</span>/<label>{nota}</label>
                </article>
                
            </main>
           
            
        </C.Container>
    )
}

export default Card;