import React from 'react';
import * as C from './style';

function ButtonMost({ text, handleMost }) {
    return (
        <C.Container>
             
            <button className='Most' onClick={handleMost}>
                {text}
            </button>
        </C.Container>
    )
}

export default ButtonMost;