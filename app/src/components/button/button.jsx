import React from 'react';
import * as C from './style';
function Button({handleButton,text }) {
    return (
        <C.Container>
            <button className='ButtonBlue' onClick={handleButton}>
                {text}
            </button>
        </C.Container>
    )
}
export default Button;