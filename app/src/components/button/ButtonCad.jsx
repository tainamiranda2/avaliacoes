import React from 'react';
import * as C from './style';

function ButtonCad({ text, handleMost }) {
    return (
        <C.Container>
             
            <button className='ButtonCad' onClick={handleMost}>
                {text}
            </button>
        </C.Container>
    )
}

export default ButtonCad;